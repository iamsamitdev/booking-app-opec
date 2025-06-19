"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/hooks/useAuth"

const FormSchema = z
  .object({
    fullName: z.string().min(2, { message: "กรุณากรอกชื่อ-สกุลอย่างน้อย 2 ตัวอักษร" }),
    phoneNumber: z.string().min(10, { message: "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)" }).regex(/^[0-9]+$/, { message: "เบอร์โทรศัพท์ต้องเป็นตัวเลขเท่านั้น" }),
    email: z.string().email({ message: "กรุณากรอกอีเมลให้ถูกต้อง" }),
    password: z.string().min(6, { message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" }),
    confirmPassword: z.string().min(6, { message: "กรุณายืนยันรหัสผ่านอย่างน้อย 6 ตัวอักษร" }),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "กรุณายอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "รหัสผ่านไม่ตรงกัน",
    path: ["confirmPassword"],
  })

export function RegisterForm() {
  const { register } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (isLoading) return

    setIsLoading(true)
    try {
      await register({
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: data.password,
      })

      toast.success("สมัครสมาชิกสำเร็จ! ยินดีต้อนรับสู่ BookGeek", {
        description: "คุณสามารถเริ่มจองผู้เชี่ยวชาญได้ทันที",
      })

      // Redirect to home page or dashboard
      router.push("/")
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด", {
        description: error instanceof Error ? error.message : "ไม่สามารถสมัครสมาชิกได้ กรุณาลองใหม่อีกครั้ง",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ชื่อ-สกุล</FormLabel>
              <FormControl>
                <Input id="fullName" type="text" placeholder="ชื่อ สกุล" autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>เบอร์โทรศัพท์</FormLabel>
              <FormControl>
                <Input id="phoneNumber" type="tel" placeholder="0812345678" autoComplete="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ที่อยู่อีเมล</FormLabel>
              <FormControl>
                <Input id="email" type="email" placeholder="your@example.com" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>รหัสผ่าน</FormLabel>
              <FormControl>
                <Input id="password" type="password" placeholder="••••••••" autoComplete="new-password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
              <FormControl>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal">
                  ฉันยอมรับ{" "}
                  <Link
                    href="/terms-of-service"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                  >
                    ข้อกำหนดการใช้งาน
                  </Link>
                  {" "}และ{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                  >
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
        </Button>
      </form>
    </Form>
  )
}