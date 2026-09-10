# Lumière — Salon & Beauty Marketplace (Frontend)

A React + TypeScript + Tailwind CSS frontend for a premium salon/beauty-services
marketplace, inspired by the booking convenience of platforms like Urban Company,
with an original "Lumière" brand identity.

## What's included

- Home page: hero, categories, popular services, top-rated pros, featured salons,
  offers, how-it-works, reviews, why-choose-us
- Search & filter page (price, rating, sort by popularity/rating/price/nearest)
- Service details page (includes, benefits, reviews, related services)
- Salon details page (hours, contact, team, gallery, services)
- 8-step booking flow modal (professional -> date -> time -> at-salon/at-home ->
  customer details -> order summary in USD -> payment)
- Booking confirmation page with booking ID, invoice summary, payment status
- Customer dashboard (upcoming/past/cancelled bookings, favorites, etc.)
- Login page
- Offers & packages page

All data is mock data in `src/data/mockData.ts` -- there is no backend yet.
Payments are UI-only; no real Stripe calls are made.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Navbar, Footer, ServiceCard, Stars, Logo, BookingModal
  pages/          Home, Search, ServiceDetails, SalonDetails, Dashboard, Login,
                  Confirmation, Offers
  data/           mockData.ts -- categories, services, salons, professionals,
                  reviews, offers
  types/          shared TypeScript interfaces
  index.css       Tailwind + brand utility classes (btn-primary, btn-outline,
                  btn-gold, card, fade-in)
```

## Design tokens

| Token | Hex |
|---|---|
| cream | #F8F4EC |
| cream2 | #F1EBDE |
| charcoal | #211D1B |
| charcoalSoft | #3A3532 |
| gold | #A9863B |
| goldSoft | #C9A662 |
| plum | #4B2E39 |
| line | #E4DCC9 |

Fonts: Fraunces (display/headings), Inter (body).

## What this is NOT yet

This is the customer-facing frontend only. Not included:

- Backend API (Node/Express/MongoDB)
- Real authentication (JWT/session, social login)
- Real Stripe payment processing
- Admin dashboard
- Salon/professional dashboard
- Notifications (email/SMS/WhatsApp)
- Image upload / Cloudinary
- Maps/location services

See the main conversation for the roadmap and commands to scaffold each of those.
