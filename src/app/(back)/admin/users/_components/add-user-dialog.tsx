"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { type User } from "./columns"

interface AddUserDialogProps {
  onAddUser: (user: Omit<User, "id" | "createdAt" | "updatedAt"> & { password: string }) => void
}

export function AddUserDialog({ onAddUser }: AddUserDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const userData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      password: formData.get("password") as string,
    }

    // Validate required fields
    if (!userData.fullName || !userData.email || !userData.phoneNumber || !userData.password) {
      toast.error("กรุณากรอกข้อมูลให้ครบถ้วน")
      setIsLoading(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      onAddUser(userData)
      toast.success(`เพิ่มผู้ใช้ ${userData.fullName} สำเร็จ`)
      setOpen(false)
      
      // Reset form
      const form = event.currentTarget
      form.reset()
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการเพิ่มผู้ใช้")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="h-4 w-4" />
          <span className="hidden lg:inline">เพิ่มผู้ใช้</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>เพิ่มผู้ใช้ใหม่</DialogTitle>
          <DialogDescription>
            กรอกข้อมูลผู้ใช้ใหม่ที่ต้องการเพิ่มเข้าสู่ระบบ
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullName" className="text-right">
                ชื่อ-นามสกุล
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="เช่น สมชาย ใจดี"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                อีเมล
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="เช่น somchai@example.com"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phoneNumber" className="text-right">
                เบอร์โทรศัพท์
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="เช่น 081-234-5678"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                รหัสผ่าน
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="รหัสผ่านสำหรับเข้าสู่ระบบ"
                className="col-span-3"
                minLength={6}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              ยกเลิก
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "กำลังเพิ่ม..." : "เพิ่มผู้ใช้"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 