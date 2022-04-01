import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDark } from "../../atoms";

const ToggleButton = styled.input<{ darkeMode: boolean }>`
    position: relative;
  width: 36px;
  height: 20px;
  -webkit-appearance: none;
  outline: none;
  border-radius: 10px;
  background-color: #b9b9b9;

  &:checked {
      background-color: white;
  }
  &::before {
    content: "";
    position: absolute;
    top: 4px;
    ${props=> props.darkeMode ? 'left : 20px;' : 'left : 4px;'}
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props=> props.darkeMode ? 'black' : 'white'};
    transition: .4s;
  }
`;

function DarkModeToggle() {
  const [darkModeOn, setDarkModeOn] = useRecoilState(isDark);
  return (
    <>
      <ToggleButton
        darkeMode={darkModeOn}
        type="checkbox"
        onChange={() => setDarkModeOn((pre) => !pre)}
        checked={darkModeOn}
      />
    </>
  );
}

export default DarkModeToggle;
