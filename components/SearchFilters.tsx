"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";

const propertyTypes = ["all", "house", "condo", "townhouse", "land"];
const statusOptions = ["all", "for-sale", "for-rent", "sold"];
const bedOptions = ["any", "1", "2", "3", "4", "5+"];
const priceRanges = [
  { label: "Any Price", min: 0, max: 0 },
  { label: "Under $500K", min: 0, max: 500000 },
  { label: "$500K – $1M", min: 500000, max: 1000000 },
  { label: "$1M – $2M", min: 1000000, max: 2000000 },
  { label: "$2M – $5M", min: 2000000, max: 5000000 },
  { label: "Over $5M", min: 5000000, max: 0 },
];

export default function SearchFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all" || value === "any" || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const active = (key: string, value: string) => {
    const current = searchParams.get(key);
    if (value === "all" || value === "any") return !current;
    return current === value;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
      {/* Search */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
          Search
        </label>
        <div className="relative">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="City, address, or ZIP..."
            defaultValue={searchParams.get("q") ?? ""}
            onChange={(e) => updateFilter("q", e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#16A085] focus:ring-2 focus:ring-[#16A085]/20 transition-all"
          />
        </div>
      </div>

      {/* Status */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
          Status
        </label>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((s) => (
            <button
              key={s}
              onClick={() => updateFilter("status", s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                active("status", s)
                  ? "text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={active("status", s) ? { backgroundColor: "#0A3D62" } : {}}
            >
              {s === "for-sale" ? "For Sale" : s === "for-rent" ? "For Rent" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
          Property Type
        </label>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((t) => (
            <button
              key={t}
              onClick={() => updateFilter("type", t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                active("type", t)
                  ? "text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={active("type", t) ? { backgroundColor: "#16A085" } : {}}
            >
              {t === "all" ? "All Types" : t}
            </button>
          ))}
        </div>
      </div>

      {/* Beds */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
          Bedrooms
        </label>
        <div className="flex flex-wrap gap-2">
          {bedOptions.map((b) => (
            <button
              key={b}
              onClick={() => updateFilter("beds", b)}
              className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all ${
                active("beds", b)
                  ? "text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={active("beds", b) ? { backgroundColor: "#0A3D62" } : {}}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
          Price Range
        </label>
        <div className="space-y-1.5">
          {priceRanges.map((range) => {
            const val = range.min === 0 && range.max === 0 ? "any" : `${range.min}-${range.max}`;
            const isActive = active("price", val);
            return (
              <button
                key={range.label}
                onClick={() => updateFilter("price", val)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive ? "text-white" : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
                style={isActive ? { backgroundColor: "#16A085" } : {}}
              >
                {range.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clear filters */}
      <button
        onClick={() => router.push(pathname)}
        className="w-full py-2.5 text-xs font-semibold text-gray-500 hover:text-[#0A3D62] transition-colors underline underline-offset-2"
      >
        Clear All Filters
      </button>
    </div>
  );
}
