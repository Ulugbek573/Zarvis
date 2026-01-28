import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Tasks.css";

const initialTasks = [
  {
    id: 1,
    name: "Sierra Ferguson",
    phone: "+998 (90) 436-46-15",
    rides: 132,
    finished: 6,
    home: "Buxoro, Furkat Street",
    work: "Tashkent",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "John Smith",
    phone: "+998 (91) 222-33-44",
    rides: 10,
    finished: 3,
    home: "Chilonzor",
    work: "Yunusobod",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
];

const emptyTask = {
  name: "",
  phone: "",
  rides: "",
  finished: "",
  home: "",
  work: "",
  avatar: "https://i.pravatar.cc/40",
};

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);

  const filteredTasks = tasks.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("O‘chirishni xohlaysizmi?")) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  const handleSaveEdit = () => {
    setTasks(tasks.map((t) => (t.id === editing.id ? editing : t)));
    setEditing(null);
  };

  const handleSaveAdd = (data) => {
    setTasks([...tasks, { ...data, id: Date.now() }]);
    setAdding(false);
  };

  return (
    <>
      <Sidebar />
      <Topbar />

      <main className="dashboard-page tasks-page">
        <div className="tasks-header">
          <div>
            <h2>Topshiriqlar</h2>
            <span className="count">{tasks.length} Users</span>
          </div>

          <div className="tasks-actions">
            <div className="search-box">
              <input
                placeholder="Search by Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              🔍
            </div>

            <button className="create-btn" onClick={() => setAdding(true)}>
              ➕ Topshiriq yaratish
            </button>

            <button className="filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
              ⚙️ Filters
            </button>
          </div>
        </div>

        {filterOpen && (
          <div className="filter-box">
            <button onClick={() => setTasks([...tasks].sort((a, b) => b.rides - a.rides))}>
              🔽 Rides (desc)
            </button>
            <button onClick={() => setTasks([...tasks].sort((a, b) => a.name.localeCompare(b.name)))}>
              🔤 Name (A–Z)
            </button>
          </div>
        )}

        <div className="tasks-card">
          <table className="tasks-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Total rides</th>
                <th>Total finished</th>
                <th>Home</th>
                <th>Work</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filteredTasks.map((t) => (
                <tr key={t.id}>
                  <td>
                    <div className="user-cell">
                      <img src={t.avatar} alt="" />
                      <div>
                        <div className="user-name">{t.name}</div>
                        <div className="user-phone">{t.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td>{t.rides}</td>
                  <td>{t.finished}</td>
                  <td>{t.home}</td>
                  <td>{t.work}</td>
                  <td className="actions">
                    <button className="icon-btn edit" onClick={() => setEditing({ ...t })}>
                      ✏️
                    </button>
                    <button className="icon-btn delete" onClick={() => handleDelete(t.id)}>
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {adding && (
        <TaskModal
          title="Topshiriq yaratish"
          onClose={() => setAdding(false)}
          onSave={handleSaveAdd}
          data={emptyTask}
        />
      )}

      {editing && (
        <TaskModal
          title="Topshiriqni tahrirlash"
          onClose={() => setEditing(null)}
          onSave={handleSaveEdit}
          data={editing}
          setData={setEditing}
        />
      )}
    </>
  );
}

function TaskModal({ title, onClose, onSave, data, setData }) {
  const [localData, setLocalData] = useState(data);

  const save = () => {
    onSave(localData);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{title}</h3>

        {["name", "phone", "rides", "finished", "home", "work"].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={localData[field]}
            onChange={(e) =>
              setLocalData({ ...localData, [field]: e.target.value })
            }
          />
        ))}

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button className="save" onClick={save}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
