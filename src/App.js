import { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import Booking from "./component/Booking/Booking";
import Destination from "./component/Destination/Destination";
// import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import SignUp from "./component/Login/SignUp";
import NotFound from './component/NotFound/NotFound';
import RequireAuth from "./component/RequireAuth/RequireAuth";

export const MyContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [bookingInfo, setBookingInfo] = useState({});
  const [showArea, setShowArea] = useState(
    {
      id: 1,
      title: "Cox's Bazar",
      description: "Why Cox's Bazar is a Great Tourist Attraction Cox's Bazar Review. Cox's Bazar is famous for its long natural sandy sea beach. ... Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike.",
      img: "https://media.istockphoto.com/photos/coxs-bazar-in-its-glory-2-picture-id1262671962?k=20&m=1262671962&s=612x612&w=0&h=Vs9i3LQiTmgzLm8E5zURYoZg7Xa7BsogsW6PSESTcNY="
    }
  )
  return (

    <MyContext.Provider value={[showArea, setShowArea, loggedInUser, setLoggedInUser, bookingInfo, setBookingInfo]}>
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
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MyContext.Provider >
  );
}

export default App;
