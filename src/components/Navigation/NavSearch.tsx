import { useRef } from "react";
import { useRecoilState } from "recoil";
import { isExpand } from "../../atoms";
import { ReactComponent as SearchIcon } from "../../resources/search_black_24dp.svg";
import { Icon, Search, Texts } from "./NavCommonStyles";

function NavSearch() {
    const input = useRef<HTMLInputElement>(null);
    const [isExpanded, setIsExpanded] = useRecoilState(isExpand);
    const clickSearchIcon = () => {
      if (!isExpanded) {
        setIsExpanded(true);
        setTimeout(() => input.current?.focus(), 500);
      } else {
        input.current?.focus();
      }
    };
  return (
    <Search>
    <Icon>
      <SearchIcon onClick={clickSearchIcon} />
    </Icon>
    <Texts expand={isExpanded}>
      <input ref={input} type="text" placeholder="Search..."></input>
    </Texts>
  </Search>
  )
}

export default NavSearch