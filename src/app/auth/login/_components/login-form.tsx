"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/useAuth"

const FormSchema = z.object({
  email: z.string().email({ message: "กรุณากรอกอีเมลให้ถูกต้อง" }),
  password: z.string().min(6, { message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" }),
  remember: z.boolean().optional(),
})

export function LoginForm() {
  const { login } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (isLoading) return

    setIsLoading(true)
    try {
      await login(data.email, data.password, data.remember)

      toast.success("เข้าสู่ระบบสำเร็จ!", {
        description: "ยินดีต้อนรับกลับมา",
      })

      // Redirect to home page or dashboard
      router.push("/")
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด", {
        description: error instanceof Error ? error.message : "ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้ง",
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
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center">
                <FormControl>
                  <Checkbox
                    id="login-remember"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="size-4"
                  />
                </FormControl>
                <FormLabel htmlFor="login-remember" className="text-muted-foreground ml-1 text-sm font-medium">
                  จดจำฉันไว้ 30 วัน
                </FormLabel>
              </FormItem>
            )}
          />
          <Link href="/auth/forgotpassword" className="text-sm text-primary hover:underline">
            ลืมรหัสผ่าน?
          </Link>
        </div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
        </Button>
      </form>
    </Form>
  )
}