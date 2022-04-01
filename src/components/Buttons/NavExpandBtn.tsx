import { ReactComponent as ChevronIcon } from "../../resources/chevron_right_black_24dp.svg";
import { useRecoilState } from "recoil";
import { isExpand } from "../../atoms";
import styled from "styled-components";

const ExpandBtn = styled.div<{ expand: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 33px;
  right: -13px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.activeColor};
  & svg {
    ${(props) => (props.expand ? "transform: rotateZ(180deg);" : "")}
    transition: 0.5s;
  }
`;

function NavExpandBtn() {
  const [isClicked, setIsClicked] = useRecoilState(isExpand);
  return (
    <ExpandBtn onClick={() => setIsClicked((pre) => !pre)} expand={isClicked}>
      <ChevronIcon style={{ fill : 'white'}}/>
    </ExpandBtn>
  );
}

export default NavExpandBtn;
