import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Assets/images/Logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0A0A0B",
          padding: { xs: "30px 0px", sm: "100px 0px 20px 0px" },
          position:"relative"
        }}
      >
         <Box
                  sx={{
                    width: { xs: "300px", md: "300px" },
                    height: { xs: "300px", md: "300px" },
                    backgroundColor: "rgba(55, 74, 109, 70%)",
                    filter: "blur(200px)",
                    position: "absolute",
                    top: "0",
                    left: "-128px",
                    zIndex: "1",
                    border: "1px solid red",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: { xs: "250px", md: "350px" },
                    height: { xs: "250px", md: "350px" },
                    backgroundColor: "rgba(55, 74, 109, 70%)",
                    filter: "blur(200px)",
                    position: "absolute",
                    bottom: { xs: "0px", sm: "0px" },
                    right: "0px",
                    zIndex: "1",
                    overflow:"hidden"
                  }}
                ></Box>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Grid xs={12} sm={6} md={4} sx={{marginBottom:{xs:"20px",md:"0px"}}}>
              <Box>
                <img src={Logo} alt="" style={{height:"34px",width:"110px"}} />
                <Typography
                  sx={{
                    fontFamily: "Exo",
                    color: "#BABEC4",
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "140%",
                    paddingTop: "25px",
                  }}
                >
                  We offer the best electric cars of <br /> the most recognized
                  brands in <br /> the world.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3} sx={{marginBottom:{xs:"20px",md:"0px"}}}>
              <Box>
                <Typography
                  sx={{
                    color: "#F1F2F3",
                    fontSize: "20px",
                    fontFamily: "Exo",
                    lineHeight: "140%",
                    fontWeight:"600",
                    paddingTop:"0px"
                  }}
                >
                  Company
                </Typography>
                <ul style={{color:"#fff",padding:"0px",margin:"0px",paddingTop:"15px",fontFamily:"Exo",fontSize:"16px"}}>
                  <li style={{listStyle:"none",paddingBottom:"10px",fontSize:"16px"}}>About</li>
                  <li style={{listStyle:"none",paddingBottom:"10px"}}>Cars</li>
                  <li style={{listStyle:"none",paddingBottom:"10px"}}>History</li>
                  <li style={{listStyle:"none",paddingBottom:"10px"}}>Shop</li>
                </ul>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3} sx={{marginBottom:{xs:"20px",md:"0px"}}}>
            <Box>
                <Typography
                  sx={{
                    color: "#F1F2F3",
                    fontSize: "20px",
                    fontFamily: "Exo",
                    lineHeight: "140%",
                    fontWeight:"600",
                    paddingTop:"0px"
                  }}
                >
                  Information
                </Typography>
                <ul style={{color:"#fff",padding:"0px",margin:"0px",paddingTop:"15px",fontFamily:"Exo",fontSize:"16px"}}>
                  <li style={{listStyle:"none",paddingBottom:"10px",fontSize:"16px"}}>Request a quote</li>
                  <li style={{listStyle:"none",paddingBottom:"10px"}}>Find a dealer</li>
                  <li style={{listStyle:"none",paddingBottom:"10px"}}>Contact us</li>
                  <li style={{listStyle:"none",paddingBottom:"10px"}}>Services</li>
                </ul>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={2} sx={{marginBottom:{xs:"20px",md:"0px"}}}>
              <Box>
            <Typography
                  sx={{
                    color: "#F1F2F3",
                    fontSize: "20px",
                    fontFamily: "Exo",
                    lineHeight: "140%",
                    fontWeight:"600",
                    paddingTop:"0px"
                    
                  }}
                >
                  Follow Us
                </Typography>
                <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",paddingTop:"15px"}}>
                  <FacebookIcon sx={{color:"#fff",marginRight:"15px"}}/>
                  <InstagramIcon sx={{color:"#fff",marginRight:"15px"}}/>
                  <TwitterIcon sx={{color:"#fff"}}/>
                </Box>
                </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{color:"#888B91",paddingTop:"70px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Exo",fontSize:"15px",lineHeight:"140%"}}>
       <CopyrightIcon sx={{marginRight:"10px"}}/> Bedimcode. All rights reserved
          </Box>
      </Box>
    </>
  );
};

export default Footer;
