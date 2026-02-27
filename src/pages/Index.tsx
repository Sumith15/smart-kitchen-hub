import { Bell, Settings, RefreshCw, BrainCircuit } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import KPICards from "@/components/dashboard/KPICards";
import BarChart from "@/components/dashboard/BarChart";
import LineChart from "@/components/dashboard/LineChart";
import PrepSheet from "@/components/dashboard/PrepSheet";

const Index = () => {
  return (
    <div className="flex min-h-screen" style={{ background: 'var(--gradient-dark)' }}>
      {/* Mesh gradient background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'var(--gradient-mesh)' }}
      />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-auto relative z-10">
        {/* Top Nav */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-[hsl(var(--glass-border)/0.3)] animate-fade-up" style={{ background: 'hsl(var(--glass-bg)/0.4)', backdropFilter: 'blur(10px)' }}>
          <div className="flex items-center gap-3">
            <BrainCircuit className="w-5 h-5 text-neon-green" />
            <div>
              <h2 className="text-sm font-bold text-foreground">Operations Dashboard</h2>
              <p className="text-[10px] text-muted-foreground">Friday, June 14 · Dinner Service</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card text-[11px] text-muted-foreground hover:text-neon-green transition-colors duration-200 group">
              <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              Refresh
            </button>
            <button className="relative w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:glow-blue transition-all duration-200">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-neon-green" style={{ boxShadow: '0 0 6px hsl(155 100% 60% / 0.8)' }} />
            </button>
            <button className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:glow-green transition-all duration-200">
              <Settings className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs" style={{ background: 'var(--gradient-green)', color: 'hsl(var(--primary-foreground))' }}>
              JC
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex-1 p-8 flex flex-col gap-6">
          {/* Row 1: KPI Cards */}
          <KPICards />

          {/* Row 2: Charts */}
          <div className="grid grid-cols-2 gap-5">
            <BarChart />
            <LineChart />
          </div>

          {/* Row 3: Prep Sheet */}
          <PrepSheet />
        </div>

        {/* Footer */}
        <footer className="px-8 py-3 border-t border-[hsl(var(--glass-border)/0.3)] flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground">Smart Kitchen OS © 2025 · Powered by AI</span>
          <span className="text-[10px] text-muted-foreground">Model: <span className="text-electric-blue font-medium mono">gpt-4o-kitchen-v3</span></span>
        </footer>
      </main>
    </div>
  );
};

export default Index;
