import React, { useEffect, useState } from "react";
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
import useProduct from "../../hooks/useProduct";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";

const Home = () => {
  const { getProduct } = useProduct();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proData = await getProduct();
        setProducts(proData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const proData = await getProduct();
      const filteredProducts = proData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };
  
  const images = [s1, s2, s3];
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Slide duration={3000} indicators={true}>
          <EachSlideEffect style={{ backgroundImage: `url(${images[0]})` }}>
            {/* <span>Slide 1</span> */}
          </EachSlideEffect>
          <EachSlideEffect style={{ backgroundImage: `url(${images[1]})` }}>
            {/* <span>Slide 2</span> */}
          </EachSlideEffect>
          <EachSlideEffect style={{ backgroundImage: `url(${images[2]})` }}>
            {/* <span>Slide 3</span> */}
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleSearch}
            >
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
            flexWrap: "wrap",
            
            // flexDirection: "row"
          }}
        >
          {products.map((product) => (
            <Cards key={product.id} details={product}></Cards>
          ))}
        </div>
      </Container>

      {/* < AddProducts />  */}
      <FootBar></FootBar>
    </>
  );
};

export default Home;
