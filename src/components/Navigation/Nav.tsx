import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isExpand } from "../../atoms";
import NavRouteMenus from "./NavRouteMenus";
import NavExpandBtn from "../Buttons/NavExpandBtn";
import NavFooter from "./NavFooter";
import { useEffect, useRef, useState } from "react";
import NavSearch from "./NavSearch";
import NavLogo from "./NavLogo";

const Container = styled.div<{ expand: boolean }>`
  position: fixed;
  width: ${(props) => (props.expand ? "240px" : "45px")};
  min-height: 370px;
  top: 50px;
  left: 50px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.NavBgColor};
  box-shadow: 0 0 6px 4px ${(props) => props.theme.NavShadow};
  transition: width 0.4s;
  font-size: 14px;
  font-weight: 500;
  svg {
    fill: ${(props) => props.theme.NavTextColor};
  }
  @media (max-width : 500px) {
    left: -65px;
    transform:  ${props => props.expand ? "translateX(70px)" : "translateX(0)"};
  }
`;

const Top = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Mid = styled.div<{ overFlow: boolean }>`
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const Bottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 110px;
  width: 100%;
  padding-top: 10px;
`;

const ScrollUp = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    color : ${props=>props.theme.activeColor};
    font-size : 16px;
    cursor: pointer;
`;
const ScrollDown = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    color : ${props=>props.theme.activeColor};
    font-size : 16px;
    cursor: pointer;
`;

function Nav() {
  const isExpanded = useRecoilValue(isExpand);
  const [overFlow, setOverFlow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isOverflow = () => {
    if (ref.current) {
      if (ref.current.scrollHeight > ref.current.clientHeight) {
        setOverFlow(true);
        return;
      }
    }
    setOverFlow(false);
  };

  const onUpClick =() =>{
    ref.current?.scrollBy({top: -56, behavior: "smooth"});
  }

  const onDownClick =() =>{
    ref.current?.scrollBy({top: +56, behavior: "smooth"});
  }
  useEffect(() => {
    window.addEventListener("resize", isOverflow);
    return () => {
      window.addEventListener("resize", isOverflow);
    };
  }, []);
  return (
    <Container expand={isExpanded}>
      <NavExpandBtn />
      <Top>
        <NavLogo />
        <NavSearch />
      </Top>
      {overFlow ? <ScrollUp onClick={onUpClick}>▲</ScrollUp> : null}
      <Mid ref={ref} overFlow={overFlow}>
        <NavRouteMenus />
      </Mid>
      {overFlow ? <ScrollDown onClick={onDownClick}>▼</ScrollDown> : null}
      <Bottom>
        <NavFooter />
      </Bottom>
    </Container>
  );
}

export default Nav;
