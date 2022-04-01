import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isExpand } from "./atoms";
import Nav from "./components/Navigation/Nav";
import Analytics from "./routes/Analytics";
import Home from "./routes/Home";
import Like from "./routes/Like";
import Schedule from "./routes/Schedule";
import User from "./routes/User";

const ContentsDisplay = styled.div<{expand:boolean}>`
  position: fixed;
  width: ${props=> props.expand ?`calc(100vw - 470px)` : `calc(100vw - 270px)` };
  min-height: 370px;
  top: 50px;
  right: 50px;
  bottom: 50px;
  padding: 20px;
  background-color: ${props=>props.theme.MainBgColor};
  box-shadow: 0 0 6px 4px ${(props) => props.theme.NavShadow};
  border-radius: 16px;
  transition: width 0.4s;
`

function Router() {
  const isExpanded = useRecoilValue(isExpand);
  return (
    <BrowserRouter>
      <Nav />
      <ContentsDisplay expand={isExpanded}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/anlytics" element={<Analytics />} />
          <Route path="/like" element={<Like />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </ContentsDisplay>
    </BrowserRouter>
  );
}

export default Router;
