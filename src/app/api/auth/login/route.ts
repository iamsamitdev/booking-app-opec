import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { comparePasswords, generateToken } from '@/lib/auth'

const LoginSchema = z.object({
  email: z.string().email({ message: "กรุณากรอกอีเมลให้ถูกต้อง" }),
  password: z.string().min(6, { message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" }),
  remember: z.boolean().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validatedData = LoginSchema.parse(body)
    
    // Find user by email
    const user = await prisma.user.findUnique({
      where: {
        email: validatedData.email
      }
    })
    
    if (!user) {
      return NextResponse.json(
        { error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" },
        { status: 401 }
      )
    }
    
    // Verify password
    const isPasswordValid = await comparePasswords(validatedData.password, user.password)
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" },
        { status: 401 }
      )
    }
    
    // Generate JWT token
    const token = generateToken(user.id)
    
    // Prepare user data (exclude password)
    const userResponse = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      createdAt: user.createdAt,
    }
    
    // Create response
    const response = NextResponse.json({
      message: "เข้าสู่ระบบสำเร็จ",
      user: userResponse,
    }, { status: 200 })
    
    // Set HTTP-only cookie
    const maxAge = validatedData.remember ? 30 * 24 * 60 * 60 : 7 * 24 * 60 * 60 // 30 days or 7 days
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge,
      path: '/',
    })
    
    return response
    
  } catch (error) {
    console.error('Login error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "ข้อมูลไม่ถูกต้อง", details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการเข้าสู่ระบบ" },
      { status: 500 }
    )
  }
} 