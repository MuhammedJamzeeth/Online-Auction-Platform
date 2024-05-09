import { IconButton } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom"; // Import Link from React Router

import {
  NavContainer,
  // Role,
  // UserDetails,
  // UserName,
} from "./NavBar.styles";
const FootBar = ({ toggleSideBar }) => {
  return (
    <NavContainer>
      <div
        style={{
          textAlign: "center",
        }}
      >
        Group 9
      </div>
    </NavContainer>
  );
};

export default FootBar;
