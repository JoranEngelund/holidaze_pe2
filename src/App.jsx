import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Venue from "./components/pages/Venue";
import Profile from "./components/pages/Profile";
import CreateVenue from "./components/pages/CreateVenue";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/venue/:id" element={<Venue />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/profile/:name/reservations" element />
        <Route
          path="/profile/:name/venue-manager-settings"
          element={<CreateVenue />}
        />
        <Route path="/profile/settings" element />
        <Route path="/profile/venue-settings" element />
      </Route>
    </Routes>
  );
};

export default App;
