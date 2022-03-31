import { ReactComponent as DashboardIcon } from "../resources/home_black_24dp.svg";
import { ReactComponent as ScheduleIcon } from "../resources/event_black_24dp.svg";
import { ReactComponent as AnalyticIcon } from "../resources/analytics_black_24dp.svg";
import { ReactComponent as LikeIcon } from "../resources/favorite_border_black_24dp.svg";
import { ReactComponent as UserIcon } from "../resources/face_black_24dp.svg";
import { Icon, Texts } from "./NavCommonComponents";
import { Link, useMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isExpand } from "../atoms";
import styled from "styled-components";
import { motion } from "framer-motion";

const Menus = styled.div`
  display: flex;
  flex-direction: column;
`;
const Menu = styled.div<{ active: boolean }>`
  position: relative;
  padding: 16px 0px;
  & a {
    display: flex;
    align-items: center;
    transition: color 0.3s 0.2s;
    color: ${(props) =>
      props.active ? props.theme.hoverColor : props.theme.NavTextColor};
  }
  & span svg{
    fill: ${(props) =>
      props.active ? props.theme.hoverColor : props.theme.NavTextColor};
    transition: fill 0.3s 0.2s;
  }
`;

const ActiveMenu = styled(motion.div)`
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  height: 42px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.activeColor};
  z-index: -1;
`;

function NavRouteMenus() {
  const isClicked = useRecoilValue(isExpand);
  const home = useMatch("/");
  const schedule = useMatch("/schedule");
  const anlytics = useMatch("/anlytics");
  const like = useMatch("/like");
  const user = useMatch("/user");

  return (
    <Menus>
      <Menu active={home ? true : false}>
        <Link to="/">
          <Icon>
            <DashboardIcon />
          </Icon>
          <Texts expand={isClicked}>Dashboard</Texts>
        </Link>
        {home ? <ActiveMenu layoutId="active" /> : null}
      </Menu>
      <Menu active={schedule ? true : false}>
        <Link to="/schedule">
          <Icon>
            <ScheduleIcon />
          </Icon>
          <Texts expand={isClicked}>Schedule</Texts>
        </Link>
        {schedule ? <ActiveMenu layoutId="active" /> : null}
      </Menu>
      <Menu active={anlytics ? true : false}>
        <Link to="/anlytics">
          <Icon>
            <AnalyticIcon />
          </Icon>
          <Texts expand={isClicked}>Analytics</Texts>
        </Link>
        {anlytics ? <ActiveMenu layoutId="active" /> : null}
      </Menu>
      <Menu active={like ? true : false}>
        <Link to="/like">
          <Icon>
            <LikeIcon />
          </Icon>
          <Texts expand={isClicked}>Likes</Texts>
        </Link>
        {like ? <ActiveMenu layoutId="active" /> : null}
      </Menu>
      <Menu active={user ? true : false}>
        <Link to="/user">
          <Icon>
            <UserIcon />
          </Icon>
          <Texts expand={isClicked}>User</Texts>
        </Link>
        {user ? <ActiveMenu layoutId="active" /> : null}
      </Menu>
    </Menus>
  );
}

export default NavRouteMenus;
