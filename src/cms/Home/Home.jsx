import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import BoltIcon from "@mui/icons-material/Bolt";
import car1 from "../../Assets/images/car1.png";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import Hero from "../Home/Home.module.css";
import SpeedIcon from "@mui/icons-material/Speed";
import gearbox from "../../Assets/images/AboutPicture.png";

const Home = () => {
  const temp = [
    { icon: <ThermostatAutoIcon />, title: "34°", descr: "TEMPERATURE" },
    { icon: <SpeedIcon />, title: "873", descr: "MILEAGE" },
    { icon: <BoltIcon />, title: "94%", descr: "BATTERY" },
  ];
  return (
    <>
      <Box sx={{ backgroundColor: "#0A0A0B", paddingBottom: "70px" }}>
        <Navbar />
        {/* end navbar */}
        {/* redical */}
        <Box
          sx={{
            width: { xs: "400px", md: "500px" },
            height: { xs: "400px", md: "500px" },
            backgroundColor: "rgba(55, 74, 109, 70%)",
            filter: "blur(180px)",
            position: "absolute",
            top: "0",
            left: "-128px",
            zIndex: "1",
            border: "1px solid red",
          }}
        ></Box>
        <Box
          sx={{
            width: { xs: "200px", md: "400px" },
            height: { xs: "200px", md: "400px" },
            backgroundColor: "rgba(55, 74, 109, 70%)",
            filter: "blur(180px)",
            position: "absolute",
            bottom: { xs: "-150px", sm: "-180px" },
            right: "0px",
            zIndex: "1",
          }}
        ></Box>
        {/* end radical */}

        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "70px",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Exo",
                fontSize: { xs: "24px", sm: "36px" },
                fontWeight: "600",
                paddingBottom: "15px",
              }}
            >
              Choose The Best Car
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Exo",
                fontSize: { xs: "16px", sm: "24px" },
                fontWeight: "600",
                paddingBottom: "10px",
                lineHeight: "140%",
              }}
            >
              Porsche Mission E
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Exo",
                fontSize: "16px",
                fontWeight: "500",
                paddingBottom: "60px",
                lineHeight: "140%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BoltIcon sx={{ color: "#4177DC" }} />
              Electric car
            </Typography>
            <Box sx={{ paddingBottom: "40px" }}>
              <img src={car1} alt="" className={Hero.bannerCar} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingBottom: "50px",
              }}
            >
              {temp.map((item) => {
                return (
                  <>
                    <Box
                      sx={{
                        color: "#fff",
                        padding: { xs: "0px 25px", sm: "0px 50px" },
                        textAlign: "right",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography sx={{ paddingBottom: "30px" }}>
                        {item.icon}
                      </Typography>
                      <Typography
                        sx={{
                          paddingBottom: "5px",
                          fontSize: "24px",
                          fontWeight: "600",
                          fontFamily: "Exo",
                          lineHeight: "140%",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          paddingBottom: "5px",
                          fontSize: "13px",
                          fontFamily: "Exo",
                          lineHeight: "140%",
                          color: "#888B91",
                          textAlign: "center",
                        }}
                      >
                        {item.descr}
                      </Typography>
                    </Box>
                  </>
                );
              })}
            </Box>
            <Box>
              <Box
                sx={{
                  height: "90px",
                  width: "90px",
                  border: "2px solid #099260",
                  borderRadius: "50%",
                  outline: "2px solid #02DB8A",
                  outlineOffset: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontFamily: "Exo",
                  fontWeight: "500",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                START
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* // end of hero section */}
      {/* start technology part */}
      <Box sx={{ backgroundColor: "#0A0A0B", padding: {xs:"30px 0px",sm:"100px 0px"} }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid xs={12} sm={12} md={6} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Box sx={{ position: "relative",paddingBottom:{sm:"80px",md:"0px",xs:"80px"} }} >
                <img src={gearbox} alt="" className={Hero.technologyPicture} />
                <Box
                  sx={{
                    width: "197px",
                    height: "104px",
                    position: "absolute",
                    right: {xs:"-1px",md:"-5px"},
                    bottom: {xs:"25px",md:"-50px"},
                    borderRadius: "15px",
                    backgroundColor: "rgb(255,255,255,10%)",
                    backdropFilter: "blur(16px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                  className={Hero.technology}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: "600",
                      lineHeight: "140%",
                      fontFamily: "Exo",
                      paddingBottom: "10px",
                    }}
                  >
                    2.500+
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "13px",
                      textAlign: "center",
                      fontFamily: "Exo",
                      lineHeight:"140%"
                    }}
                  >
                    Supercharges placed <br /> along popular routes
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6} sx={{sm:{display:"flex",justifyContent:"center",alignItems:"center"}}}>
              <Box sx={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",paddingLeft:{md:"50px"}}}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {xs:"20px",sm:"24px"},
                    fontWeight: "600",
                    fontFamily: "Exo",
                    lineHeight: "140%",
                    paddingBottom: {xs:"30px",sm:"40px"},
                    paddingTop: "25px",
                  }}
                >
                  Machines With <br /> Future Technology
                </Typography>
                <Typography
                  sx={{
                    color: "#BABEC4",
                    fontSize: {xs:"15px",sm:"16px"},
                    fontWeight: "500",
                    fontFamily: "Exo",
                    lineHeight: "140%",
                    paddingBottom: {xs:"40px",sm:"40px"},
                    letterSpacing: "0%",
                  }}
                >
                  See the future with high-performance electric cars <br className={Hero.break} />{" "}
                  produced by renowned brands. They feature futuristic <br className={Hero.break} />{" "}
                  builds and designs with new and innovative platforms <br className={Hero.break} />{" "}
                  that last a long time.
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      padding: "15px 35px",
                      textTransform: "capitalize",
                      fontFamily: "Exo",
                    }}
                  >
                    Know more
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
