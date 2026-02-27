const items = [
  { label: "Pasta", prep: 85, color: "hsl(var(--neon-green))", glow: "hsl(155 100% 60% / 0.4)" },
  { label: "Salmon", prep: 62, color: "hsl(var(--electric-blue))", glow: "hsl(195 100% 55% / 0.4)" },
  { label: "Risotto", prep: 74, color: "hsl(var(--neon-green))", glow: "hsl(155 100% 60% / 0.4)" },
  { label: "Steak", prep: 48, color: "hsl(38 100% 60%)", glow: "hsl(38 100% 60% / 0.4)" },
  { label: "Soup", prep: 93, color: "hsl(var(--electric-blue))", glow: "hsl(195 100% 55% / 0.4)" },
  { label: "Salad", prep: 57, color: "hsl(280 100% 70%)", glow: "hsl(280 100% 70% / 0.4)" },
  { label: "Dessert", prep: 38, color: "hsl(38 100% 60%)", glow: "hsl(38 100% 60% / 0.4)" },
];

const max = Math.max(...items.map((i) => i.prep));

const BarChart = () => {
  return (
    <div className="glass-card animate-fade-up delay-500 rounded-2xl p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-foreground">Optimal Prep Quantities</h3>
          <p className="text-xs text-muted-foreground mt-0.5">AI-recommended portions per menu item</p>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold pill-green">Today</span>
      </div>

      {/* Chart */}
      <div className="flex items-end gap-3 h-44 px-2">
        {items.map((item) => {
          const heightPct = (item.prep / max) * 100;
          return (
            <div key={item.label} className="flex-1 flex flex-col items-center gap-2 group">
              <span className="text-[10px] font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: item.color }}>
                {item.prep}
              </span>
              <div className="relative w-full flex items-end" style={{ height: '140px' }}>
                <div
                  className="w-full rounded-t-lg transition-all duration-700 ease-out relative overflow-hidden"
                  style={{
                    height: `${heightPct}%`,
                    background: `linear-gradient(180deg, ${item.color} 0%, ${item.color.replace(')', ' / 0.5)').replace('hsl(', 'hsl(')} 100%)`,
                    boxShadow: `0 -4px 20px ${item.glow}, 0 0 10px ${item.glow}`,
                  }}
                >
                  {/* Shine overlay */}
                  <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white/20 to-transparent rounded-t-lg" />
                </div>
              </div>
              <span className="text-[9px] text-muted-foreground font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-neon-green" />Optimal Qty</div>
        <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-electric-blue" />High Demand</div>
        <div className="ml-auto font-mono text-neon-green font-semibold">Units: portions</div>
      </div>
    </div>
  );
};

export default BarChart;
