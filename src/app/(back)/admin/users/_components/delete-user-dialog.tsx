"use client"

import * as React from "react"
import { Trash2, AlertTriangle } from "lucide-react"
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

import { type User } from "./columns"

interface DeleteUserDialogProps {
  user: User
  onDeleteUser: (userId: string) => void
  trigger?: React.ReactNode
}

export function DeleteUserDialog({ user, onDeleteUser, trigger }: DeleteUserDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleDelete = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    try {
      onDeleteUser(user.id)
      toast.success(`ลบผู้ใช้ ${user.fullName} สำเร็จ`)
      setOpen(false)
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการลบผู้ใช้")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="destructive" size="sm">
            <Trash2 className="h-4 w-4" />
            ลบ
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            ยืนยันการลบผู้ใช้
          </DialogTitle>
          <DialogDescription className="text-left">
            คุณต้องการลบผู้ใช้{" "}
            <span className="font-semibold text-foreground">{user.fullName}</span>{" "}
            ออกจากระบบหรือไม่?
            <br />
            <br />
            <span className="text-destructive font-medium">
              ⚠️ การดำเนินการนี้ไม่สามารถยกเลิกได้
            </span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                <Trash2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{user.fullName}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
                <p className="text-xs text-muted-foreground">{user.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => setOpen(false)} disabled={isLoading}>
            ยกเลิก
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                กำลังลบ...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                ลบผู้ใช้
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 