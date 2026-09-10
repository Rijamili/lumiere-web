import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVICES, SALONS, REVIEWS } from "../data/mockData";
import ServiceCard from "../components/ServiceCard";
import Stars from "../components/Stars";
import BookingModal from "../components/BookingModal";
import type { BookingResult } from "../types";

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(false);
  const service = SERVICES.find((s) => s.id === id);

  if (!service) return <div className="max-w-6xl mx-auto px-6 py-16">Service not found.</div>;

  const related = SERVICES.filter((s) => s.category === service.category && s.id !== service.id);
  const salon = SALONS.find((s) => s.name === service.salon);

  function handleComplete(result: BookingResult) {
    setBooking(false);
    navigate("/confirmation", { state: result });
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-16 fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
        <div>
          <img src={service.img} className="w-full h-[360px] object-cover rounded" />
          <div className="mt-6">
            <div className="text-xs text-gold">{service.category}</div>
            <h1 className="font-display text-3xl my-1.5">{service.name}</h1>
            <div className="flex items-center gap-2.5 mb-4">
              <Stars rating={service.rating} />
              <span className="text-[13px] text-charcoalSoft">
                {service.rating} · {service.reviews} reviews
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-charcoalSoft">{service.desc}</p>

            <div className="mt-7">
              <h3 className="text-base mb-3">What's included</h3>
              <ul className="pl-4.5 pl-[18px] text-sm leading-loose text-charcoalSoft list-disc">
                {service.includes.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <h3 className="text-base mb-3">Benefits</h3>
              <ul className="pl-[18px] text-sm leading-loose text-charcoalSoft list-disc">
                {service.benefits.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="mt-7">
              <h3 className="text-base mb-3">Reviews</h3>
              {REVIEWS.slice(0, 2).map((r, i) => (
                <div key={i} className="border-b border-line py-3.5">
                  <Stars rating={r.rating} />
                  <p className="text-sm my-1.5">{r.text}</p>
                  <div className="text-xs text-charcoalSoft">{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="card p-6 lg:sticky lg:top-24">
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="text-[28px] font-semibold">${service.price}</span>
              <span className="text-[13px] text-charcoalSoft">{service.duration}</span>
            </div>
            <div className="h-px bg-line my-4" />
            <div
              onClick={() => salon && navigate(`/salon/${salon.id}`)}
              className="flex items-center gap-2.5 cursor-pointer mb-4"
            >
              <div className="w-10 h-10 rounded-full bg-cream2 flex items-center justify-center font-display">
                {service.salon[0]}
              </div>
              <div>
                <div className="font-semibold text-sm">{service.salon}</div>
                <div className="text-xs text-charcoalSoft">with {service.pro}</div>
              </div>
            </div>
            <button onClick={() => setBooking(true)} className="btn-primary w-full">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-2xl mb-5">Related services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      )}

      {booking && <BookingModal service={service} onClose={() => setBooking(false)} onComplete={handleComplete} />}
    </div>
  );
}
