import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/" },
    { label: "Our Team", href: "/agents" },
    { label: "Careers", href: "/" },
    { label: "Press", href: "/" },
  ],
  Properties: [
    { label: "For Sale", href: "/properties?status=for-sale" },
    { label: "For Rent", href: "/properties?status=for-rent" },
    { label: "New Listings", href: "/properties" },
    { label: "Sold Properties", href: "/properties?status=sold" },
  ],
  Services: [
    { label: "Buy a Home", href: "/properties" },
    { label: "Sell Your Home", href: "/contact" },
    { label: "Property Management", href: "/" },
    { label: "Investment Advisory", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A3D62" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#16A085" }}>
                <FontAwesomeIcon icon={faHouse} className="w-4 h-4 text-white" />
              </div>
              <div className="leading-none">
                <span className="block text-lg font-bold tracking-tight">Summit Realty</span>
                <span className="block text-xs font-medium tracking-[0.14em] uppercase" style={{ color: "#16A085" }}>
                  Partners
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-8">
              India&apos;s premier real estate firm. We match exceptional people with extraordinary homes — from the coastal shores to bustling metro skylines.
            </p>
            <div className="flex gap-3">
              {(["instagram", "linkedin", "facebook"] as const).map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <span className="sr-only">{social}</span>
                  {social === "instagram" && <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />}
                  {social === "linkedin" && <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />}
                  {social === "facebook" && <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white/40 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Summit Realty Partners. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Fair Housing"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
