import LatestNews from "@/components/ui/latest/LatestNews";
import { Grid } from "@mui/material";
import Sidebar from "../components/ui/sidebar/Sidebar";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2} className="mx-auto my-5">
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
