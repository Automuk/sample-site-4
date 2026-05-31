"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLocationDot,
  faBed,
  faShower,
  faRulerCombined,
  faCar,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { getPropertyById, getAgentById, properties, formatPrice } from "@/lib/data";
import LeadForm from "@/components/LeadForm";
import PropertyCard from "@/components/PropertyCard";
import { FadeUp, FadeIn } from "@/components/Animations";

const statusConfig: Record<string, { label: string; bg: string }> = {
  "for-sale": { label: "For Sale", bg: "#16A085" },
  "for-rent": { label: "For Rent", bg: "#0A3D62" },
  sold: { label: "Sold", bg: "#6B7280" },
};

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id);

  if (!property) notFound();

  const agent = getAgentById(property.agentId);
  const status = statusConfig[property.status];
  const relatedProperties = properties
    .filter((p) => p.id !== property.id && p.city === property.city)
    .slice(0, 3);

  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      {/* Back nav */}
      <div className="pt-28 pb-4 px-6 max-w-7xl mx-auto">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0A3D62] transition-colors"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-3.5 h-3.5" />
          Back to Properties
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Image Gallery */}
            <FadeIn>
              <div className="space-y-3">
                {/* Main image */}
                <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={property.images[activeImage]}
                      alt={property.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                      style={{ backgroundColor: status.bg }}
                    >
                      {status.label}
                    </span>
                  </div>
                </div>
                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative h-20 rounded-xl overflow-hidden transition-all ${
                        activeImage === i ? "ring-2 ring-[#16A085] ring-offset-2" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Property Header */}
            <FadeUp>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h1
                      className="text-3xl lg:text-4xl font-bold text-[#0A3D62] mb-2"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      {property.title}
                    </h1>
                    <p className="text-gray-400 flex items-center gap-1.5 text-sm">
                      <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5" style={{ color: "#16A085" }} />
                      {property.address}, {property.city}, {property.state}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold" style={{ color: "#0A3D62" }}>
                      {formatPrice(property.price, property.status)}
                    </p>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  {[
                    { label: "Bedrooms", value: property.beds, icon: faBed },
                    { label: "Bathrooms", value: property.baths, icon: faShower },
                    { label: "Living Area", value: `${property.sqft.toLocaleString()} sqft`, icon: faRulerCombined },
                    { label: "Parking", value: `${property.parking} spaces`, icon: faCar },
                  ].map((s) => (
                    <div key={s.label} className="p-4 rounded-2xl text-center" style={{ backgroundColor: "#F5F7FA" }}>
                      <FontAwesomeIcon icon={s.icon} className="w-5 h-5 mb-1" style={{ color: "#16A085" }} />
                      <p className="text-base font-bold text-[#0A3D62]">{s.value}</p>
                      <p className="text-xs text-gray-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Description */}
            <FadeUp delay={0.1}>
              <div>
                <h2 className="text-xl font-bold text-[#0A3D62] mb-4">About This Property</h2>
                <p className="text-gray-600 leading-relaxed text-[15px]">{property.description}</p>
              </div>
            </FadeUp>

            {/* Features */}
            <FadeUp delay={0.15}>
              <div>
                <h2 className="text-xl font-bold text-[#0A3D62] mb-4">Key Features</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 p-3 rounded-xl" style={{ backgroundColor: "#F5F7FA" }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#16A085" }}>
                        <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs font-medium text-[#0A3D62]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Property Details Table */}
            <FadeUp delay={0.2}>
              <div>
                <h2 className="text-xl font-bold text-[#0A3D62] mb-4">Property Details</h2>
                <div className="rounded-2xl overflow-hidden border border-gray-100">
                  {[
                    ["Property Type", property.type.charAt(0).toUpperCase() + property.type.slice(1)],
                    ["Year Built", property.yearBuilt],
                    ["Lot Size", property.lotSize ?? "N/A"],
                    ["Parking", `${property.parking} spaces`],
                    ["Status", property.status === "for-sale" ? "For Sale" : property.status === "for-rent" ? "For Rent" : "Sold"],
                    ["Location", `${property.city}, ${property.state}`],
                  ].map(([label, value], i) => (
                    <div
                      key={String(label)}
                      className={`flex justify-between items-center px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-white" : ""}`}
                      style={i % 2 !== 0 ? { backgroundColor: "#F5F7FA" } : {}}
                    >
                      <span className="text-gray-500 font-medium">{label}</span>
                      <span className="font-semibold text-[#0A3D62]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            {agent && (
              <FadeUp delay={0.1}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-5">Listing Agent</h3>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={agent.photo} alt={agent.name} fill className="object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0A3D62]">{agent.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{agent.title}</p>
                      <p className="text-xs font-medium mt-1" style={{ color: "#16A085" }}>{agent.phone}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {[
                      { label: "Exp.", value: `${agent.experience}yr` },
                      { label: "Sold", value: agent.sold },
                      { label: "Active", value: agent.listings },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-2 rounded-xl" style={{ backgroundColor: "#F5F7FA" }}>
                        <p className="text-sm font-bold text-[#0A3D62]">{s.value}</p>
                        <p className="text-[10px] text-gray-400">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/agents/${agent.id}`}
                    className="block w-full text-center py-2.5 rounded-xl text-xs font-semibold border-2 transition-all hover:bg-[#F5F7FA]"
                    style={{ borderColor: "#0A3D62", color: "#0A3D62" }}
                  >
                    View Profile
                  </Link>
                </div>
              </FadeUp>
            )}

            {/* Lead Form */}
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-[#0A3D62] mb-1">Request a Showing</h3>
                <p className="text-xs text-gray-400 mb-5">Fill in your details and we&apos;ll be in touch within hours.</p>
                <LeadForm propertyTitle={property.title} agentName={agent?.name} />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-20">
            <FadeUp>
              <h2
                className="text-3xl font-bold text-[#0A3D62] mb-8"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                More in {property.city}
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProperties.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
