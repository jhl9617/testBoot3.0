// https://dev.to/franciscomendes10866/react-router-data-fetching-2ikh
// 예제 적용

import React from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import UserMangement, { usersLoader } from "./components/UserMangement";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./components/Home";
import RandomPostPage, { postLoader } from "./components/RandomPost";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/post/:postId"
        loader={postLoader}
        element={<RandomPostPage />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/user-management"
        element={<UserMangement />}
        loader={usersLoader}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
