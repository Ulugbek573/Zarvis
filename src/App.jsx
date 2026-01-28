import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Monitoring from "./Monitoring";
import TutorInfo from "./TutorInfo";
import Tasks from "./Tasks";
import Login from './Login'
import ServiceHistory from "./ServiceHistory";
import Clients from "./Clients";
import Notifications from './Notifications'
import SMS from './SMS'
import Workers from './Workers'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/monitoring" element={<Monitoring />} />
      <Route path="/upload" element={<TutorInfo />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/history" element={<ServiceHistory />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/notifications" element={<Notifications/>}/>
      <Route path="/sms" element={<SMS/>}/>
      <Route path="/staff" element={<Workers/>}/>

    </Routes>
  );
}

export default App;
