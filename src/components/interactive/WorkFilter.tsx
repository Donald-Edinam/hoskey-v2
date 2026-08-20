"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export interface CategoryOption {
  label: string;
  value: string;
}

export interface WorkFilterProps {
  categories: CategoryOption[];
}

export function WorkFilter({ categories }: WorkFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const handleSelectCategory = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    const queryString = params.toString();
    const newUrl = queryString ? `/work?${queryString}` : "/work";
    router.replace(newUrl, { scroll: false });
  };

  return (
    <nav className="flex flex-wrap gap-x-8 gap-y-3 mt-8 mb-12" aria-label="Filter by category">
      {categories.map((cat) => {
        const isActive =
          currentCategory.toLowerCase() === cat.value.toLowerCase() ||
          (currentCategory === "all" && cat.value === "all");

        return (
          <button
            key={cat.value}
            type="button"
            onClick={() => handleSelectCategory(cat.value)}
            className={`text-[12px] font-bold tracking-[0.14em] uppercase transition-colors border-b pb-1 cursor-pointer ${
              isActive
                ? "text-[var(--ink)] border-[var(--ink)]"
                : "text-[var(--ink-3)] border-transparent hover:text-[var(--ink)]"
            }`}
            aria-current={isActive ? "true" : undefined}
          >
            {cat.label}
          </button>
        );
      })}
    </nav>
  );
}
