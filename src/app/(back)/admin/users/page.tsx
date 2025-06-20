"use client"

import * as React from "react"
import { toast } from "sonner"
import { useUser } from "@/hooks/useUser"

import { UsersDataTable } from "./_components/data-table"
import { type User } from "./_components/columns"

export default function UsersPage() {
  const {
    users,
    loading,
    error,
    pagination,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
    clearError
  } = useUser()

  // ดึงข้อมูล users เมื่อ component mount
  React.useEffect(() => {
    fetchUsers({ page: 1, limit: 50 }) // ดึงข้อมูล 50 รายการแรก
  }, [fetchUsers])

  // แสดง error message เมื่อมี error
  React.useEffect(() => {
    if (error) {
      toast.error(error)
      // เคลียร์ error หลังจากแสดงแล้ว
      setTimeout(() => {
        clearError()
      }, 5000)
    }
  }, [error, clearError])

  const handleAddUser = async (newUserData: Omit<User, "id" | "createdAt" | "updatedAt"> & { password: string }) => {
    try {
      const result = await createUser({
        fullName: newUserData.fullName,
        email: newUserData.email,
        phoneNumber: newUserData.phoneNumber,
        password: newUserData.password
      })
      
      if (result) {
        toast.success(`เพิ่มผู้ใช้ ${newUserData.fullName} สำเร็จ`)
      }
    } catch (error) {
      console.error('Error creating user:', error)
      toast.error('เกิดข้อผิดพลาดในการเพิ่มผู้ใช้')
    }
  }

  const handleEditUser = async (userId: string, userData: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>) => {
    try {
      const result = await updateUser(userId, {
        fullName: userData.fullName,
        email: userData.email,
        phoneNumber: userData.phoneNumber
      })
      
      if (result) {
        toast.success('อัพเดตข้อมูลผู้ใช้สำเร็จ')
      }
    } catch (error) {
      console.error('Error updating user:', error)
      toast.error('เกิดข้อผิดพลาดในการอัพเดตข้อมูล')
    }
  }

  const handleDeleteUser = async (userId: string) => {
    try {
      const result = await deleteUser(userId)
      
      if (result) {
        toast.success('ลบผู้ใช้สำเร็จ')
      }
    } catch (error) {
      console.error('Error deleting user:', error)
      toast.error('เกิดข้อผิดพลาดในการลบผู้ใช้')
    }
  }

  // แสดง loading state
  if (loading && users.length === 0) {
    return (
      <div className="@container/main flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">จัดการผู้ใช้</h1>
          <p className="text-muted-foreground">กำลังโหลดข้อมูล...</p>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">จัดการผู้ใช้</h1>
        <p className="text-muted-foreground">
          รายการผู้ใช้ทั้งหมดในระบบ ({users.length} รายการ)
          {pagination.total > 0 && ` จากทั้งหมด ${pagination.total} รายการ`}
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      <UsersDataTable 
        data={users} 
        onAddUser={handleAddUser}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  )
}