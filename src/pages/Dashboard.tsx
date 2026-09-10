import { useState } from "react";

const TABS = ["Overview", "Upcoming", "Past", "Cancelled", "Favorites", "Payments", "Reviews", "Profile", "Settings"];

const UPCOMING = [
  {
    service: "Signature Haircut & Style",
    pro: "Maya Chen",
    date: "Sep 18, 2026",
    time: "2:00 PM",
    location: "The Atelier Room",
    status: "Confirmed",
    amount: 45,
  },
];

export default function Dashboard() {
  const [tab, setTab] = useState("upcoming");

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
      <h1 className="font-display text-3xl mb-6">My Account</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:min-w-[180px]">
          {TABS.map((t) => {
            const key = t.toLowerCase();
            return (
              <div
                key={t}
                onClick={() => setTab(key)}
                className={`py-2.5 text-sm cursor-pointer border-b border-line ${
                  tab === key ? "text-charcoal" : "text-charcoalSoft"
                }`}
              >
                {t}
              </div>
            );
          })}
        </aside>
        <div className="flex-1">
          {tab === "upcoming" ? (
            UPCOMING.map((b, i) => (
              <div key={i} className="card p-5 mb-4">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold text-[15px]">{b.service}</div>
                    <div className="text-[13px] text-charcoalSoft my-1">
                      with {b.pro} · {b.location}
                    </div>
                    <div className="text-[13px] text-charcoalSoft">
                      {b.date} at {b.time}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gold mb-1.5">{b.status}</div>
                    <div className="font-semibold">${b.amount}</div>
                  </div>
                </div>
                <button className="btn-outline mt-3.5 text-[13px]">View Details</button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-charcoalSoft">
              <p className="text-[15px]">Nothing here yet</p>
              <p className="text-[13px]">Your {tab} will show up in this section</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
