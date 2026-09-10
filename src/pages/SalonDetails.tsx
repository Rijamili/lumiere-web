import { useParams } from "react-router-dom";
import { SALONS, SERVICES } from "../data/mockData";
import ServiceCard from "../components/ServiceCard";
import Stars from "../components/Stars";

export default function SalonDetails() {
  const { id } = useParams();
  const salon = SALONS.find((s) => s.id === id) || SALONS[0];
  const services = SERVICES.filter((s) => s.salon === salon.name);
  const gallery = [salon.cover, services[0]?.img, services[1]?.img, services[2]?.img].filter(Boolean) as string[];

  return (
    <div className="fade-in">
      <div className="h-[280px] bg-cover bg-center relative" style={{ backgroundImage: `url(${salon.cover})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/15 to-charcoal/55" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white -mt-12 rounded p-7 shadow-lg relative">
          <div className="flex justify-between flex-wrap gap-5">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-2xl m-0">{salon.name}</h1>
                {salon.verified && <span className="text-xs text-gold">✓ Verified</span>}
              </div>
              <div className="text-[13px] text-charcoalSoft my-2">{salon.location}</div>
              <div className="flex items-center gap-2">
                <Stars rating={salon.rating} />
                <span className="text-[13px] text-charcoalSoft">
                  {salon.rating} · {salon.reviews} reviews
                </span>
              </div>
            </div>
            <button className="btn-primary self-start">Book at this Salon</button>
          </div>
          <div className="h-px bg-line my-5" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-[13px]">
            <div>
              <div className="text-charcoalSoft">Hours</div>
              <div className="mt-1">{salon.hours}</div>
            </div>
            <div>
              <div className="text-charcoalSoft">Contact</div>
              <div className="mt-1">{salon.phone}</div>
            </div>
            <div>
              <div className="text-charcoalSoft">Team</div>
              <div className="mt-1">{salon.team.join(", ")}</div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <p className="text-[15px] leading-relaxed text-charcoalSoft max-w-xl">{salon.about}</p>
        </div>

        <h2 className="font-display text-2xl mb-5">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <h2 className="font-display text-2xl mb-5">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {gallery.map((img, i) => (
            <img key={i} src={img} className="w-full h-[120px] object-cover rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
