import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Cards = ({ details }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();

  const handleStartBidClick = () => {
    // Navigate to the bid page
    navigate("/bid");
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="url_to_your_image" alt="avatar" />{" "}
          </Avatar>
        }
        action={
          <>
            <IconButton
              ref={anchorRef}
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              aria-label="settings"
            >
              <MoreVertIcon />
            </IconButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
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
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </>
        }
        title={details.userName}
        subheader={details.startTime}
      />
      <CardMedia
        component="img"
        height="194"
        image={`data:image/jpeg;base64,${details.image}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {details.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          onClick={handleStartBidClick} // Handle click event for navigating to the bid page
          sx={{
            background: "#5ce1e6",
            "&:hover": {
              background: "#069296", // Change the background color on hover
            },
          }}
        >
          Start Bid
        </Button>
        {/* <Typography
          sx={{
            paddingLeft: 2,
          }}
          variant="body2"
          color="text.primary"
        >
          if you like.
        </Typography>
        <Typography
          sx={{
            paddingLeft: 2,
          }}
          variant="body2"
          color="text.primary"
        >
          if you like.
        </Typography> */}
        <CardHeader
          sx={{
            fontSize: 1,
          }}
          title={details.name}
          subheader={details.start_time}
        ></CardHeader>
      </CardActions>
    </Card>
  );
};

export default Cards;
