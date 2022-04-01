import { ReactComponent as DashboardIcon } from "../../resources/home_black_24dp.svg";
import { ReactComponent as ScheduleIcon } from "../../resources/event_black_24dp.svg";
import { ReactComponent as AnalyticIcon } from "../../resources/analytics_black_24dp.svg";
import { ReactComponent as LikeIcon } from "../../resources/favorite_border_black_24dp.svg";
import { ReactComponent as UserIcon } from "../../resources/face_black_24dp.svg";
import { ActiveMenu, Icon, RouteMenu, Texts } from "./NavCommonStyles";
import { Link, useMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isExpand } from "../../atoms";

function NavRouteMenus() {
  const isExpanded = useRecoilValue(isExpand);
  const home = useMatch("/");
  const schedule = useMatch("/schedule");
  const anlytics = useMatch("/anlytics");
  const like = useMatch("/like");
  const user = useMatch("/user");

  return (
    <>
      <RouteMenu active={home ? true : false}>
        <Link to="/">
          <Icon>
            <DashboardIcon />
          </Icon>
          <Texts expand={isExpanded}>Dashboard</Texts>
        </Link>
        {home ? <ActiveMenu layoutId="active" /> : null}
      </RouteMenu>
      <RouteMenu active={schedule ? true : false}>
        <Link to="/schedule">
          <Icon>
            <ScheduleIcon />
          </Icon>
          <Texts expand={isExpanded}>Schedule</Texts>
        </Link>
        {schedule ? <ActiveMenu layoutId="active" /> : null}
      </RouteMenu>
      <RouteMenu active={anlytics ? true : false}>
        <Link to="/anlytics">
          <Icon>
            <AnalyticIcon />
          </Icon>
          <Texts expand={isExpanded}>Analytics</Texts>
        </Link>
        {anlytics ? <ActiveMenu layoutId="active" /> : null}
      </RouteMenu>
      <RouteMenu active={like ? true : false}>
        <Link to="/like">
          <Icon>
            <LikeIcon />
          </Icon>
          <Texts expand={isExpanded}>Likes</Texts>
        </Link>
        {like ? <ActiveMenu layoutId="active" /> : null}
      </RouteMenu>
      <RouteMenu active={user ? true : false}>
        <Link to="/user">
          <Icon>
            <UserIcon />
          </Icon>
          <Texts expand={isExpanded}>User</Texts>
        </Link>
        {user ? <ActiveMenu layoutId="active" /> : null}
      </RouteMenu>
    </>
  );
}

export default NavRouteMenus;
