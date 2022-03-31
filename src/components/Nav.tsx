import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isExpand } from "../atoms";
import NavRouteMenus from "./NavRouteMenus";
import NavExpandBtn from "./NavExpandBtn";
import NavFooter from "./NavFooter";
import NavSearch from "./NavSearch";
import NavHeader from "./NavHeader";

const Container = styled.div<{ expand: boolean }>`
  position: fixed;
  top: 50px;
  left: 50px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => (props.expand ? "240px" : "45px")};
  padding: 24px 20px;
  border-radius: 16px;
  box-shadow: 0 0 6px 2px ${(props) => props.theme.ModalShadow};
  transition: width 0.4s;
  font-size: 13px;
  font-weight: 600;
  svg {
    fill: ${(props) => props.theme.ModalTextColor};
  }
`;
const Top = styled.div``;
const Bottom = styled.div``;

function Nav() {
  const isClicked = useRecoilValue(isExpand);

  return (
    <Container expand={isClicked}>
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
