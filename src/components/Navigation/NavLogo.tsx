import { Logo, NavTitle, Texts } from "./NavCommonStyles";
import IMLogo from "../../resources/IMx512.png";
import { useRecoilValue } from "recoil";
import { isExpand } from "../../atoms";

function NavLogo() {
  const isExpanded = useRecoilValue(isExpand);
  return (
    <NavTitle>
      <Logo src={IMLogo} />
      <Texts expand={isExpanded}>
        <h2>I M Fine SD Team</h2>
        <h3>Web Developer</h3>
      </Texts>
    </NavTitle>
  );
}

export default NavLogo;
