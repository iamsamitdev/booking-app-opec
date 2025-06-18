"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  email: z.string().email({ message: "กรุณากรอกอีเมลให้ถูกต้อง" }),
})

export function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    toast("ส่งลิงก์รีเซ็ตรหัสผ่านแล้ว", {
      description: (
        <div className="mt-2">
          <p className="text-white">เราได้ส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปยังอีเมล:</p>
          <p className="text-blue-300 font-semibold">{data.email}</p>
          <p className="text-white/80 text-sm mt-1">กรุณาตรวจสอบอีเมลของคุณ</p>
        </div>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ที่อยู่อีเมล</FormLabel>
              <FormControl>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@example.com" 
                  autoComplete="email" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button className="w-full" type="submit">
          ส่งลิงก์รีเซ็ตรหัสผ่าน
        </Button>
      </form>
    </Form>
  )
}
