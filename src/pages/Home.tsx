import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES, SERVICES, PROS, SALONS, OFFERS, REVIEWS } from "../data/mockData";
import ServiceCard from "../components/ServiceCard";
import Stars from "../components/Stars";
import FadeIn from "../components/FadeIn";

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div>
      <section className="relative min-h-[560px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1600)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/15 to-charcoal/55" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-cream fade-in">
          <p className="text-[13px] tracking-wide text-goldSoft mb-4">Beauty & wellness marketplace</p>
          <h1 className="font-display text-[clamp(36px,5vw,60px)] leading-[1.08] max-w-xl m-0">
            Beauty & wellness, delivered to you
          </h1>
          <p className="text-[17px] max-w-lg mt-5 text-[#EDE7DA] leading-relaxed">
            Book trusted salons and beauty professionals near you — or bring the studio to your door.
          </p>

          <div className="bg-white rounded mt-9 p-2 flex flex-col md:flex-row gap-2 max-w-xl shadow-2xl">
            <div className="flex items-center gap-2 px-3.5 py-2.5 border-b md:border-b-0 md:border-r border-line min-w-[160px] text-charcoal">
              <span className="text-sm">📍 New York, NY</span>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What service are you looking for?"
              className="flex-1 border-none outline-none text-sm text-charcoal bg-transparent px-2"
            />
            <button onClick={() => navigate("/search")} className="btn-primary">
              Book Now
            </button>
          </div>
          <div className="mt-4.5">
            <button onClick={() => navigate("/search")} className="btn-outline border-[#EDE7DA] text-cream">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-6">
        <FadeIn>
          <h2 className="font-display text-3xl mb-2">Popular categories</h2>
          <p className="text-charcoalSoft mb-8">Browse the services people love most</p>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {CATEGORIES.map((c, i) => (
            <FadeIn key={c.id} delay={i * 40}>
              <div
                onClick={() => navigate(`/search?category=${encodeURIComponent(c.name)}`)}
                className="card cursor-pointer text-center"
              >
                <div className="card-img-zoom">
                  <div className="h-[100px] bg-cover bg-center" style={{ backgroundImage: `url(${c.img})` }} />
                </div>
                <div className="p-2.5 text-[12.5px] leading-snug">{c.name}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <FadeIn>
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="font-display text-3xl">Popular services</h2>
            <button onClick={() => navigate("/search")} className="text-[13px] text-gold">
              View all →
            </button>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.slice(0, 6).map((s, i) => (
            <FadeIn key={s.id} delay={i * 60}>
              <ServiceCard service={s} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <FadeIn>
          <h2 className="font-display text-3xl mb-6">Top-rated professionals</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROS.map((p, i) => (
            <FadeIn key={p.id} delay={i * 60}>
              <div className="card p-6 text-center">
                <img src={p.img} className="w-[84px] h-[84px] rounded-full object-cover mx-auto mb-3.5" />
                <div className="font-semibold text-base">{p.name}</div>
                <div className="text-[13px] text-charcoalSoft mb-2">
                  {p.title} · {p.salon}
                </div>
                <Stars rating={p.rating} /> <span className="text-[13px] text-charcoalSoft">({p.reviews})</span>
                <div className="mt-3.5">
                  <button onClick={() => navigate("/search")} className="btn-outline w-full text-[13px]">
                    Book Now
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <FadeIn>
          <h2 className="font-display text-3xl mb-6">Featured salons</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SALONS.map((s, i) => (
            <FadeIn key={s.id} delay={i * 60}>
              <div onClick={() => navigate(`/salon/${s.id}`)} className="card cursor-pointer">
                <div className="card-img-zoom">
                  <div className="h-[150px] bg-cover bg-center" style={{ backgroundImage: `url(${s.cover})` }} />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold">{s.name}</span>
                    {s.verified && <span className="text-[11px] text-gold">✓ Verified</span>}
                  </div>
                  <div className="text-[13px] text-charcoalSoft my-1">{s.location}</div>
                  <Stars rating={s.rating} /> <span className="text-[13px] text-charcoalSoft">({s.reviews})</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <FadeIn>
          <h2 className="font-display text-3xl mb-6">Best offers</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {OFFERS.map((o, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="card p-5 bg-charcoal text-cream border-none">
                <div className="font-display text-lg mb-2">{o.title}</div>
                {o.original && <div className="text-[13px] text-[#8A827A] line-through">${o.original}</div>}
                <div className="text-2xl text-goldSoft font-semibold">{o.final ? `$${o.final}` : o.desc}</div>
                {o.code && <div className="text-xs mt-1.5 text-[#C9C2BA]">Code: {o.code}</div>}
                {o.note && <div className="text-xs mt-1.5 text-[#C9C2BA]">{o.note}</div>}
                <div className="text-[11px] text-[#8A827A] mt-2.5">Expires {o.expiry}</div>
                <button onClick={() => navigate("/search")} className="btn-gold w-full mt-3.5 text-[13px]">
                  Book Now
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <h2 className="font-display text-3xl mb-10 text-center">How it works</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Choose a service", "Select a professional or salon", "Pick your time", "Pay and enjoy your service"].map(
            (t, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mx-auto mb-4 text-gold font-display">
                    {i + 1}
                  </div>
                  <div className="text-sm max-w-[200px] mx-auto">{t}</div>
                </div>
              </FadeIn>
            )
          )}
        </div>
      </section>

      <section className="bg-cream2 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-3xl mb-8 text-center">What our customers say</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="card p-6">
                  <Stars rating={r.rating} />
                  <p className="text-sm leading-relaxed my-3">“{r.text}”</p>
                  <div className="text-[13px] font-semibold">{r.name}</div>
                  <div className="text-xs text-charcoalSoft">{r.service}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <h2 className="font-display text-3xl mb-8 text-center">Why choose Lumière</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["Verified professionals", "Every salon and pro is background-checked and rated"],
            ["Transparent pricing", "See exact prices in USD before you book, no surprises"],
            ["Flexible scheduling", "Book at the salon or have a pro come to you"],
            ["Secure payments", "Encrypted checkout powered by Stripe"],
          ].map((x, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div>
                <div className="font-display text-base mb-2">{x[0]}</div>
                <div className="text-[13px] text-charcoalSoft leading-relaxed">{x[1]}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}