import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "postcss";
import { Image } from "next/image";
const SingleNewsDetail = ({ details }) => {
  console.log(details);
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={details.thumbnail_url}
              width={1000}
              height={500}
              alt="img"
            ></Image>
            <Grid item xs={6}></Grid>
          </Grid>
          <Grid item lg={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleNewsDetail;
