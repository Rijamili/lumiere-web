import { useMemo, useState } from "react";
import type { Service, LocationType, Customer, BookingResult } from "../types";
import { TIME_SLOTS } from "../data/mockData";

const STEP_LABELS = ["Service", "Professional", "Date", "Time", "Location", "Details", "Summary", "Payment"];

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between py-1 ${bold ? "font-bold text-[15px]" : "text-sm"}`}>
      <span className={bold ? "text-charcoal" : "text-charcoalSoft"}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default function BookingModal({
  service,
  onClose,
  onComplete,
}: {
  service: Service;
  onClose: () => void;
  onComplete: (result: BookingResult) => void;
}) {
  const [step, setStep] = useState(2); // step 1 (service) already chosen
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [locationType, setLocationType] = useState<LocationType>("salon");
  const [address, setAddress] = useState("");
  const [customer, setCustomer] = useState<Customer>({ name: "", email: "", phone: "" });

  const dates = useMemo(() => {
    const arr: Date[] = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      arr.push(d);
    }
    return arr;
  }, []);

  const serviceFee = 5;
  const discount = 10;
  const total = (service.price + serviceFee - discount).toFixed(2);

  const next = () => setStep((s) => Math.min(s + 1, STEP_LABELS.length));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="fixed inset-0 bg-charcoal/50 z-50 flex justify-center items-start overflow-y-auto p-4 md:p-10">
      <div className="bg-white rounded-md w-full max-w-2xl p-8 fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display text-2xl m-0">Book Appointment</h2>
          <button onClick={onClose} className="bg-transparent border-none text-xl">
            ✕
          </button>
        </div>

        <div className="flex gap-1.5 mb-2 flex-wrap">
          {STEP_LABELS.map((s, i) => (
            <div key={s} className="flex items-center gap-1.5">
              <div
                className={`w-2 h-2 rounded-full ${
                  i + 1 < step ? "bg-charcoal" : i + 1 === step ? "bg-gold" : "bg-line"
                }`}
              />
              {i < STEP_LABELS.length - 1 && <div className="w-3.5 h-px bg-line" />}
            </div>
          ))}
        </div>
        <p className="text-xs text-charcoalSoft mb-6">
          Step {step} of {STEP_LABELS.length}: {STEP_LABELS[step - 1]}
        </p>

        {step === 2 && (
          <div>
            <h3 className="text-[15px] mb-3.5">Confirm professional</h3>
            <div className="card p-4 flex gap-3.5 items-center">
              <div className="w-12 h-12 rounded-full bg-cream2" />
              <div>
                <div className="font-semibold">{service.pro}</div>
                <div className="text-[13px] text-charcoalSoft">{service.salon}</div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-[15px] mb-3.5">Select a date</h3>
            <div className="flex gap-2.5 flex-wrap">
              {dates.map((d, i) => {
                const label = d.toLocaleDateString("en-US", { weekday: "short", day: "numeric" });
                const selected = date && date.toDateString() === d.toDateString();
                return (
                  <button
                    key={i}
                    onClick={() => setDate(d)}
                    className={`px-3.5 py-2.5 rounded text-[13px] border ${
                      selected ? "bg-charcoal text-white border-charcoal" : "border-line"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-[15px] mb-3.5">Select a time slot</h3>
            <div className="grid grid-cols-4 gap-2.5">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`px-2 py-2.5 rounded text-[13px] border ${
                    time === t ? "bg-charcoal text-white border-charcoal" : "border-line"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 className="text-[15px] mb-3.5">Choose service location</h3>
            <div className="flex gap-3 mb-4">
              {(["salon", "home"] as LocationType[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setLocationType(v)}
                  className={`flex-1 p-3.5 rounded text-sm border ${
                    locationType === v ? "bg-charcoal text-white border-charcoal" : "border-line"
                  }`}
                >
                  {v === "salon" ? "At Salon" : "At Home"}
                </button>
              ))}
            </div>
            {locationType === "home" && (
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="w-full px-3.5 py-3 border border-line rounded text-sm"
              />
            )}
          </div>
        )}

        {step === 6 && (
          <div>
            <h3 className="text-[15px] mb-3.5">Your details</h3>
            <div className="grid gap-3">
              <input
                value={customer.name}
                onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                placeholder="Full name"
                className="px-3.5 py-3 border border-line rounded text-sm"
              />
              <input
                value={customer.email}
                onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                placeholder="Email address"
                className="px-3.5 py-3 border border-line rounded text-sm"
              />
              <input
                value={customer.phone}
                onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                placeholder="Phone number"
                className="px-3.5 py-3 border border-line rounded text-sm"
              />
            </div>
          </div>
        )}

        {step === 7 && (
          <div>
            <h3 className="text-[15px] mb-3.5">Order summary</h3>
            <div className="card p-4.5 text-sm">
              <Row label="Service" value={service.name} />
              <Row label="Professional" value={service.pro} />
              <Row
                label="Date"
                value={date ? date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "—"}
              />
              <Row label="Time" value={time || "—"} />
              <Row label="Location" value={locationType === "salon" ? service.salon : address || "Home address"} />
              <div className="h-px bg-line my-3" />
              <Row label="Service" value={`$${service.price.toFixed(2)}`} />
              <Row label="Service fee" value={`$${serviceFee.toFixed(2)}`} />
              <Row label="Discount" value={`-$${discount.toFixed(2)}`} />
              <div className="h-px bg-line my-3" />
              <Row label="Total" value={`$${total} USD`} bold />
            </div>
          </div>
        )}

        {step === 8 && (
          <div>
            <h3 className="text-[15px] mb-3.5">Payment</h3>
            <div className="grid gap-3 mb-5">
              <input placeholder="Card number" className="px-3.5 py-3 border border-line rounded text-sm" />
              <div className="flex gap-3">
                <input placeholder="MM / YY" className="flex-1 px-3.5 py-3 border border-line rounded text-sm" />
                <input placeholder="CVC" className="flex-1 px-3.5 py-3 border border-line rounded text-sm" />
              </div>
              <input placeholder="Coupon code (optional)" className="px-3.5 py-3 border border-line rounded text-sm" />
            </div>
            <p className="text-xs text-charcoalSoft mb-4">
              🔒 Secured by Stripe. Your card details are never stored on our servers.
            </p>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 2 ? (
            <button onClick={back} className="btn-outline">
              Back
            </button>
          ) : (
            <span />
          )}
          {step < 8 ? (
            <button onClick={next} className="btn-primary">
              Continue
            </button>
          ) : (
            <button
              onClick={() => onComplete({ service, date, time, locationType, address, customer, total })}
              className="btn-gold"
            >
              Pay ${total} USD
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
