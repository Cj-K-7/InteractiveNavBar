import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isExpand } from "../../atoms";
import DarkModeToggle from "../Buttons/DarkModeToggle";
import { Icon, Texts } from "./NavCommonStyles";
import { ReactComponent as DarkIcon } from "../../resources/dark_mode_black_24dp.svg";
import { ReactComponent as LogOutIcon } from "../../resources/logout_black_24dp.svg";

const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0px;
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

const DarKMenu = styled.div<{ expand: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
  padding-right: 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.SearchBgColor};
  & span {
    max-height: 24px; //SVG size 로 움직여짐
    display: flex;
    align-items: center;
  }
  & span:first-child {
    width: ${(props) => (props.expand ? "fit-content" : "0")};
    opacity: ${(props) => (props.expand ? "1" : "0")};
    visibility: ${(props) => (props.expand ? "visible" : "hidden")};
    transition: width .5s;
    transition: opacity .5s;
    transition: visibility .5s;
  }
`;

function NavFooter() {
  const isExpanded = useRecoilValue(isExpand);
  return (
    <>
      <FooterMenu>
        <Icon>
          <LogOutIcon />
        </Icon>
        <Texts expand={isExpanded}>Logout</Texts>
      </FooterMenu>
      <DarKMenu expand={isExpanded}>
        <span>
          <Icon>
            <DarkIcon />
          </Icon>
          <Texts expand={isExpanded}>Dark Mode</Texts>
        </span>
        <span>
          <DarkModeToggle />
        </span>
      </DarKMenu>
    </>
  );
}

export default NavFooter;
