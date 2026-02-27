import { Package, Leaf, TrendingUp, ArrowUpRight } from "lucide-react";

const kpis = [
  {
    title: "Items to Prep Today",
    value: "412",
    unit: "",
    change: "+8%",
    changeLabel: "vs yesterday",
    icon: Package,
    iconColor: "text-electric-blue",
    glowClass: "glow-blue",
    accentClass: "text-electric-blue",
    gradient: "from-[hsl(195_100%_55%/0.08)] to-transparent",
    borderGlow: "hsl(195 100% 55% / 0.2)",
    delay: "delay-200",
  },
  {
    title: "Food Portions Saved",
    value: "85",
    unit: " portions",
    change: "+12%",
    changeLabel: "reduction vs avg",
    icon: Leaf,
    iconColor: "text-neon-green",
    glowClass: "glow-green",
    accentClass: "text-neon-green",
    gradient: "from-[hsl(155_100%_60%/0.08)] to-transparent",
    borderGlow: "hsl(155 100% 60% / 0.25)",
    delay: "delay-300",
  },
  {
    title: "Est. Daily Savings",
    value: "$382",
    unit: ".50",
    change: "+$41",
    changeLabel: "vs last week",
    icon: TrendingUp,
    iconColor: "text-neon-green",
    glowClass: "glow-green",
    accentClass: "text-neon-green",
    gradient: "from-[hsl(155_100%_60%/0.06)] via-[hsl(175_100%_50%/0.04)] to-transparent",
    borderGlow: "hsl(155 100% 60% / 0.3)",
    delay: "delay-400",
  },
];

const KPICards = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <div
            key={kpi.title}
            className={`glass-card card-3d animate-fade-up ${kpi.delay} rounded-2xl p-6 relative overflow-hidden cursor-default`}
            style={{ borderColor: kpi.borderGlow, borderWidth: '1px', borderStyle: 'solid' }}
          >
            {/* BG gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${kpi.gradient} pointer-events-none`} />

            {/* Top row */}
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className={`w-10 h-10 rounded-xl glass-card flex items-center justify-center ${kpi.glowClass}`}>
                <Icon className={`w-5 h-5 ${kpi.iconColor}`} />
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-neon-green/10 border border-neon-green/20">
                <ArrowUpRight className="w-3 h-3 text-neon-green" />
                <span className="text-[10px] font-semibold text-neon-green">{kpi.change}</span>
              </div>
            </div>

            {/* Value */}
            <div className="relative z-10">
              <div className="flex items-baseline gap-0.5 mb-1">
                <span
                  className={`text-4xl font-bold ${kpi.accentClass}`}
                  style={{ fontWeight: 800, textShadow: `0 0 30px ${kpi.borderGlow}` }}
                >
                  {kpi.value}
                </span>
                {kpi.unit && (
                  <span className="text-lg text-muted-foreground font-medium">{kpi.unit}</span>
                )}
              </div>
              <p className="text-sm text-foreground font-semibold">{kpi.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{kpi.changeLabel}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPICards;
