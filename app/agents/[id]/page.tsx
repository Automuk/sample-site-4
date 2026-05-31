"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { getAgentById, getAgentProperties } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";
import LeadForm from "@/components/LeadForm";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/Animations";

export default function AgentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const agent = getAgentById(id);

  if (!agent) notFound();

  const listings = getAgentProperties(agent.id);

  return (
    <>
      {/* Hero */}
      <div className="pt-24 pb-0 overflow-hidden" style={{ backgroundColor: "#0A3D62" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Left: info */}
            <SlideInLeft className="pb-16 pt-8">
              <Link
                href="/agents"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-xs mb-8 transition-colors"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
                All Agents
              </Link>
              <p className="text-[#16A085] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                {agent.title}
              </p>
              <h1
                className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {agent.name}
              </h1>
              <p className="text-white/60 text-sm leading-relaxed max-w-md mb-8">
                {agent.bio}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { label: "Years Experience", value: `${agent.experience}+` },
                  { label: "Properties Sold", value: agent.sold },
                  { label: "Active Listings", value: agent.listings },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 text-center">
                    <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                      {s.value}
                    </p>
                    <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#16A085" }}
                >
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  Email Agent
                </a>
              </div>
            </SlideInLeft>

            {/* Right: photo */}
            <SlideInRight delay={0.15} className="flex justify-end">
              <div className="relative w-full max-w-xs">
                <div className="relative h-[420px] rounded-t-3xl overflow-hidden">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/40 to-transparent" />
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Listings + specialties */}
          <div className="lg:col-span-2 space-y-12">
            {/* Specialties & Languages */}
            <FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: "#16A085" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.languages.map((l) => (
                      <span
                        key={l}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "#F5F7FA", color: "#0A3D62" }}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Active Listings */}
            {listings.length > 0 && (
              <div>
                <FadeUp>
                  <h2
                    className="text-2xl font-bold text-[#0A3D62] mb-6"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    Active Listings
                  </h2>
                </FadeUp>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {listings.slice(0, 4).map((p, i) => (
                    <PropertyCard key={p.id} property={p} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Lead Form */}
          <div>
            <FadeUp delay={0.1}>
              <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-[#0A3D62] mb-1">Get In Touch</h3>
                <p className="text-xs text-gray-400 mb-5">
                  Reach out to {agent.name.split(" ")[0]} directly about your property goals.
                </p>
                <LeadForm agentName={agent.name} />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </>
  );
}
