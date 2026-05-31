"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import { FadeUp } from "@/components/Animations";
import { properties, Property } from "@/lib/data";
import { motion } from "framer-motion";

function filterProperties(params: URLSearchParams): Property[] {
  let result = [...properties];

  const q = params.get("q")?.toLowerCase();
  if (q) {
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q)
    );
  }

  const status = params.get("status");
  if (status) result = result.filter((p) => p.status === status);

  const type = params.get("type");
  if (type) result = result.filter((p) => p.type === type);

  const beds = params.get("beds");
  if (beds) {
    const n = beds === "5+" ? 5 : parseInt(beds);
    result = result.filter((p) => (beds === "5+" ? p.beds >= 5 : p.beds === n));
  }

  const price = params.get("price");
  if (price && price !== "any") {
    const [min, max] = price.split("-").map(Number);
    result = result.filter((p) => {
      if (min && max) return p.price >= min && p.price <= max;
      if (min && !max) return p.price >= min;
      if (!min && max) return p.price <= max;
      return true;
    });
  }

  return result;
}

function PropertiesContent() {
  const searchParams = useSearchParams();
  const filtered = filterProperties(searchParams);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-72 flex-shrink-0">
          <div className="sticky top-28">
            <SearchFilters />
          </div>
        </aside>

        {/* Results */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-gray-500">
              <span className="font-bold text-[#0A3D62]">{filtered.length}</span> properties found
            </p>
          </div>

          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0A3D62] mb-2">No properties found</h3>
              <p className="text-gray-400 text-sm">Try adjusting your filters to see more results.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-12 px-6" style={{ backgroundColor: "#0A3D62" }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-[#16A085] text-sm font-semibold tracking-[0.14em] uppercase mb-3">
              Explore Our Portfolio
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Properties
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-3 text-white/50 text-sm max-w-md leading-relaxed">
              Discover handpicked homes, condos, and investment properties across India&apos;s most desirable cities.
            </p>
          </FadeUp>
        </div>
      </div>

      <Suspense fallback={<div className="flex justify-center py-20"><div className="w-8 h-8 border-2 border-[#16A085] border-t-transparent rounded-full animate-spin" /></div>}>
        <PropertiesContent />
      </Suspense>
    </>
  );
}
