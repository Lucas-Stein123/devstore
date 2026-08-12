"use client"

import { Skeleton } from "@/components/skeleton"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function SearchQuery() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  return (
    <p className="text-sm">
      Resultados para: <span className="font-semibold">{query}</span>
    </p>
  )
}

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <SearchQuery />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-100" />
        <Skeleton className="h-100" />
        <Skeleton className="h-100" />
        <Skeleton className="h-100" />
        <Skeleton className="h-100" />
        <Skeleton className="h-100" />
      </div>
    </div>
  )
}
