import { Route, Routes } from "react-router";
import Booking from "./component/Booking/Booking";
import Destination from "./component/Destination/Destination";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />} />
        <Route path='booking' element={<Booking />} />
        <Route path='login' element={<Login />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", color: 'red' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

      </Routes>
    </div >
  );
}

export default App;
