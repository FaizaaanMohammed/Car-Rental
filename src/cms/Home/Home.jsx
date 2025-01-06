import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import BoltIcon from "@mui/icons-material/Bolt";
import car1 from "../../Assets/images/car1.png";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import Hero from '../Home/Home.module.css'

const Home = () => {
  const temp = [
    { icon: <ThermostatAutoIcon />, title: "34°", descr: "TEMPERATURE" },
    { icon: "Km", title: "873", descr: "MILEAGE" },
    { icon: <BoltIcon />, title: "94%", descr: "BATTERY" },
  ];
  return (
    <Box sx={{ backgroundColor: "#0A0A0B", paddingBottom: "150px" }}>
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
          bottom: {xs:'-150px',sm:"-180px"},
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
              fontSize: {xs:'24px',sm:"36px"},
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
              fontSize: {xs:'16px',sm:"24px"},
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
                      padding: {xs:"0px 25px",sm:"0px 50px"},
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
                outlineOffset:"10px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#fff",
                fontFamily:"Exo",
                fontWeight:"500",
                fontSize:"14px",
                cursor:"pointer"
              }}
            >
              START
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
