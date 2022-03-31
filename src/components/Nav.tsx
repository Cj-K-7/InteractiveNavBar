import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isExpand } from "../atoms";
import NavRouteMenus from "./NavRouteMenus";
import NavExpandBtn from "./NavExpandBtn";
import NavFooter from "./NavFooter";
import NavSearch from "./NavSearch";
import NavHeader from "./NavHeader";
import { useEffect, useRef } from "react";

const Container = styled.div<{ expand: boolean }>`
  position: fixed;
  width: ${(props) => (props.expand ? "240px" : "45px")};
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
`;
const Top = styled.div``;
const Bottom = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -20px;
    left: -20px;
    height: 1px;
    background-color: ${(props) => props.theme.NavTextColor};
  }
`;

function Nav() {
  const isClicked = useRecoilValue(isExpand);
  const ref = useRef<HTMLDivElement>(null);
  const isOverFlow = () => {
    if (ref.current) {
      console.log(ref.current?.scrollHeight);
      console.log(ref.current?.clientHeight);
      return ref.current?.scrollHeight > ref.current?.clientHeight;
    }
    return false;
  };
  useEffect(()=>{
    isOverFlow();
  },[])
  return (
    <Container ref={ref} expand={isClicked}>
      <NavExpandBtn />
      <Top>
        <NavHeader />
        <NavSearch />
        <NavRouteMenus />
      </Top>
      <Bottom>
        <NavFooter />
      </Bottom>
    </Container>
  );
}

export default Nav;
