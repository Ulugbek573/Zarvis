import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./TutorInfo.css";

export default function TutorInfo() {
  const [tutor, setTutor] = useState({
    fullName: "Farhod Dadajonov",
    fatherName: "Ro'ziboyev",
    birthDate: "15.08.1998",
    phone: "(99) 436-46-15",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(tutor);

  const handleSave = () => {
    setTutor(editData);
    setIsEditing(false);
  };

  return (
    <>
      <Sidebar />
      <Topbar />

      <main className="dashboard-page tutor-page">
        <div className="tutor-header">
          <h2>Tutor info</h2>
          <button
            className="edit-btn"
            onClick={() => {
              setEditData(tutor);
              setIsEditing(true);
            }}
          >
            ✏️ Edit Tutor
          </button>
        </div>

        <div className="tutor-card">
          <div className="tutor-avatar">
            <div className="avatar-circle">👤</div>
          </div>

          <div className="tutor-info">
            <div className="info-row">
              <span>Full Name</span>
              <p>{tutor.fullName}</p>
            </div>

            <div className="info-row">
              <span>Father Name</span>
              <p>{tutor.fatherName}</p>
            </div>

            <div className="info-row">
              <span>Birth Date</span>
              <p>{tutor.birthDate}</p>
            </div>

            <div className="info-row">
              <span>Phone Number</span>
              <p>{tutor.phone}</p>
            </div>

            <div className="info-row">
              <span>Send Message</span>
              <p className="send-msg">✉️</p>
            </div>
          </div>
        </div>
      </main>

      {isEditing && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Edit Tutor</h3>

            <input
              placeholder="Full Name"
              value={editData.fullName}
              onChange={(e) =>
                setEditData({ ...editData, fullName: e.target.value })
              }
            />

            <input
              placeholder="Father Name"
              value={editData.fatherName}
              onChange={(e) =>
                setEditData({ ...editData, fatherName: e.target.value })
              }
            />

            <input
              placeholder="Birth Date"
              value={editData.birthDate}
              onChange={(e) =>
                setEditData({ ...editData, birthDate: e.target.value })
              }
            />

            <input
              placeholder="Phone Number"
              value={editData.phone}
              onChange={(e) =>
                setEditData({ ...editData, phone: e.target.value })
              }
            />

            <div className="modal-actions">
              <button onClick={() => setIsEditing(false)}>Cancel</button>
              <button className="save" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
