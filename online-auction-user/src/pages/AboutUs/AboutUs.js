import React from 'react';
import NavBar from '../../components/Nav/NavBar';
import { Container, Typography, Box, styled } from '@mui/material'; // Import Box for Flexbox
import FootBar from '../../components/Footer/NavBar';
import image from '../../assets/image.png'; // Import image from assets folder

// Custom styled component for the image with hover animations
const ImageContainer = styled('div')({
  width: '50%', // Set image width to 50% of container width
    borderRadius: '20px', 
  overflow: 'hidden', // Hide overflow to ensure image doesn't exceed its container
    '& img': {
        width: '100%',
        transition: 'transform 0.3s ease', // Add transition for hover effect
        '&:hover': {
        transform: 'scale(1.1)', // Scale up image on hover
        },
    },
    });

    export default function AboutUs() {
    return (
        <>
        <NavBar />
        <Container
            sx={{
            marginTop: 4,
            marginBottom: 4,
            textAlign: 'center',
            height: '580px',
            display: 'flex',
            flexDirection: 'row', // Horizontal layout
            alignItems: 'center', // Center vertically
            }}
        >
            {/* Image Container */}
            <ImageContainer>
                <img src={ image } alt="" />
            </ImageContainer>
            
            {/* Text Container */}
            <Box sx={{ width: '50%', padding: '0 20px' }}> {/* Adjust padding as needed */}
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Welcome to our Online Auction Platform!
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Developed by Group 09, our platform offers an exciting and secure
                environment for online auctions.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                With our platform, users can enjoy features such as real-time bidding,
                item tracking, view order details, and much more.
            </Typography>
            <Typography variant="body1">
                We hope you enjoy your experience with us!
            </Typography>
            </Box>
        </Container>
        <FootBar />
        </>
    );
}