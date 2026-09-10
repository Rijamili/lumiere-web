import { useNavigate } from "react-router-dom";
import type { Service } from "../types";
import Stars from "./Stars";

export default function ServiceCard({ service }: { service: Service }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/service/${service.id}`)} className="card cursor-pointer">
      <div
        className="h-[170px] bg-cover bg-center"
        style={{ backgroundImage: `url(${service.img})` }}
      />
      <div className="p-4">
        <div className="text-xs text-gold mb-1">{service.category}</div>
        <div className="font-semibold text-[15px]">{service.name}</div>
        <div className="text-[13px] text-charcoalSoft my-1">
          {service.salon} · {service.pro}
        </div>
        <div className="flex items-center gap-1.5 my-1.5">
          <Stars rating={service.rating} />
          <span className="text-xs text-charcoalSoft">({service.reviews})</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div>
            <span className="font-semibold text-base">${service.price}</span>
            <span className="text-xs text-charcoalSoft"> · {service.duration}</span>
          </div>
          <span className="text-xs text-charcoalSoft">{service.distance}</span>
        </div>
        <button className="btn-primary w-full mt-3 text-[13px]">Book Now</button>
      </div>
    </div>
  );
}
