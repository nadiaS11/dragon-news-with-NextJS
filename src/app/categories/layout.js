import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { getAllCategories } from "@/components/utils/getAllCategories";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const CategoriesLayout = ({ children }) => {
  const data = getAllCategories();
  console.log(data);
  return (
    <Box>
      <Container>
        <Grid container spacing={2} className="mx-auto my-5">
          <Grid item xs={3}>
            <CategoryList />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
  <Container>
    <Grid container spacing={2} className="mx-auto my-5">
      <Grid item xs={3}>
        <h1>Category List</h1>
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  </Container>;
};

export default CategoriesLayout;
