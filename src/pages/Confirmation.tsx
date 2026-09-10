import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { BookingResult } from "../types";

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between py-1 ${bold ? "font-bold text-[15px]" : "text-sm"}`}>
      <span className={bold ? "text-charcoal" : "text-charcoalSoft"}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state as BookingResult | undefined;

  const bookingId = useMemo(() => "LUM-" + Math.floor(100000 + Math.random() * 900000), []);

  if (!booking) {
    return (
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <p className="text-charcoalSoft">No recent booking found.</p>
        <button onClick={() => navigate("/search")} className="btn-primary mt-4">
          Book a service
        </button>
      </div>
    );
  }

  const date = booking.date ? new Date(booking.date) : null;

  return (
    <div className="max-w-lg mx-auto px-6 py-16 fade-in">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-5 text-2xl">
          ✓
        </div>
        <h1 className="font-display text-2xl">Booking Confirmed</h1>
        <p className="text-charcoalSoft text-sm">
          A confirmation has been sent to {booking.customer.email || "your email"}
        </p>
      </div>
      <div className="card p-6 text-sm">
        <Row label="Booking ID" value={bookingId} />
        <Row label="Service" value={booking.service.name} />
        <Row label="Salon / Professional" value={`${booking.service.salon} · ${booking.service.pro}`} />
        <Row
          label="Date"
          value={date ? date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "—"}
        />
        <Row label="Time" value={booking.time || "—"} />
        <Row
          label="Address"
          value={booking.locationType === "salon" ? booking.service.salon : booking.address || "Home address"}
        />
        <div className="h-px bg-line my-3" />
        <Row label="Amount Paid" value={`$${booking.total} USD`} bold />
        <Row label="Payment Status" value="Paid ✓" />
      </div>
      <div className="flex gap-3 mt-6">
        <button className="btn-outline flex-1">Add to Calendar</button>
        <button className="btn-outline flex-1">Contact Salon</button>
      </div>
      <button onClick={() => navigate("/dashboard")} className="btn-primary w-full mt-3">
        View Booking
      </button>
    </div>
  );
}
