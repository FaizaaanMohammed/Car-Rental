import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import BoltIcon from "@mui/icons-material/Bolt";
import car1 from "../../Assets/images/car1.png";
import ThermostatAutoIcon from "@mui/icons-material/ThermostatAuto";
import Hero from "../Home/Home.module.css";
import SpeedIcon from "@mui/icons-material/Speed";
import gearbox from "../../Assets/images/AboutPicture.png";
import brand1 from "../../Assets/images/brand1.png";
import brand2 from "../../Assets/images/brand 2.png";
import brand3 from "../../Assets/images/brand3.png";
import EvStationIcon from "@mui/icons-material/EvStation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Home = () => {
  const temp = [
    { icon: <ThermostatAutoIcon />, title: "34°", descr: "TEMPERATURE" },
    { icon: <SpeedIcon />, title: "873", descr: "MILEAGE" },
    { icon: <BoltIcon />, title: "94%", descr: "BATTERY" },
  ];

  const cards = [
    {
      id: 1,
      title: "Porsche",
      description: "Description of Car 1",
      img: brand1,
      model: "Turbo S",
      price: "$175,900",
    },
    {
      id: 2,
      title: "Porsche",
      description: "Description of Car 2",
      img: brand2,
      model: "Taycan",
      price: "$114,900",
    },
    {
      id: 3,
      title: "Porsche",
      description: "Description of Car 3",
      img: brand3,
      model: "Turbo S Cross",
      price: "$175,900",
    },
    {
      id: 4,
      title: "Porsche",
      description: "Description of Car 1",
      img: brand1,
      model: "Turbo S",
      price: "$175,900",
    },
    {
      id: 5,
      title: "Porsche",
      description: "Description of Car 2",
      img: brand2,
      model: "Taycan",
      price: "$114,900",
    },
    {
      id: 6,
      title: "Porsche",
      description: "Description of Car 3",
      img: brand3,
      model: "Turbo S Cross",
      price: "$175,900",
    },
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
      <Box
        sx={{
          backgroundColor: "#0A0A0B",
          padding: { xs: "30px 0px", sm: "100px 0px" },
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              xs={12}
              sm={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: { sm: "80px", md: "0px", xs: "80px" },
                }}
              >
                <img src={gearbox} alt="" className={Hero.technologyPicture} />
                <Box
                  sx={{
                    width: "197px",
                    height: "104px",
                    position: "absolute",
                    right: { xs: "-1px", md: "-5px" },
                    bottom: { xs: "25px", md: "-50px" },
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
                      lineHeight: "140%",
                    }}
                  >
                    Supercharges placed <br /> along popular routes
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={6}
              sx={{
                sm: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  paddingLeft: { md: "50px",xs:"10px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "20px", sm: "24px" },
                    fontWeight: "600",
                    fontFamily: "Exo",
                    lineHeight: "140%",
                    paddingBottom: { xs: "30px", sm: "40px" },
                    paddingTop: "25px",
                  }}
                >
                  Machines With <br /> Future Technology
                </Typography>
                <Typography
                  sx={{
                    color: "#BABEC4",
                    fontSize: { xs: "15px", sm: "16px" },
                    fontWeight: "500",
                    fontFamily: "Exo",
                    lineHeight: "140%",
                    paddingBottom: { xs: "30px", sm: "40px" },
                    letterSpacing: "0%",
                  }}
                >
                  See the future with high-performance electric cars{" "}
                  <br className={Hero.break} /> produced by renowned brands.
                  They feature futuristic <br className={Hero.break} /> builds
                  and designs with new and innovative platforms{" "}
                  <br className={Hero.break} /> that last a long time.
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      padding: {xs:"10px 20px",sm:"15px 35px"},
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
      {/* end technology part  */}
      {/* start porsche brand */}
      <Box
        sx={{
          backgroundColor: "#0A0A0B",
          padding: { xs: "50px 0px", sm: "100px 0px" },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: "#F1F2F3",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Exo",
              lineHeight: "140%",
              paddingBottom: {xs:"40px",sm:"80px"},
            }}
          >
            Choose Your Electric Car <br /> Of The Porsche Brand
          </Typography>
          <Grid container>
            <Box sx={{ width: "100%" }}>
              <Swiper
                modules={[Pagination]}
                spaceBetween={20} // Space between slides
                slidesPerView={3} // 3 slides visible at once (on X-axis)
                pagination={{ clickable: true, type: "bullets" }} // Enable clickable dot navigation
                direction="horizontal"
                scrollbar={{ draggable: true }}
                style={{ width: "100%" }}
                breakpoints={{
                  360: {
                    slidesPerView: 1,
                    spaceBetween: 10, // space between for mobile
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 20, // space between for medium screens
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 30, // space between for large screens
                  },
                }}
                sx={{
                  "& .swiper-pagination": {
                    Top: "-20px!important", // Space between the swiper and the bullets
                  },
                  "& .swiper-pagination-bullet": {
                    backgroundColor: "white !important", // Ensure bullets are white
                    marginTop: "10px", // Adjust space above each bullet
                  },
                  "& .swiper-pagination-bullet-active": {
                    backgroundColor: "blue !important", // Example: Change color of active bullet
                  },
                }}
              >
                {cards.map((item) => {
                  return (
                    <>
                      <SwiperSlide key={item.id}>
                        <Grid
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Card
                            sx={{
                              minWidth: 290,
                              padding: "20px 5px",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                              flexDirection: "column",
                              borderRadius: "20px",
                              backgroundColor: "#111213",
                              paddingBottom: "5px",
                              overflow:"hidden"
                            }}
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                  fontSize: "24px",
                                  fontWeight: "600",
                                  fontFamily: "Exo",
                                  color: "#fff",
                                }}
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: "500",
                                  fontFamily: "Exo",
                                  color: "#fff",
                                  paddingBottom: "20px",
                                }}
                              >
                                {item.model}
                              </Typography>
                            </CardContent>
                            <CardMedia
                              sx={{
                                height: 80,
                                width: "180px",
                                margin: "auto",
                              }}
                              image={item.img}
                              title={item.title}
                            />

                            <CardContent
                              sx={{
                                color: "#fff",
                                display: "flex",
                                justifyContent: "space-between",
                                paddingTop: "30px",
                                paddingBottom: "8px",
                              }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  fontFamily: "Exo",
                                  fontSize: "13px",
                                  marginRight: "30px",
                                }}
                              >
                                <SpeedIcon sx={{ marginRight: "8px" }} /> 3.4
                                sec
                              </span>
                              <span
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  fontFamily: "Exo",
                                  fontSize: "13px",
                                }}
                              >
                                <TrendingUpIcon sx={{ marginRight: "8px" }} /> 356
                                km/h
                              </span>
                            </CardContent>
                            <CardContent
                              sx={{ color: "#fff", paddingTop: "0px" }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  fontFamily: "Exo",
                                  fontSize: "13px",
                                }}
                              >
                                <EvStationIcon sx={{ marginRight: "8px" }} />{" "}
                                Electric
                              </span>
                            </CardContent>
                            <CardContent
                              sx={{
                                paddingTop: "10px",
                                color: "#fff",
                                paddingBottom: "5px",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "20px",
                                  fontFamily: "Exo",
                                  fontWeight: "600",
                                  paddingLeft: "3px",
                                }}
                              >
                                {item.price}
                              </Typography>
                            </CardContent>
                            <Box
                              sx={{
                                width: "56px",
                                height: "46px",
                                backgroundColor: "#4177DC",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "20px 0px 20px 0px",
                                position: "absolute",
                                right: "40px",
                                bottom: "0",
                                zIndex: "2",
                              }}
                              className={Hero.cardBag}
                            >
                              <LocalMallIcon sx={{ color: "#fff" }} />
                            </Box>
                            <Box
                              sx={{
                                width: "100px",
                                height: "100px",
                                position: "absolute",
                                backgroundColor:"rgb(55,74,150,50%)",
                                top:"10",
                                left:"75px",
                                filter:"blur(48px)",
                                zIndex:"1",
                                borderRadius:"50%",
                                opacity:"150%"
                              }}
                            ></Box>
                          </Card>
                        </Grid>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
