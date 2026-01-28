import { useNavigate } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="topbar-wrapper">
      <div className="topbar">

        <div className="topbar-left">
          <h3>Hello {username}</h3>
          <span>4:45 pm 19 Jan 2022</span>
        </div>

        <div className="topbar-center">
          <input placeholder="Search" />
        </div>

        <div className="topbar-right">
          <button className="icon">🔔</button>

          <div className="user">
            <img src="https://i.pravatar.cc/40" alt="" />
            <span>{username}</span>
          </div>

          <button className="logout" onClick={handleLogout}>
            ⎋ Logout
          </button>
        </div>

      </div>
    </div>
  );
}
