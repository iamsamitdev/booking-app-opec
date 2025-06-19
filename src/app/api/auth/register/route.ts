import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { hashPassword, generateToken } from '@/lib/auth'

const RegisterSchema = z.object({
  fullName: z.string().min(2, { message: "กรุณากรอกชื่อ-สกุลอย่างน้อย 2 ตัวอักษร" }),
  phoneNumber: z.string().min(10, { message: "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)" }).regex(/^[0-9]+$/, { message: "เบอร์โทรศัพท์ต้องเป็นตัวเลขเท่านั้น" }),
  email: z.string().email({ message: "กรุณากรอกอีเมลให้ถูกต้อง" }),
  password: z.string().min(6, { message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" }),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validatedData = RegisterSchema.parse(body)
    
    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: validatedData.email },
          { phoneNumber: validatedData.phoneNumber }
        ]
      }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { 
          error: existingUser.email === validatedData.email 
            ? "อีเมลนี้ถูกใช้งานแล้ว" 
            : "เบอร์โทรศัพท์นี้ถูกใช้งานแล้ว"
        },
        { status: 400 }
      )
    }
    
    // Hash password
    const hashedPassword = await hashPassword(validatedData.password)
    
    // Create user
    const user = await prisma.user.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phoneNumber: validatedData.phoneNumber,
        password: hashedPassword,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        phoneNumber: true,
        createdAt: true,
      }
    })
    
    // Generate JWT token
    const token = generateToken(user.id)
    
    // Create response
    const response = NextResponse.json({
      message: "สมัครสมาชิกสำเร็จ",
      user,
    }, { status: 201 })
    
    // Set HTTP-only cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    })
    
    return response
    
  } catch (error) {
    console.error('Registration error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "ข้อมูลไม่ถูกต้อง", details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการสมัครสมาชิก" },
      { status: 500 }
    )
  }
} 