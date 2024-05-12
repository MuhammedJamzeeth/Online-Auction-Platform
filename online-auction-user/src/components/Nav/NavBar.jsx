import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import DropdownMenu from "../Dropdown/DropdownMenu";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "../Profile/Profile";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import useProduct from "../../hooks/useProduct";



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
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const { getCategory } = useProduct();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catData = await getCategory();
        setCategories(catData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

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

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1
            style={{
              paddingLeft: 20,
            }}
          >
            Home
          </h1>
        </Link>
        <Dropdown>
          <h1
            onClick={toggleDropdown}
            style={{
              paddingLeft: 10,
              cursor: "pointer",
            }}
          >
            Category
          </h1>
          <DropdownContent isOpen={isOpen}>
            {categories.map((option, index) => (
              <p key={index}>{option.name}</p>
            ))}
          </DropdownContent>
        </Dropdown>
        {/* <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
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
        </h1> */}
      </NavLeft>
      <NavRight>
        {/* <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton> */}
        {user ? (
          <>
          <ProfileWrapper>
            
           
            <Profile />

          </ProfileWrapper>
            
           <Link
              to="/addProducts"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1
                style={{
                  paddingLeft: 10,
                }}
              >
                AddProducts
              </h1>
            </Link>
            </>
          
        ) : (
          <>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1
                style={{
                  paddingLeft: 10,
                }}
              >
                Login
              </h1>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1
                style={{
                  paddingLeft: 10,
                }}
              >
                Register
              </h1>
            </Link>
          </>
        )}
      </NavRight>
    </NavContainer>
  );
};

export default NavBar;
