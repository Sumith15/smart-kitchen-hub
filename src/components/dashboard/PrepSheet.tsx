import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const data = [
  { item: "Grilled Salmon", category: "Protein", predicted: 94, optimal: 108, buffer: "+15%", waste: "12 lbs saved", wastePill: "pill-green", trend: "up" },
  { item: "Truffle Risotto", category: "Pasta", predicted: 76, optimal: 85, buffer: "+12%", waste: "8 lbs saved", wastePill: "pill-green", trend: "up" },
  { item: "NY Strip Steak", category: "Protein", predicted: 52, optimal: 58, buffer: "+11%", waste: "5 lbs saved", wastePill: "pill-green", trend: "stable" },
  { item: "Lobster Bisque", category: "Soup", predicted: 110, optimal: 128, buffer: "+16%", waste: "18 lbs saved", wastePill: "pill-green", trend: "up" },
  { item: "Caesar Salad", category: "Salad", predicted: 88, optimal: 96, buffer: "+9%", waste: "3 lbs saved", wastePill: "pill-green", trend: "up" },
  { item: "Duck Confit", category: "Protein", predicted: 34, optimal: 40, buffer: "+18%", waste: "6 lbs saved", wastePill: "pill-green", trend: "down" },
  { item: "Chocolate Lava", category: "Dessert", predicted: 58, optimal: 65, buffer: "+12%", waste: "2 lbs saved", wastePill: "pill-blue", trend: "stable" },
  { item: "Vegan Pasta", category: "Pasta", predicted: 42, optimal: 50, buffer: "+19%", waste: "4 lbs saved", wastePill: "pill-green", trend: "up" },
];

const TrendIcon = ({ t }: { t: string }) => {
  if (t === "up") return <TrendingUp className="w-3.5 h-3.5 text-neon-green" />;
  if (t === "down") return <TrendingDown className="w-3.5 h-3.5 text-red-400" />;
  return <Minus className="w-3.5 h-3.5 text-muted-foreground" />;
};

const PrepSheet = () => {
  return (
    <div className="glass-card animate-fade-up delay-700 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-[hsl(var(--border))]">
        <div>
          <h3 className="text-sm font-bold text-foreground">AI Prep Sheet</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Real-time predictions with waste prevention metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-green pulse-dot" />
          <span className="text-[10px] text-neon-green font-semibold">Live • Updated 2m ago</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[hsl(var(--border))]" style={{ background: 'hsl(var(--muted)/0.5)' }}>
              {["Menu Item", "Category", "AI Predicted Demand", "Optimal Prep (w/ Buffer)", "Trend", "Waste Prevented"].map((col) => (
                <th key={col} className="px-5 py-3 text-left text-[10px] font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.item}
                className="border-b border-[hsl(var(--border)/0.5)] transition-colors duration-200 group"
                style={{
                  background: i % 2 === 0 ? 'transparent' : 'hsl(var(--muted)/0.2)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'hsl(var(--muted)/0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? 'transparent' : 'hsl(var(--muted)/0.2)';
                }}
              >
                <td className="px-5 py-3.5">
                  <span className="text-sm font-semibold text-foreground">{row.item}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-xs text-muted-foreground">{row.category}</span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold mono text-electric-blue">{row.predicted}</span>
                    <div className="flex-1 max-w-20 h-1.5 rounded-full bg-[hsl(var(--muted))]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(row.predicted / 130) * 100}%`,
                          background: 'hsl(var(--electric-blue))',
                          boxShadow: '0 0 6px hsl(var(--electric-blue)/0.5)'
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold mono text-neon-green">{row.optimal}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md pill-green">{row.buffer}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <TrendIcon t={row.trend} />
                </td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold ${row.wastePill}`}>
                    🌿 {row.waste}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer summary */}
      <div className="px-6 py-3 flex items-center gap-6 border-t border-[hsl(var(--border))]" style={{ background: 'hsl(var(--muted)/0.3)' }}>
        <span className="text-[10px] text-muted-foreground">8 items total</span>
        <span className="text-[10px] text-neon-green font-semibold">🌿 Total: 58 lbs waste prevented today</span>
        <span className="ml-auto text-[10px] text-muted-foreground">AI Confidence: <span className="text-electric-blue font-semibold">96.8%</span></span>
      </div>
    </div>
  );
};

export default PrepSheet;
