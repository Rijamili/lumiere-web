export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="font-display text-2xl">Lumière</span>
          <p className="text-sm leading-relaxed text-[#C9C2BA] max-w-xs mt-4">
            Trusted beauty professionals and salons, booked in minutes. Delivered to your door or your favorite
            chair.
          </p>
          <div className="mt-5">
            <p className="text-xs tracking-wide text-[#8A827A] mb-2">GET THE APP</p>
            <div className="flex gap-2">
              <div className="border border-[#4A443F] rounded px-3 py-2 text-xs">App Store</div>
              <div className="border border-[#4A443F] rounded px-3 py-2 text-xs">Google Play</div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm mb-4 text-[#C9C2BA]">Company</p>
          {["About", "Careers", "Press", "Blog"].map((x) => (
            <p key={x} className="text-sm mb-2.5 text-[#8A827A]">
              {x}
            </p>
          ))}
        </div>
        <div>
          <p className="text-sm mb-4 text-[#C9C2BA]">For Partners</p>
          {["List your salon", "Join as a pro", "Partner support"].map((x) => (
            <p key={x} className="text-sm mb-2.5 text-[#8A827A]">
              {x}
            </p>
          ))}
        </div>
        <div>
          <p className="text-sm mb-4 text-[#C9C2BA]">Newsletter</p>
          <p className="text-[13px] text-[#8A827A] mb-3">Offers and beauty tips, monthly.</p>
          <div className="flex border border-[#4A443F] rounded overflow-hidden">
            <input
              placeholder="Email address"
              className="flex-1 bg-transparent border-none text-cream px-3 py-2.5 text-sm outline-none"
            />
            <button className="bg-gold border-none text-white px-4 text-sm">Join</button>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#3A3532]" />
      <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-[#8A827A] flex justify-between">
        <span>© 2026 Lumière Beauty, Inc. All rights reserved.</span>
        <span>Prices shown in USD</span>
      </div>
    </footer>
  );
}
