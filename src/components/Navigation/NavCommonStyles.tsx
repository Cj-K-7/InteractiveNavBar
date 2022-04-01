import { motion } from "framer-motion";
import styled from "styled-components";



export const Texts = styled.div<{ expand: boolean }>`
  margin-left: 10px;
  opacity: ${(props) => (props.expand ? "1" : "0")};
  visibility: ${(props) => (props.expand ? "visible" : "hidden")};
  transition: opacity 0.6s 0.3s;
  & h2 {
    font-size: 16px;
  }
  & h3 {
    font-size: 11px;
    font-weight: 500;
  }
`;

export const RouteMenu = styled.div<{ active: boolean }>`
  position: relative;
  padding: 16px 0px;
  & a {
    display: flex;
    align-items: center;
    transition: color 0.3s 0.2s;
    color: ${(props) =>
      props.active ? props.theme.hoverColor : props.theme.NavTextColor};
  }
  & span svg {
    fill: ${(props) =>
      props.active ? props.theme.hoverColor : props.theme.NavTextColor};
    transition: fill 0.3s 0.2s;
  }
`;

export const Search = styled.div`
display: flex;
align-items: center;
border-radius: 8px;
margin-bottom: 8px;
background-color: ${(props) => props.theme.SearchBgColor};
& input {
  width: 180px;
  padding: 14px 0px;
  border: none;
  background-color: inherit;
  color : ${props=> props.theme.textColor};
  font-weight: 600;
}
& input::placeholder {
  font-size: 13px;
  font-weight: 600;
}
& input:focus {
  outline: none;
}
`;

export const NavTitle = styled.div`
  max-height: 42px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1px;
  min-width: 42px;
`;

export const Logo = styled.img`
  width: 42px;
  border-radius: 8px;
`;

export const ActiveMenu = styled(motion.div)`
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  height: 42px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.activeColor};
  z-index: -1;
`;
