"use client"; // Required for fetching in Next.js App Router
import { useEffect, useState } from "react";
import Dashboard from "./components/(dashboard)/dashboard";
export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users") // Fetch from Express server
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
        <Dashboard />
      
  );
}
