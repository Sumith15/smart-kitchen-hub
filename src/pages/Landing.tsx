import { useNavigate } from "react-router-dom";
import { ChefHat, ArrowRight, Zap, Brain, BarChart3, Leaf, Shield, TrendingUp, Star, Play, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "40%", label: "Waste Reduction", icon: Leaf },
  { value: "$382K", label: "Annual Savings", icon: TrendingUp },
  { value: "99.2%", label: "AI Accuracy", icon: Brain },
  { value: "2,400+", label: "Restaurants", icon: Shield },
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    desc: "GPT-4 trained on 10M+ kitchen data points forecasts demand with 99.2% accuracy.",
    color: "neon-green",
    delay: 0,
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Live dashboards track every ingredient, portion, and waste metric across your entire kitchen.",
    color: "electric-blue",
    delay: 100,
  },
  {
    icon: Leaf,
    title: "Zero Waste Engine",
    desc: "Smart buffer calculations and demand spikes auto-adjust prep quantities before service.",
    color: "neon-green",
    delay: 200,
  },
  {
    icon: Zap,
    title: "Event Intelligence",
    desc: "Detects local events, weather shifts, and seasonal trends to boost forecast precision.",
    color: "electric-blue",
    delay: 300,
  },
];

const testimonials = [
  {
    name: "Marco Bellini",
    role: "Head Chef, Osteria Milano",
    text: "Smart Kitchen OS cut our daily food waste by 47%. The AI predictions are eerily accurate.",
    stars: 5,
  },
  {
    name: "Sarah Chen",
    role: "Operations Director, Nobu Group",
    text: "We save $12,000 a month across 3 locations. This is the future of restaurant management.",
    stars: 5,
  },
  {
    name: "James Okafor",
    role: "Owner, Ember & Oak",
    text: "Setup took 20 minutes. ROI came in 11 days. I wish I found this 3 years earlier.",
    stars: 5,
  },
];

// Floating 3D orb component
const Orb = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      background: "radial-gradient(circle at 30% 30%, hsl(155 100% 60% / 0.35), hsl(195 100% 55% / 0.1) 60%, transparent 80%)",
      filter: "blur(40px)",
      ...style,
    }}
  />
);

const Landing = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Ambient background orbs */}
      <Orb className="w-[600px] h-[600px] -top-32 -left-32 opacity-60" />
      <Orb className="w-[500px] h-[500px] top-1/2 -right-48 opacity-40"
        style={{ background: "radial-gradient(circle at 70% 30%, hsl(195 100% 55% / 0.3), transparent 70%)", filter: "blur(50px)" }}
      />
      <Orb className="w-[400px] h-[400px] bottom-0 left-1/3 opacity-30"
        style={{ background: "radial-gradient(circle at 50% 50%, hsl(155 100% 60% / 0.2), transparent 70%)", filter: "blur(60px)" }}
      />

      {/* ─── NAV ─── */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-5 border-b border-[hsl(var(--glass-border)/0.3)]"
        style={{ background: "hsl(var(--glass-bg)/0.4)", backdropFilter: "blur(20px)" }}>
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl glass-card flex items-center justify-center glow-green">
            <ChefHat className="w-5 h-5 text-neon-green" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-neon-green pulse-dot" />
          </div>
          <span className="text-sm font-bold text-neon-green" style={{ letterSpacing: "-0.03em" }}>
            Smart Kitchen OS
          </span>
        </div>

        <div className="hidden md:flex items-center gap-7 text-xs text-muted-foreground font-medium">
          {["Features", "Pricing", "Case Studies", "Docs"].map((item) => (
            <a key={item} href="#" className="hover:text-foreground transition-colors duration-200">{item}</a>
          ))}
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background: "var(--gradient-green)",
            color: "hsl(var(--primary-foreground))",
            boxShadow: "0 0 20px hsl(155 100% 60% / 0.35)",
          }}
        >
          Launch Dashboard
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </nav>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-20"
      >
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-[11px] font-semibold transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            background: "hsl(155 100% 60% / 0.1)",
            border: "1px solid hsl(155 100% 60% / 0.3)",
            color: "hsl(var(--neon-green))",
            transitionDelay: "0ms",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-green pulse-dot" />
          Trusted by 2,400+ restaurants worldwide
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl md:text-7xl font-bold leading-[1.05] mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            letterSpacing: "-0.04em",
            transitionDelay: "100ms",
          }}
        >
          <span className="text-foreground">Stop Wasting</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, hsl(155 100% 65%), hsl(175 100% 55%), hsl(195 100% 60%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px hsl(155 100% 60% / 0.4))",
            }}
          >
            Food & Money
          </span>
        </h1>

        <p
          className={`max-w-xl text-base text-muted-foreground leading-relaxed mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "200ms" }}
        >
          The world's first AI-powered kitchen operating system that predicts demand, optimises prep quantities, and eliminates food waste—before service begins.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <button
            onClick={() => navigate("/dashboard")}
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            style={{
              background: "var(--gradient-green)",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "0 0 30px hsl(155 100% 60% / 0.4), 0 8px 32px hsl(220 30% 3% / 0.5)",
            }}
          >
            Open Live Dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm glass-card hover:glow-blue transition-all duration-300 hover:scale-105 text-foreground">
            <Play className="w-4 h-4 text-electric-blue" />
            Watch 2-min Demo
          </button>
        </div>

        {/* 3D Floating Dashboard Preview Card */}
        <div
          className={`relative w-full max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          style={{
            transitionDelay: "500ms",
            transform: `perspective(1200px) rotateX(${-mousePos.y * 6}deg) rotateY(${mousePos.x * 6}deg) translateZ(0) ${isVisible ? "translateY(0)" : "translateY(48px)"}`,
            transition: "transform 0.15s ease-out, opacity 1s ease, translate 1s ease",
          }}
        >
          {/* Glow behind card */}
          <div
            className="absolute inset-0 rounded-3xl opacity-40 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, hsl(155 100% 60% / 0.3) 0%, hsl(195 100% 55% / 0.15) 50%, transparent 80%)",
              transform: "translateY(20px) scale(1.05)",
              filter: "blur(20px)",
            }}
          />

          {/* Mock dashboard preview */}
          <div
            className="relative glass-card-strong rounded-3xl overflow-hidden border border-[hsl(var(--glass-border)/0.5)]"
            style={{ boxShadow: "0 40px 80px hsl(220 30% 2% / 0.8), 0 0 0 1px hsl(var(--glass-border)/0.3)" }}
          >
            {/* Top bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[hsl(var(--glass-border)/0.4)]"
              style={{ background: "hsl(var(--glass-bg)/0.6)" }}>
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-neon-green/70" />
              <span className="ml-4 text-[10px] text-muted-foreground mono">smart-kitchen-os.app/dashboard</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green pulse-dot" />
                <span className="text-[9px] text-neon-green font-medium">LIVE</span>
              </div>
            </div>

            {/* Dashboard mockup grid */}
            <div className="p-5 grid grid-cols-3 gap-3">
              {/* KPI cards */}
              {[
                { label: "Items to Prep", value: "412", color: "var(--neon-green)" },
                { label: "Portions Saved", value: "85", color: "var(--electric-blue)" },
                { label: "Est. Savings", value: "$382", color: "var(--neon-green)" },
              ].map((kpi) => (
                <div key={kpi.label} className="glass-card rounded-xl p-3">
                  <p className="text-[9px] text-muted-foreground mb-1">{kpi.label}</p>
                  <p className="text-2xl font-bold" style={{ color: `hsl(${kpi.color})`, textShadow: `0 0 15px hsl(${kpi.color}/0.5)` }}>
                    {kpi.value}
                  </p>
                  <div className="mt-1.5 h-0.5 rounded-full w-2/3" style={{ background: `linear-gradient(90deg, hsl(${kpi.color}), transparent)` }} />
                </div>
              ))}
            </div>

            {/* Chart mockup */}
            <div className="px-5 pb-5 grid grid-cols-2 gap-3">
              <div className="glass-card rounded-xl p-3">
                <p className="text-[9px] text-muted-foreground mb-3">Optimal Prep Quantities</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[65, 40, 85, 55, 95, 70, 50, 80].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i % 2 === 0
                          ? "linear-gradient(180deg, hsl(155 100% 60% / 0.8), hsl(155 100% 60% / 0.3))"
                          : "linear-gradient(180deg, hsl(195 100% 55% / 0.8), hsl(195 100% 55% / 0.3))",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-xl p-3">
                <p className="text-[9px] text-muted-foreground mb-3">7-Day Demand Trend</p>
                <svg viewBox="0 0 120 50" className="w-full h-16">
                  <defs>
                    <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(155 100% 60%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(155 100% 60%)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 35 C20 30, 30 15, 50 20 S80 8, 120 12" fill="none" stroke="hsl(155 100% 60%)" strokeWidth="1.5" />
                  <path d="M0 35 C20 30, 30 15, 50 20 S80 8, 120 12 L120 50 L0 50 Z" fill="url(#lg1)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="glass-card card-3d rounded-2xl p-5 text-center">
              <Icon className="w-5 h-5 text-neon-green mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1" style={{ letterSpacing: "-0.04em" }}>{value}</p>
              <p className="text-[11px] text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-neon-green font-semibold tracking-widest uppercase mb-3">Capabilities</p>
            <h2 className="text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.03em" }}>
              Intelligence Built for the Kitchen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, desc, color, delay }) => (
              <div
                key={title}
                className="glass-card card-3d rounded-2xl p-6 border border-[hsl(var(--glass-border)/0.4)] group"
                style={{ animationDelay: `${delay}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: color === "neon-green"
                      ? "hsl(155 100% 60% / 0.15)"
                      : "hsl(195 100% 55% / 0.15)",
                    border: `1px solid hsl(${color === "neon-green" ? "155 100% 60%" : "195 100% 55%"} / 0.3)`,
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: color === "neon-green" ? "hsl(var(--neon-green))" : "hsl(var(--electric-blue))" }}
                  />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-electric-blue font-semibold tracking-widest uppercase mb-3">Social Proof</p>
            <h2 className="text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.03em" }}>
              Chefs Love It
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(({ name, role, text, stars }) => (
              <div key={name} className="glass-card card-3d rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5">"{text}"</p>
                <div>
                  <p className="text-xs font-bold text-foreground">{name}</p>
                  <p className="text-[10px] text-muted-foreground">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="glass-card-strong rounded-3xl p-12 text-center relative overflow-hidden"
            style={{ border: "1px solid hsl(155 100% 60% / 0.25)" }}
          >
            {/* inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, hsl(155 100% 60% / 0.12) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-neon-green mb-4">Start Free Today</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: "-0.04em" }}>
                Your Kitchen is{" "}
                <span style={{
                  background: "linear-gradient(135deg, hsl(155 100% 65%), hsl(195 100% 60%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Ready
                </span>
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
                Join 2,400+ restaurants already saving money and reducing waste with Smart Kitchen OS.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                {["No credit card required", "14-day free trial", "Cancel anytime"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <CheckCircle className="w-3 h-3 text-neon-green" />
                    {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/dashboard")}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: "var(--gradient-green)",
                  color: "hsl(var(--primary-foreground))",
                  boxShadow: "0 0 40px hsl(155 100% 60% / 0.4), 0 12px 40px hsl(220 30% 3% / 0.6)",
                }}
              >
                Open the Dashboard
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 px-8 py-6 border-t border-[hsl(var(--glass-border)/0.3)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChefHat className="w-4 h-4 text-neon-green" />
          <span className="text-xs text-muted-foreground">Smart Kitchen OS © 2025 · Powered by AI</span>
        </div>
        <span className="text-[10px] text-muted-foreground mono">
          Model: <span className="text-electric-blue">gpt-4o-kitchen-v3</span>
        </span>
      </footer>
    </div>
  );
};

export default Landing;
