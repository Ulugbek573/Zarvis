import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">J</div>
        <span>ZARVIS</span>
      </div>

      <div className="divider" />

      <nav className="sidebar-menu">

        <NavLink to="/dashboard" className="menu-item">
          <span className="menu-icon">▦</span>
          <span className="menu-text">Bosh sahifa</span>
        </NavLink>

        <NavLink
          to="/monitoring"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <span className="menu-icon">📄</span>
          <span className="menu-text">Monitoring</span>
          <span className="menu-dot" />
        </NavLink>

        <NavLink to="/upload" className="menu-item">
          <span className="menu-icon">☁️</span>
          <span className="menu-text">Xizmatlarni yuklash</span>
        </NavLink>

        <NavLink to="/tasks" className="menu-item">
          <span className="menu-icon">📦</span>
          <span className="menu-text">Topshiriqlar</span>
        </NavLink>

        <NavLink to="/history" className="menu-item">
          <span className="menu-icon">🕘</span>
          <span className="menu-text">Xizmatlar tarixi</span>
        </NavLink>

        <NavLink to="/clients" className="menu-item">
          <span className="menu-icon">👥</span>
          <span className="menu-text">Mijozlar</span>
        </NavLink>

        <NavLink to="/notifications" className="menu-item">
          <span className="menu-icon">🔔</span>
          <span className="menu-text">Eslatmalar</span>
        </NavLink>

        <NavLink to="/sms" className="menu-item">
          <span className="menu-icon">💬</span>
          <span className="menu-text">SMS sozlamalari</span>
        </NavLink>

        <NavLink to="/staff" className="menu-item">
          <span className="menu-icon">👤</span>
          <span className="menu-text">Xodimlar</span>
        </NavLink>

      </nav>

    </aside>
  );
}
