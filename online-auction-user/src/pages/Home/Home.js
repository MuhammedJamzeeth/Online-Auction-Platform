import React from "react";
import NavBar from "../../components/Nav/NavBar";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Container, EachSlideEffect } from "./Home.style";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Cards from "../../components/Card/Card";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FootBar from "../../components/Footer/NavBar";
import AddProducts from "../AddProducts/AddProducts";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Slide duration={3000} indicators={true}>
          <EachSlideEffect style={{ backgroundImage: `url(${images[0]})` }}>
            <span>Slide 1</span>
          </EachSlideEffect>
          <EachSlideEffect style={{ backgroundImage: `url(${images[1]})` }}>
            <span>Slide 2</span>
          </EachSlideEffect>
          <EachSlideEffect style={{ backgroundImage: `url(${images[2]})` }}>
            <span>Slide 3</span>
          </EachSlideEffect>
        </Slide>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter product name"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 20,
          }}
        >
          <Cards></Cards>
          <Cards></Cards>

          <Cards></Cards>

          <Cards></Cards>
        </div>
      </Container>

      {/* < AddProducts />  */}
       
      <FootBar></FootBar>
    </>
  );
};

export default Home;
