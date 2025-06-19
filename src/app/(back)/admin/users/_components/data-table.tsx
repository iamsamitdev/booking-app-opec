"use client"

import * as React from "react"

import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { useDataTableInstance } from "@/hooks/use-data-table-instance"

import { DataTable as DataTableNew } from "@/components/back/data-table/data-table"
import { DataTablePagination } from "@/components/back/data-table/data-table-pagination"
import { DataTableViewOptions } from "@/components/back/data-table/data-table-view-options"

import { createUserColumns, type User } from "./columns"
import { AddUserDialog } from "./add-user-dialog"

interface UsersDataTableProps {
  data: User[]
  onAddUser: (user: Omit<User, "id" | "createdAt" | "updatedAt"> & { password: string }) => void
  onEditUser: (userId: string, userData: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>) => void
  onDeleteUser: (userId: string) => void
}

export function UsersDataTable({ data, onAddUser, onEditUser, onDeleteUser }: UsersDataTableProps) {
  const columns = createUserColumns({ onEditUser, onDeleteUser })
  
  const table = useDataTableInstance({ 
    data, 
    columns, 
    getRowId: (row) => row.id,
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="ค้นหาผู้ใช้..."
              value={(table.getColumn("fullName")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("fullName")?.setFilterValue(event.target.value)
              }
              className="pl-8 w-64"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DataTableViewOptions table={table} />
          <AddUserDialog onAddUser={onAddUser} />
        </div>
      </div>
      
      <div className="overflow-hidden rounded-lg border">
        <DataTableNew
          table={table}
          columns={columns}
        />
      </div>
      
      <DataTablePagination table={table} />
    </div>
  )
} 