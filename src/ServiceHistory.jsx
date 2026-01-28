import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./ServiceHistory.css";

const initialHistory = [
  {
    id: 1,
    name: "Sierra Ferguson",
    phone: "+998 (90) 436-46-15",
    rides: 132,
    finished: 6,
    home: "rn. Buxoro, Furkat Street, Tashkent",
    work: "rn. Buxoro, Furkat Street, Tashkent",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "John Smith",
    phone: "+998 (91) 222-33-44",
    rides: 10,
    finished: 3,
    home: "21 Hamidullo Oripov ko'chasi, Toshkent",
    work: "21 Hamidullo Oripov ko'chasi, Toshkent",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Alex Brown",
    phone: "+998 (93) 555-44-33",
    rides: 100,
    finished: 12,
    home: "76 Darxon Ariq, Tashkent",
    work: "76 Darxon Ariq, Tashkent",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

export default function ServiceHistory() {
  const [data, setData] = useState(initialHistory);
  const [search, setSearch] = useState("");
  const [sortByRides, setSortByRides] = useState(false);
  const [editing, setEditing] = useState(null);

  const filteredData = data
    .filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortByRides ? b.rides - a.rides : 0
    );

  const handleDelete = (id) => {
    if (window.confirm("Rostdan o‘chirmoqchimisiz?")) {
      setData(data.filter((u) => u.id !== id));
    }
  };

  const handleSaveEdit = () => {
    setData(data.map((u) => (u.id === editing.id ? editing : u)));
    setEditing(null);
  };

  return (
    <>
      <Sidebar />
      <Topbar />

      <main className="dashboard-page history-page">
        <div className="history-header">
          <div>
            <h2>Xizmatlar tarixi</h2>
            <span className="count">{data.length} Users</span>
          </div>

          <div className="history-actions">
            <div className="search-box">
              <input
                placeholder="Search by Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              🔍
            </div>

            <button
              className="filter-btn"
              onClick={() => setSortByRides(!sortByRides)}
            >
              ⚙️ Filters
            </button>
          </div>
        </div>

        <div className="history-card">
          <table className="history-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Total rides</th>
                <th>Total finished</th>
                <th>Home Location</th>
                <th>Work Location</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="user-cell">
                      <img src={u.avatar} alt="" />
                      <div>
                        <div className="user-name">{u.name}</div>
                        <div className="user-phone">{u.phone}</div>
                      </div>
                    </div>
                  </td>

                  <td>{u.rides}</td>
                  <td>{u.finished}</td>
                  <td className="location">{u.home}</td>
                  <td className="location">{u.work}</td>

                  <td className="actions">
                    <button
                      className="icon-btn edit"
                      onClick={() => setEditing({ ...u })}
                    >
                      ✏️
                    </button>
                    <button
                      className="icon-btn delete"
                      onClick={() => handleDelete(u.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <span>1–{filteredData.length} of items</span>
            <div className="pagination">
              <button>{"<"}</button>
              <button className="active">1</button>
              <button>2</button>
              <button>{">"}</button>
            </div>
          </div>
        </div>
      </main>

      {editing && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Edit service</h3>

            <input
              value={editing.name}
              onChange={(e) =>
                setEditing({ ...editing, name: e.target.value })
              }
            />
            <input
              value={editing.phone}
              onChange={(e) =>
                setEditing({ ...editing, phone: e.target.value })
              }
            />
            <input
              value={editing.rides}
              onChange={(e) =>
                setEditing({ ...editing, rides: e.target.value })
              }
            />
            <input
              value={editing.finished}
              onChange={(e) =>
                setEditing({ ...editing, finished: e.target.value })
              }
            />
            <input
              value={editing.home}
              onChange={(e) =>
                setEditing({ ...editing, home: e.target.value })
              }
            />
            <input
              value={editing.work}
              onChange={(e) =>
                setEditing({ ...editing, work: e.target.value })
              }
            />

            <div className="modal-actions">
              <button onClick={() => setEditing(null)}>Cancel</button>
              <button className="save" onClick={handleSaveEdit}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
