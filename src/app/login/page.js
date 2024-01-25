"use client";

import { useEffect, useState } from "react";
import "./example.css";

export default function Login() {
  const [userList, setUserList] = useState();

  useEffect(() => {
    const myFetch = async () => {
      const result = await fetch("/api/users", { method: "get" });
      const users = await result.json();
      setUserList(users);
    };

    myFetch();
  }, []);

  if (!userList) {
    return <div>bitte warten</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login Page (incl. example on how to fetch backend data)</h1>
      <button
        onClick={async () => {
          const result = await fetch("/api/users", { method: "get" });
          const users = await result.json();
          setUserList(users);
        }}
      >
        Click to fetch users manually and set them to the component state!
      </button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {userList.map((u) => (
          <div key={`user-${u.id}`}>{u.name}</div>
        ))}
      </div>
    </main>
  );
}
