import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            홍길동
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<div>사용자를 선택하세요.</div>}
          exact={true}
        />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
