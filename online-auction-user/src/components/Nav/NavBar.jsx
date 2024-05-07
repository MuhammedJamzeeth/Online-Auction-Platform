import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.png";
import DropdownMenu from "../Dropdown/DropdownMenu";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "../Profile/Profile";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import {
  Image,
  MenuWrapper,
  NavContainer,
  NavLeft,
  NavRight,
  ProfileWrapper,
  DropdownContent,
  Dropdown,
  // Role,
  // UserDetails,
  // UserName,
} from "./NavBar.styles";
const NavBar = ({ toggleSideBar }) => {
  const categories = [
    { label: "Electronics", link: "#" },
    { label: "Clothing", link: "#" },
    { label: "Books", link: "#" },
    { label: "Toys", link: "#" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavContainer>
      <MenuWrapper onClick={toggleSideBar}>
        <IconButton>
          <MenuIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </MenuWrapper>

      <NavLeft>
        <Image>
          <img src={Logo} alt="logo"></img>
        </Image>
        <Dropdown>
          <h1
            onClick={toggleDropdown}
            style={{
              paddingLeft: 20,
              cursor: "pointer",
            }}
          >
            Category
          </h1>
          <DropdownContent isOpen={isOpen}>
            {categories.map((option, index) => (
              <a key={index} href={option.link}>
                {option.label}
              </a>
            ))}
          </DropdownContent>
        </Dropdown>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <h1
            style={{
              paddingLeft: 10,
            }}
          >
            About us
          </h1>
        </Link>
        <h1
          to={"contact"}
          style={{
            paddingLeft: 10,
          }}
        >
          Contact us
        </h1>
      </NavLeft>
      <NavRight>
        {/* <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton> */}
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <h1
            style={{
              paddingLeft: 10,
            }}
          >
            Login
          </h1>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <h1
            style={{
              paddingLeft: 10,
            }}
          >
            Register
          </h1>
        </Link>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
      </NavRight>
    </NavContainer>
  );
};

export default NavBar;
