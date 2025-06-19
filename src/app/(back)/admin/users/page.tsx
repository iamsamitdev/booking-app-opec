"use client"

import * as React from "react"
import { toast } from "sonner"

import { UsersDataTable } from "./_components/data-table"
import { mockUsers } from "./_components/mock-data"
import { type User } from "./_components/columns"

export default function UsersPage() {
  const [users, setUsers] = React.useState<User[]>(mockUsers)

  const handleAddUser = (newUserData: Omit<User, "id" | "createdAt" | "updatedAt"> & { password: string }) => {
    // Extract password for processing (don't store in state for security)
    const { password, ...userDataWithoutPassword } = newUserData
    
    const newUser: User = {
      ...userDataWithoutPassword,
      id: (users.length + 1).toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // In real app, password would be hashed and sent to API
    console.log(`Password for ${newUserData.fullName}: ${password}`) // For demo only
    
    setUsers((prevUsers) => [newUser, ...prevUsers])
    toast.success(`เพิ่มผู้ใช้ ${newUserData.fullName} สำเร็จ`)
  }

  const handleEditUser = (userId: string, userData: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              ...userData,
              updatedAt: new Date().toISOString(),
            }
          : user
      )
    )
  }

  const handleDeleteUser = (userId: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
  }

  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">จัดการผู้ใช้</h1>
        <p className="text-muted-foreground">
          รายการผู้ใช้ทั้งหมดในระบบ ({users.length} รายการ)
        </p>
      </div>
      <UsersDataTable 
        data={users} 
        onAddUser={handleAddUser}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />
    </div>
  )
}