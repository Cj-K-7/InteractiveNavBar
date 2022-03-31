import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Analytics from "./routes/Analytics";
import Home from "./routes/Home";
import Like from "./routes/Like";
import Schedule from "./routes/Schedule";
import User from "./routes/User";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/anlytics" element={<Analytics />} />
        <Route path="/like" element={<Like />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
