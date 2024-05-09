import React, { useState, useEffect } from "react";
import {
  Email,
  ProfileContainer,
  UserDetails,
  UserName,
} from "./Profile.styles";
import {
  Avatar,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";
import { currentUser } from "../../selectors/user.selector";
import useLogOut from "../../hooks/user.logout";

const parseJWT = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    return null;
  }
};

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [decodedJwt, setDecodedJwt] = useState("");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { LogOut } = useLogOut();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    LogOut();

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  useEffect(() => {
    if (user) {
      const decodedToken = parseJWT(user.access_token);
      setDecodedJwt(decodedToken);
      console.log(decodedToken);
    }
  }, []);

  return (
    <div>
      <ProfileContainer
        ref={anchorRef}
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        aria-label="settings"
      >
        <Avatar sx={{ width: 35, height: 35 }} src={user?.avatar} />
        <UserDetails>
          {user && <UserName>{decodedJwt.sub}</UserName>}
          {user && <Email>{user.email} 11</Email>}
        </UserDetails>
      </ProfileContainer>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Profile;
