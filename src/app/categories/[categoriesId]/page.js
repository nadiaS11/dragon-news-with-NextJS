import { getCategoryNews } from "@/components/utils/getCategoryNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNews = async ({ params, searchParams }) => {
  const id = searchParams.category;

  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div className="mt-5 ">
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className=" "
      >
        {data.map((news) => (
          <Grid key={news._id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      " & img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      alt="image"
                      width={800}
                      height={100}
                    ></Image>
                  </CardMedia>
                  <CardContent>
                    <p className="w-28 text-white bg-red-600 px-2 my-5 rounded">
                      {news.category}
                    </p>
                    <Typography gutterBottom variant="h6" component="div">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography color="text.secondary" className="my-2">
                      By {news.author.name} - {news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details >= 200
                        ? news.details
                        : news.details.slice(0, 200)}
                      ...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNews;
