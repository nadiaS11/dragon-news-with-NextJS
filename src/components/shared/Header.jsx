import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import { Box, Container, Typography } from "@mui/material";
import { getCurrentDateInfo } from "../utils/getDate";

const Header = () => {
  const currentDate = getCurrentDateInfo();
  // console.log(currentDate);
  return (
    <Box className="my-10">
      <Container>
        <Image
          className="mx-auto"
          src={banner}
          width={500}
          height={400}
          alt="banner-logo"
        />
        <Typography
          variant="body2"
          color={"gray"}
          textAlign={"center"}
          className="mt-5 mb-2"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography
          variant="body2"
          color={"gray"}
          textAlign={"center"}
          className="my-2"
        >
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
