import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import ReviewsIcon from "@mui/icons-material/Reviews";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import SaloonLogo from "../../assets/logo.png";
import useLogOut from "../../hooks/user.logout";
import Profile from "../Profile/Profile";
import InventoryIcon from "@mui/icons-material/Inventory";

import { commonNames } from "../../common/common.names";
import {
  Container,
  LogOutWrapper,
  LogoContainer,
  ProfileWrapper,
  SideBarItemWrapper,
  SidebarBottomWrapper,
} from "./SideBar.styles";
import SideBarItems from "./SideBarItems";
const SideBar = ({ isOpen, toggleSideBar }) => {
  const { LogOut } = useLogOut();

  return (
    <Container isOpen={isOpen}>
      <LogoContainer>
        <Avatar sx={{ width: 35, height: 35 }} src={SaloonLogo} />
        <h3>{commonNames.SALOON_NAME}</h3>
      </LogoContainer>

      <SideBarItemWrapper className="">
        <SideBarItems
          to={"/"}
          Icon={<DashboardOutlinedIcon />}
          title={"DashBoard"}
        />
        <SideBarItems
          to={"category"}
          title={"Category"}
          Icon={<CalendarMonthIcon />}
        />
        <SideBarItems to={"orders"} title={"Orders"} Icon={<AddCircleIcon />} />
        <SideBarItems
          to={"products"}
          title={"Products"}
          Icon={<InventoryIcon />}
        />
        <SideBarItems
          to={"customers"}
          title={"Customers"}
          Icon={<AccountCircleOutlinedIcon />}
        />
        <SideBarItems
          to={"settings"}
          title={"Profile settings"}
          Icon={<SettingsIcon />}
        />
      </SideBarItemWrapper>
      <SidebarBottomWrapper>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
        <LogOutWrapper>
          <IconButton onClick={LogOut}>
            <LogoutIcon sx={{ fontSize: 26, color: "#344154" }} />
          </IconButton>
        </LogOutWrapper>
      </SidebarBottomWrapper>
    </Container>
  );
};

export default SideBar;
