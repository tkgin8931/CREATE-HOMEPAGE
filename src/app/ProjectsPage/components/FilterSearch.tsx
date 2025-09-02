"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterSearchProps {
  categories: string[]
  onFilterChange: (category: string, search: string) => void
}

export function FilterSearch({ categories, onFilterChange }: FilterSearchProps) {
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    onFilterChange(value, search)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onFilterChange(category, e.target.value)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="カテゴリ選択" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">全てのカテゴリ</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="search"
        placeholder="プロジェクトを検索..."
        className="w-full md:w-[300px]"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  )
}

