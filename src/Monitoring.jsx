import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./Monitoring.css";

const initialUsers = [
  {
    id: 1,
    name: "Sierra Ferguson",
    phone: "+998 (90) 436-46-15",
    rides: 132,
    finished: 8,
    home: "Buxoro, Furkat Street",
    work: "Tashkent, Uzbekistan",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "John Doe",
    phone: "+998 (91) 222-33-44",
    rides: 10,
    finished: 3,
    home: "Chilonzor",
    work: "Yunusobod",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Alex Smith",
    phone: "+998 (93) 555-44-33",
    rides: 50,
    finished: 20,
    home: "Sergeli",
    work: "Olmazor",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Kate Brown",
    phone: "+998 (97) 888-11-22",
    rides: 7,
    finished: 1,
    home: "Yashnobod",
    work: "Mirzo Ulugbek",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Tom Lee",
    phone: "+998 (90) 111-22-33",
    rides: 99,
    finished: 80,
    home: "Bektemir",
    work: "Shayxontohur",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 6,
    name: "Emma White",
    phone: "+998 (99) 777-66-55",
    rides: 12,
    finished: 5,
    home: "Uchtepa",
    work: "Yakkasaroy",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
];

const emptyUser = {
  name: "",
  phone: "",
  rides: "",
  finished: "",
  home: "",
  work: "",
  avatar: "https://i.pravatar.cc/40",
};

export default function Monitoring() {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [addingUser, setAddingUser] = useState(null);
  const [page, setPage] = useState(1);

  const USERS_PER_PAGE = 5;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const startIndex = (page - 1) * USERS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleSaveEdit = () => {
    setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
    setEditingUser(null);
  };

  const handleSaveAdd = () => {
    setUsers([...users, { ...addingUser, id: Date.now() }]);
    setAddingUser(null);
    setPage(Math.ceil((users.length + 1) / USERS_PER_PAGE)); 
  };

  return (
    <>
      <Sidebar />
      <Topbar />

      <main className="dashboard-page">
        <div className="monitoring-card">

          <div className="monitoring-header">
            <button className="add-btn" onClick={() => setAddingUser({ ...emptyUser })}>
              + Add user
            </button>
          </div>

          <table className="monitoring-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Rides</th>
                <th>Finished</th>
                <th>Home</th>
                <th>Work</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((u) => (
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
                  <td>{u.home}</td>
                  <td>{u.work}</td>
                  <td className="actions">
                    <button className="icon-btn edit" onClick={() => setEditingUser({ ...u })}>
                      ✏️
                    </button>
                    <button className="icon-btn delete" onClick={() => handleDelete(u.id)}>
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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

            <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
              ▶
            </button>
          </div>

        </div>
      </main>

      {editingUser && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Edit user</h3>
            <input value={editingUser.name} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} />
            <input value={editingUser.phone} onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })} />
            <input value={editingUser.rides} onChange={(e) => setEditingUser({ ...editingUser, rides: e.target.value })} />
            <input value={editingUser.finished} onChange={(e) => setEditingUser({ ...editingUser, finished: e.target.value })} />
            <input value={editingUser.home} onChange={(e) => setEditingUser({ ...editingUser, home: e.target.value })} />
            <input value={editingUser.work} onChange={(e) => setEditingUser({ ...editingUser, work: e.target.value })} />
            <div className="modal-actions">
              <button onClick={() => setEditingUser(null)}>Cancel</button>
              <button className="save" onClick={handleSaveEdit}>Save</button>
            </div>
          </div>
        </div>
      )}

      {addingUser && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Add user</h3>
            <input placeholder="Name" onChange={(e) => setAddingUser({ ...addingUser, name: e.target.value })} />
            <input placeholder="Phone" onChange={(e) => setAddingUser({ ...addingUser, phone: e.target.value })} />
            <input placeholder="Rides" onChange={(e) => setAddingUser({ ...addingUser, rides: e.target.value })} />
            <input placeholder="Finished" onChange={(e) => setAddingUser({ ...addingUser, finished: e.target.value })} />
            <input placeholder="Home" onChange={(e) => setAddingUser({ ...addingUser, home: e.target.value })} />
            <input placeholder="Work" onChange={(e) => setAddingUser({ ...addingUser, work: e.target.value })} />
            <div className="modal-actions">
              <button onClick={() => setAddingUser(null)}>Cancel</button>
              <button className="save" onClick={handleSaveAdd}>Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
