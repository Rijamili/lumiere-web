import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[420px] mx-auto px-6 py-16">
      <h1 className="font-display text-2xl mb-2 text-center">Welcome back</h1>
      <p className="text-center text-charcoalSoft text-sm mb-8">Sign in to manage your bookings</p>
      <div className="grid gap-3.5">
        <input placeholder="Email address" className="px-3.5 py-3 border border-line rounded text-sm" />
        <input placeholder="Password" type="password" className="px-3.5 py-3 border border-line rounded text-sm" />
        <button onClick={() => navigate("/dashboard")} className="btn-primary">
          Sign In
        </button>
        <button className="btn-outline">Continue with Google</button>
      </div>
      <p className="text-[13px] text-center mt-5 text-charcoalSoft">
        New here? <span className="text-gold cursor-pointer">Create an account</span>
      </p>
    </div>
  );
}
