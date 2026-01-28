import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Clients.css";

const initialClients = [
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
  {
    id: 3,
    name: "Alex Brown",
    phone: "+998 (93) 555-44-33",
    rides: 100,
    finished: 12,
    home: "Sergeli",
    work: "Olmazor",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Tom Lee",
    phone: "+998 (90) 111-22-33",
    rides: 55,
    finished: 20,
    home: "Uchtepa",
    work: "Shayxontohur",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Emma White",
    phone: "+998 (99) 777-66-55",
    rides: 7,
    finished: 2,
    home: "Yashnobod",
    work: "Mirzo Ulugbek",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 6,
    name: "Jack Black",
    phone: "+998 (97) 888-99-00",
    rides: 200,
    finished: 150,
    home: "Bektemir",
    work: "Yakkasaroy",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
];

const emptyClient = {
  name: "",
  phone: "",
  rides: "",
  finished: "",
  home: "",
  work: "",
  avatar: "https://i.pravatar.cc/40",
};

export default function Clients() {
  const [clients, setClients] = useState(initialClients);
  const [search, setSearch] = useState("");
  const [sortByRides, setSortByRides] = useState(false);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);

  const [page, setPage] = useState(1);
  const PER_PAGE = 5;


  const processed = clients
    .filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sortByRides ? b.rides - a.rides : 0));

  const totalPages = Math.ceil(processed.length / PER_PAGE);
  const current = processed.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  const handleDelete = (id) => {
    if (window.confirm("Mijozni o‘chirmoqchimisiz?")) {
      setClients(clients.filter((c) => c.id !== id));
    }
  };


  const handleSaveEdit = () => {
    setClients(
      clients.map((c) => (c.id === editing.id ? editing : c))
    );
    setEditing(null);
  };

  const handleSaveAdd = (data) => {
    setClients([...clients, { ...data, id: Date.now() }]);
    setAdding(false);
    setPage(Math.ceil((clients.length + 1) / PER_PAGE));
  };

  return (
    <>
      <Sidebar />
      <Topbar />

      <main className="dashboard-page clients-page">
        <div className="clients-header">
          <div>
            <h2>Mijozlar</h2>
            <span className="count">{clients.length} Users</span>
          </div>

          <div className="clients-actions">
            <div className="search-box">
              <input
                placeholder="Search by Name"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
              🔍
            </div>

            <button className="create-btn" onClick={() => setAdding(true)}>
              ➕ Mijoz kiritish
            </button>

            <button
              className="filter-btn"
              onClick={() => setSortByRides(!sortByRides)}
            >
              ⚙️ Filters
            </button>
          </div>
        </div>

        <div className="clients-card">
          <table className="clients-table">
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
              {current.map((c) => (
                <tr key={c.id}>
                  <td>
                    <div className="user-cell">
                      <img src={c.avatar} alt="" />
                      <div>
                        <div className="user-name">{c.name}</div>
                        <div className="user-phone">{c.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td>{c.rides}</td>
                  <td>{c.finished}</td>
                  <td className="location">{c.home}</td>
                  <td className="location">{c.work}</td>
                  <td className="actions">
                    <button
                      className="icon-btn edit"
                      onClick={() => setEditing({ ...c })}
                    >
                      ✏️
                    </button>
                    <button
                      className="icon-btn delete"
                      onClick={() => handleDelete(c.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <span>
              {(page - 1) * PER_PAGE + 1}–
              {Math.min(page * PER_PAGE, processed.length)} of{" "}
              {processed.length}
            </span>

            <div className="pagination">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                ◀
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={page === i + 1 ? "active" : ""}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </main>

      {adding && (
        <ClientModal
          title="Mijoz qo‘shish"
          data={emptyClient}
          onClose={() => setAdding(false)}
          onSave={handleSaveAdd}
        />
      )}

      {editing && (
        <ClientModal
          title="Mijozni tahrirlash"
          data={editing}
          onClose={() => setEditing(null)}
          onSave={handleSaveEdit}
        />
      )}
    </>
  );
}

function ClientModal({ title, data, onClose, onSave }) {
  const [local, setLocal] = useState(data);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{title}</h3>

        {["name", "phone", "rides", "finished", "home", "work"].map((f) => (
          <input
            key={f}
            placeholder={f}
            value={local[f]}
            onChange={(e) =>
              setLocal({ ...local, [f]: e.target.value })
            }
          />
        ))}

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button className="save" onClick={() => onSave(local)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
