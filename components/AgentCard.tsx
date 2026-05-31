"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Agent } from "@/lib/data";

interface AgentCardProps {
  agent: Agent;
  index?: number;
}

export default function AgentCard({ agent, index = 0 }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/agents/${agent.id}`} className="group block">
        <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
          {/* Photo */}
          <div className="relative h-72 overflow-hidden">
            <Image
              src={agent.photo}
              alt={agent.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-bold text-lg leading-snug">{agent.name}</h3>
              <p className="text-white/70 text-xs font-medium mt-0.5">{agent.title}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="p-5">
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center p-2.5 rounded-xl" style={{ backgroundColor: "#F5F7FA" }}>
                <p className="text-[13px] font-bold" style={{ color: "#0A3D62" }}>{agent.experience}+</p>
                <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Years Exp.</p>
              </div>
              <div className="text-center p-2.5 rounded-xl" style={{ backgroundColor: "#F5F7FA" }}>
                <p className="text-[13px] font-bold" style={{ color: "#0A3D62" }}>{agent.sold}</p>
                <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Sold</p>
              </div>
              <div className="text-center p-2.5 rounded-xl" style={{ backgroundColor: "#F5F7FA" }}>
                <p className="text-[13px] font-bold" style={{ color: "#0A3D62" }}>{agent.listings}</p>
                <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Active</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {agent.specialties.slice(0, 2).map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "#F5F7FA", color: "#16A085" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
