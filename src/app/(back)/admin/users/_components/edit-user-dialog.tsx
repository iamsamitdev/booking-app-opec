"use client"

import * as React from "react"
import { Edit } from "lucide-react"
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

interface EditUserDialogProps {
  user: User
  onEditUser: (userId: string, userData: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>) => void
  trigger?: React.ReactNode
}

export function EditUserDialog({ user, onEditUser, trigger }: EditUserDialogProps) {
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
    }

    // Validate required fields
    if (!userData.fullName || !userData.email || !userData.phoneNumber) {
      toast.error("กรุณากรอกข้อมูลให้ครบถ้วน")
      setIsLoading(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      onEditUser(user.id, userData)
      toast.success(`แก้ไขข้อมูล ${userData.fullName} สำเร็จ`)
      setOpen(false)
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการแก้ไขข้อมูล")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
            แก้ไข
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>แก้ไขข้อมูลผู้ใช้</DialogTitle>
          <DialogDescription>
            แก้ไขข้อมูลของ {user.fullName}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-fullName" className="text-right">
                ชื่อ-นามสกุล
              </Label>
              <Input
                id="edit-fullName"
                name="fullName"
                defaultValue={user.fullName}
                placeholder="เช่น สมชาย ใจดี"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-email" className="text-right">
                อีเมล
              </Label>
              <Input
                id="edit-email"
                name="email"
                type="email"
                defaultValue={user.email}
                placeholder="เช่น somchai@example.com"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-phoneNumber" className="text-right">
                เบอร์โทรศัพท์
              </Label>
              <Input
                id="edit-phoneNumber"
                name="phoneNumber"
                defaultValue={user.phoneNumber}
                placeholder="เช่น 081-234-5678"
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              ยกเลิก
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "กำลังบันทึก..." : "บันทึกการแก้ไข"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 