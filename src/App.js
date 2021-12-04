import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import Booking from "./component/Booking/Booking";
import Destination from "./component/Destination/Destination";
// import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import NotFound from './component/NotFound/NotFound';
import RequireAuth from "./component/RequireAuth/RequireAuth";

export const MyContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    emails: '',
    photo: '',
    password: '',
  })
  return (
    <MyContext.Provider value={[loggedInUser, setLoggedInUser,]}>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='booking' element={<Booking />} />
        <Route path='booking/:id' element={<Booking />} />
        <Route path="destination"
          element={
            <RequireAuth>
              <Destination />
            </RequireAuth>
          }
        />
        <Route path='destination/:desId' element={<Destination />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MyContext.Provider >
  );
}

export default App;
