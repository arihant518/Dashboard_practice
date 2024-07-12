import { Box, Grid } from "@mui/material";
import React from "react";
import DashboardHeader from "./DashboardHeader";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Marketing from "./Marketing";
import RecentOrder from "./RecentOrder";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Dashboard() {
  return (
    <div>
      <Box>
        <DashboardHeader />
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:'24px'}}>
        <Grid item xs={7} sx={{marginLeft:'12px'}}>
          <Marketing />
        </Grid>
        <Grid item xs={4.6}>
          <RecentOrder />
        </Grid>
      </Grid>
    </div>
  );
}
