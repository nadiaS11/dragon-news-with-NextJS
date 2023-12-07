import { getDetailNews } from "@/components/utils/getDetailNews";
import {
  Box,
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Avatar,
} from "@mui/material";
import Image from "next/image";

const NewsDetail = async ({ params }) => {
  const { data: news } = await getDetailNews(params.newsId);
  console.log(news);

  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              alt="image"
              width={800}
              height={500}
            ></Image>
            <Grid container spacing={2} className="mt-2">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  alt="image"
                  width={800}
                  height={500}
                ></Image>
              </Grid>

              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  alt="image"
                  width={800}
                  height={500}
                ></Image>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6}>
            <Typography variant="h5" component={"h2"}>
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",

                ml: 1,
              }}
            >
              <Avatar alt="Remy Sharp" src={news.author.img} />{" "}
              <Typography>{news.author.name}</Typography>
              <Typography>Publish: {news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "15px 0",
                color: "gray",
              }}
            >
              {news.details}
            </Typography>
            <Typography
              variant="h6"
              className=" font-semibold mt-8 text-[#151515B2]"
            >
              {" "}
              ``Many desktop publishing packages and web page editors now use as
              their default model text!
            </Typography>
            <Typography className="text-gray-500"> -- Nadia Sultana</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetail;
