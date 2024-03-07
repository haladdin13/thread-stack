import React, { useEffect, useState } from "react";
import { Switch, Route, Routes } from "react-router-dom";


import Dashboard from "./Dashboard";
import Category from "./Category";
import User from "./User";
import CurrentCategory from "./category_components/CurrentCategory";
// import GroupThread from "./components/GroupThread";
// import Thread from "./components/Thread";
// import Post from "./components/Post";
// import Favorite from "./components/Favorite";
import Navbar from "./Navbar";



function App() {


  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/categories' element={<Category />} />
          <Route path="/categories/:id" element={<CurrentCategory />} />
          <Route path='/user' element={<User />} />

        </Routes>
      </div>
    </>
  )

}

export default App;
