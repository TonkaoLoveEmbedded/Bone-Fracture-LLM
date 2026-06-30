import { useState,type ReactNode } from "react";
import {
  IconDashboard,
  IconPatients,
  IconMicroscope,
  IconChat,
  IconBell,
  IconSettings
} from "./Icon"

interface NavEntry {
  id: string;
  label: string;
  icon: ReactNode;
}

const NAV_MAIN: NavEntry[] = [
  { id: "dashboard", label: "Dashboard", icon: <IconDashboard /> },
  { id: "patients", label: "Patient List", icon: <IconPatients /> },
  { id: "analysis", label: "AI Analysis", icon: <IconMicroscope /> },
  { id: "chat", label: "Consultant Chat", icon: <IconChat /> },
];


function Sidebar(){
    const [activeNav, setActiveNav] = useState("chat");
    return (
        <aside className="fai-sidebar">
                <div className="fai-brand">
                  <div className="fai-brand__mark">
                    <IconMicroscope size={20} />
                  </div>
                  <div>
                    <div className="fai-brand__name">FractureAI</div>
                    <div className="fai-brand__sub">Fracture Detection System</div>
                  </div>
                </div>
        
                <nav className="fai-nav" aria-label="Primary">
                  {NAV_MAIN.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`fai-nav__item${
                        activeNav === item.id ? " fai-nav__item--active" : ""
                      }`}
                      aria-current={activeNav === item.id ? "page" : undefined}
                      onClick={() => setActiveNav(item.id)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
        
                <div className="fai-sidebar__spacer" />
        
                <div className="fai-sidebar__footer">
                  <button type="button" className="fai-nav__item">
                    <IconBell />
                    <span>Notifications</span>
                  </button>
                  <button type="button" className="fai-nav__item">
                    <IconSettings />
                    <span>Settings</span>
                  </button>
                </div>
              </aside>
    )
}

export default Sidebar