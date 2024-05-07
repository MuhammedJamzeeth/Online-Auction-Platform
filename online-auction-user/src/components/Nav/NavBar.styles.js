import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${Colors.colorWhite};
  padding: 10px;
  position: sticky;
  top: 0px;
  z-index: 1000;
  /* border-radius: 15px; */
  height: 60px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDetails = styled.div`
  margin: 0 10px;
`;
export const Role = styled.span`
  font-size: 14px;
`;
export const UserName = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;
export const Image = styled.div`
  height: ${({ type }) => (type === "profile" ? "40px" : "50px")};
  width: ${({ type }) => (type === "profile" ? "40px" : "50px")};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: ${({ type }) => (type === "profile" ? "50%" : "10px")};
  }
`;
export const ProfileWrapper = styled.div`
  margin: 0 10px;

  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const MenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
export const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #333;
  min-width: 200px;
  // padding-top: 6;
  z-index: 1;
  a {
    color: #fff;
    padding: 12px 16px;
    display: block;
    text-decoration: none;
    border-bottom: 1px solid #555; /* Add a border bottom for each link */
  }
  a:hover {
    background-color: #b8fdff;
  }
  a:last-child {
    border-bottom: none; /* Remove border bottom from the last link */
  }
`;
export const Dropdown = styled.div`
  position: relative;
`;
