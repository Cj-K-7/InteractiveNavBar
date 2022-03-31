import { useRecoilState } from "recoil"
import { isExpand } from "../atoms"
import { Icon, Texts } from "./NavCommonComponents";
import { ReactComponent as SearchIcon } from "../resources/search_black_24dp.svg";
import styled from "styled-components";
import { useRef } from "react";

 const Search = styled.div`
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

function NavSearch() {
    const [isClicked, setIsClicked] = useRecoilState(isExpand);
    const input = useRef<HTMLInputElement>(null)
    const clickSearchIcon = ()=>{
      if(!isClicked){setIsClicked(true);
      setTimeout(()=>input.current?.focus(), 500);
      } else{
        input.current?.focus();
      }
    }
  return (
    <Search>
    <Icon>
      <SearchIcon onClick={clickSearchIcon} />
    </Icon>
    <Texts expand={isClicked}>
      <input ref={input} type="text" placeholder="Search..."></input>
    </Texts>
  </Search>
  )
}

export default NavSearch