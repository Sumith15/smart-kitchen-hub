import { useState } from "react";
import { ChefHat, MapPin, Calendar, Zap, Cloud, Sun, Wind, Droplets, Thermometer } from "lucide-react";

const Sidebar = () => {
  const [eventToggle, setEventToggle] = useState(false);
  const [city, setCity] = useState("San Francisco");
  const [date, setDate] = useState("2025-06-14");

  return (
    <aside className="w-72 min-h-screen flex flex-col gap-5 p-5 glass-card-strong rounded-none border-r border-[hsl(var(--glass-border)/0.4)] animate-fade-up">
      {/* Logo */}
      <div className="flex items-center gap-3 pb-2">
        <div className="relative w-10 h-10 rounded-xl glass-card flex items-center justify-center glow-green">
          <ChefHat className="w-5 h-5 text-neon-green" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-neon-green pulse-dot" />
        </div>
        <div>
          <h1 className="text-sm font-700 text-neon-green leading-tight" style={{ fontWeight: 700, letterSpacing: '-0.03em' }}>Smart Kitchen OS</h1>
          <p className="text-[10px] text-muted-foreground">AI Food Waste Intelligence</p>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--glass-border))] to-transparent" />

      {/* Control Inputs */}
      <div className="flex flex-col gap-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Control Center</p>

        {/* City Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-muted-foreground flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-electric-blue" /> Restaurant City
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="glass-input w-full rounded-lg px-3 py-2 text-sm font-medium"
            placeholder="Enter city..."
          />
        </div>

        {/* Date Picker */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-electric-blue" /> Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="glass-input w-full rounded-lg px-3 py-2 text-sm font-medium"
            style={{ colorScheme: 'dark' }}
          />
        </div>

        {/* Event Toggle */}
        <div className="flex items-center justify-between glass-card rounded-xl px-4 py-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              Local Event Today?
            </span>
            <span className="text-[10px] text-muted-foreground">Boosts demand forecast</span>
          </div>
          <button
            onClick={() => setEventToggle(!eventToggle)}
            className={`relative w-12 h-6 rounded-full transition-all duration-300 toggle-track ${eventToggle ? 'active' : ''}`}
            aria-label="Toggle local event"
          >
            <span
              className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${
                eventToggle ? 'left-7' : 'left-1'
              }`}
              style={{
                boxShadow: eventToggle ? '0 0 8px hsl(var(--neon-green) / 0.8)' : undefined
              }}
            />
          </button>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--glass-border))] to-transparent" />

      {/* Weather Widget */}
      <div className="flex flex-col gap-3">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Live Weather</p>

        <div className="glass-card rounded-2xl p-4 relative overflow-hidden">
          {/* BG glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5 pointer-events-none" />

          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs text-muted-foreground">{city}</p>
              <p className="text-3xl font-bold" style={{ fontWeight: 700 }}>
                <span className="text-yellow-300" style={{ textShadow: '0 0 20px hsl(45 100% 60% / 0.5)' }}>85°F</span>
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Clear Skies ☀️</p>
            </div>
            {/* 3D Sun icon */}
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-pulse" />
              <div className="absolute inset-2 rounded-full bg-yellow-400/10" />
              <Sun className="w-8 h-8 text-yellow-300 relative z-10" style={{ filter: 'drop-shadow(0 0 8px hsl(45 100% 60% / 0.8))' }} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: Wind, label: "Wind", value: "12 mph" },
              { icon: Droplets, label: "Humid", value: "42%" },
              { icon: Thermometer, label: "Feels", value: "88°F" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1 rounded-lg p-1.5" style={{ background: 'hsl(var(--muted)/0.5)' }}>
                <Icon className="w-3 h-3 text-electric-blue" />
                <span className="text-[9px] text-muted-foreground">{label}</span>
                <span className="text-[10px] font-semibold text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Forecast mini */}
        <div className="grid grid-cols-3 gap-1.5">
          {['Mon', 'Tue', 'Wed'].map((day, i) => {
            const icons = ['☀️', '⛅', '🌧️'];
            const temps = ['83°', '79°', '71°'];
            return (
              <div key={day} className="glass-card rounded-xl p-2 flex flex-col items-center gap-1">
                <span className="text-[9px] text-muted-foreground">{day}</span>
                <span className="text-base">{icons[i]}</span>
                <span className="text-[10px] font-semibold text-foreground">{temps[i]}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-auto">
        <div className="glass-card rounded-xl p-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-green pulse-dot" />
          <span className="text-[10px] text-muted-foreground">AI Engine: <span className="text-neon-green font-semibold">Active</span></span>
          <span className="ml-auto text-[9px] text-muted-foreground mono">v2.4.1</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
