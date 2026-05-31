"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBed, faShower, faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { Property, formatPrice } from "@/lib/data";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const statusLabel: Record<string, { label: string; color: string }> = {
  "for-sale": { label: "For Sale", color: "#16A085" },
  "for-rent": { label: "For Rent", color: "#0A3D62" },
  sold: { label: "Sold", color: "#6B7280" },
};

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const status = statusLabel[property.status];
  const baseDelay = index * 0.08;
  const imageRevealDuration = 0.75;
  const contentDelay = baseDelay + imageRevealDuration;

  return (
    <motion.div>
      <Link href={`/properties/${property.id}`} className="group block">
        <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-400">
          {/* Image — clip-path reveal */}
          <motion.div
            className="relative h-60 overflow-hidden"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: imageRevealDuration, delay: baseDelay, ease: [0.76, 0, 0.24, 1] }}
          >
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Status badge */}
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                style={{ backgroundColor: status.color }}
              >
                {status.label}
              </span>
            </div>
            {/* Price overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-xl font-bold">
                {formatPrice(property.price, property.status)}
              </p>
            </div>
          </motion.div>

          {/* Content — only visible after image fully reveals */}
          <motion.div
            className="p-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: contentDelay, ease: "easeOut" }}
          >
            <h3 className="font-semibold text-[#0A3D62] text-[15px] leading-snug mb-1 group-hover:text-[#16A085] transition-colors">
              {property.title}
            </h3>
            <p className="text-gray-400 text-xs mb-4 flex items-center gap-1.5">
              <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 flex-shrink-0" style={{ color: "#16A085" }} />
              {property.address}, {property.city}, {property.state}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <FontAwesomeIcon icon={faBed} className="w-3.5 h-3.5" />
                <span className="font-medium">{property.beds} bd</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <FontAwesomeIcon icon={faShower} className="w-3.5 h-3.5" />
                <span className="font-medium">{property.baths} ba</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <FontAwesomeIcon icon={faRulerCombined} className="w-3.5 h-3.5" />
                <span className="font-medium">{property.sqft.toLocaleString()} sqft</span>
              </div>
              <div className="ml-auto">
                <span className="text-[10px] font-medium text-white px-2 py-1 rounded-md capitalize" style={{ backgroundColor: "#F5F7FA", color: "#0A3D62" }}>
                  {property.type}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
