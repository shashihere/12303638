import { useEffect, useState } from "react"; //importing hooks
import axios from "axios"; //importing the axios
//app function for frontend display
function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  useEffect(() => { //used in fetching the notifications when page load
    axios
      .get("http://localhost:5000/notifications")
      .then((res) => {
        setNotifications(res.data.notifications);
      });
  }, []);
const data =
  filter === "All" //used for filtering the notifications based on category
    ? notifications
    : notifications.filter((n) => (n.type || n.Type) === filter);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Notification System</h1>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Placement</option>
        <option>Result</option>
        <option>Event</option>
      </select>
      {data.map((n) => (
        <div
          key={n.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            borderRadius: "50px",
            background: n.isRead ? "#90ee90" : "#FFCCCB ",
            color: "black"
          }}
        >
          <h3>{n.type || n.Type}</h3>
          <p>{n.message || n.Message}</p>
          <small>{n.timestamp || n.Timestamp}</small>
          {(!n.isRead || !n.IsRead)}
        </div>
      ))}
    </div>
  );}
export default App;