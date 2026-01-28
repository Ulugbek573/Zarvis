import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";


export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <Topbar />

      <main className="dashboard-page">
        <DashboardContent />
      </main>
    </>
  );
}
