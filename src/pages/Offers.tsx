import { useNavigate } from "react-router-dom";
import { OFFERS } from "../data/mockData";

export default function Offers() {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
      <h1 className="font-display text-3xl mb-6">Offers & Packages</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {OFFERS.map((o, i) => (
          <div key={i} className="card p-5">
            <div className="font-display text-lg mb-2">{o.title}</div>
            {o.original && <div className="text-[13px] text-charcoalSoft line-through">${o.original}</div>}
            <div className="text-2xl text-gold font-semibold">{o.final ? `$${o.final}` : o.desc}</div>
            <div className="text-[11px] text-charcoalSoft mt-2.5">Expires {o.expiry}</div>
            <button onClick={() => navigate("/search")} className="btn-primary w-full mt-3.5 text-[13px]">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
