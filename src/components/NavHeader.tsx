import { useRecoilValue } from 'recoil'
import { isExpand } from '../atoms'
import { Text } from './NavCommonComponents'
import IMLogo from "../resources/IMx512.png";
import styled from 'styled-components';

export const NavTitle = styled.div`
  max-height: 42px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Logo = styled.img`
  width: 42px;
  border-radius: 8px;
`;

function NavHeader() {
    const isClicked = useRecoilValue(isExpand);
  return (
    <NavTitle>
    <Logo src={IMLogo} />
    <Text expand={isClicked}>
      <h2>I M Fine SD Team</h2>
      <h3>Web Developer</h3>
    </Text>
  </NavTitle>
  )
}

export default NavHeader