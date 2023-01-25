import Login from "./Login";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CourseList from "./CourseList";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div >
      <NavBar user={user} setUser={setUser}/>
      <CourseList/>
    </div>
  );
}

export default App;

