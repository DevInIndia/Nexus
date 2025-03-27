"use client"; // Required for fetching in Next.js App Router
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users") // Fetch from Express server
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user._id}>--{user.name} of age {user.age} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
