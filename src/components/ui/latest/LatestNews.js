import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import topImg from "@/assets/pic1.png";
import topImg2 from "@/assets/pic2.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <Box className=" ">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={topImg} alt="image" width={1000}></Image>
            </CardMedia>
            <CardContent>
              <p className="w-28 text-white bg-red-600 px-2 my-5 rounded">
                TechnoLogy
              </p>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography color="text.secondary" className="my-4">
                By Nadia Sultana - Mar 18 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout........
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="mt-5"
        >
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topImg2} alt="image"></Image>
                </CardMedia>
                <CardContent>
                  <p className="w-28 text-white bg-red-600 px-2 my-5 rounded">
                    TechnoLogy
                  </p>
                  <Typography gutterBottom component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography color="text.secondary" className="my-4">
                    By Nadia Sultana - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topImg2} alt="image" width={1000}></Image>
                </CardMedia>
                <CardContent>
                  <p className="w-28 text-white bg-red-600 px-2 my-5 rounded">
                    TechnoLogy
                  </p>
                  <Typography gutterBottom component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography color="text.secondary" className="my-4">
                    By Nadia Sultana - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topImg2} alt="image" width={1000}></Image>
                </CardMedia>
                <CardContent>
                  <p className="w-28 text-white bg-red-600 px-2 my-5 rounded">
                    TechnoLogy
                  </p>
                  <Typography gutterBottom component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography color="text.secondary" className="my-4">
                    By Nadia Sultana - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topImg2} alt="image" width={1000}></Image>
                </CardMedia>
                <CardContent>
                  <p className="w-28 text-white bg-red-600 px-2 my-5 rounded">
                    TechnoLogy
                  </p>
                  <Typography gutterBottom component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography color="text.secondary" className="my-4">
                    By Nadia Sultana - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
