const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const demand = [320, 285, 370, 410, 480, 520, 390];
const predicted = [300, 310, 360, 420, 490, 510, 400];

const W = 460;
const H = 120;
const PAD = 16;

function normalize(val: number, min: number, max: number) {
  return PAD + (H - PAD * 2) - ((val - min) / (max - min)) * (H - PAD * 2);
}

function buildPath(data: number[], min: number, max: number): string {
  const step = (W - PAD * 2) / (data.length - 1);
  return data
    .map((v, i) => {
      const x = PAD + i * step;
      const y = normalize(v, min, max);
      return i === 0 ? `M ${x} ${y}` : `C ${x - step / 2} ${normalize(data[i - 1], min, max)} ${x - step / 2} ${y} ${x} ${y}`;
    })
    .join(" ");
}

function buildArea(data: number[], min: number, max: number): string {
  const step = (W - PAD * 2) / (data.length - 1);
  const line = buildPath(data, min, max);
  const lastX = PAD + (data.length - 1) * step;
  return `${line} L ${lastX} ${H - PAD} L ${PAD} ${H - PAD} Z`;
}

const allVals = [...demand, ...predicted];
const minVal = Math.min(...allVals) - 20;
const maxVal = Math.max(...allVals) + 20;

const LineChart = () => {
  const step = (W - PAD * 2) / (days.length - 1);

  return (
    <div className="glass-card animate-fade-up delay-600 rounded-2xl p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-foreground">7-Day Demand Trend</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Actual vs AI Predicted demand</p>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-0.5 rounded" style={{ background: 'hsl(var(--neon-green))' }} />
            <span className="text-muted-foreground">Actual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-0.5 rounded border-t border-dashed" style={{ borderColor: 'hsl(var(--electric-blue))' }} />
            <span className="text-muted-foreground">Predicted</span>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-xl" style={{ background: 'hsl(var(--muted)/0.3)' }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          style={{ height: '140px' }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(155 100% 60%)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(155 100% 60%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(195 100% 55%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(195 100% 55%)" stopOpacity="0" />
            </linearGradient>
            <filter id="glow-green">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Grid lines */}
          {[0, 0.33, 0.66, 1].map((t, i) => (
            <line
              key={i}
              x1={PAD} y1={PAD + t * (H - PAD * 2)}
              x2={W - PAD} y2={PAD + t * (H - PAD * 2)}
              stroke="hsl(220 20% 25%)" strokeWidth="0.5"
            />
          ))}

          {/* Area fills */}
          <path d={buildArea(demand, minVal, maxVal)} fill="url(#greenGrad)" />
          <path d={buildArea(predicted, minVal, maxVal)} fill="url(#blueGrad)" />

          {/* Lines */}
          <path
            d={buildPath(predicted, minVal, maxVal)}
            fill="none"
            stroke="hsl(195 100% 55%)"
            strokeWidth="1.5"
            strokeDasharray="5 3"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d={buildPath(demand, minVal, maxVal)}
            fill="none"
            stroke="hsl(155 100% 60%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow-green)"
          />

          {/* Dots */}
          {demand.map((v, i) => {
            const x = PAD + i * step;
            const y = normalize(v, minVal, maxVal);
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="4" fill="hsl(155 100% 60%)" opacity="0.2" />
                <circle cx={x} cy={y} r="2.5" fill="hsl(155 100% 60%)" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between px-4">
        {days.map((d, i) => (
          <span key={d} className={`text-[10px] font-medium ${i === 5 ? 'text-neon-green' : 'text-muted-foreground'}`}>{d}</span>
        ))}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Peak Day", value: "Sat", color: "text-neon-green" },
          { label: "Avg Demand", value: "396", color: "text-electric-blue" },
          { label: "Accuracy", value: "97.2%", color: "text-neon-green" },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-xl p-2.5 text-center" style={{ background: 'hsl(var(--muted)/0.5)' }}>
            <p className={`text-sm font-bold ${color}`}>{value}</p>
            <p className="text-[9px] text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineChart;
