import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exportingInit from "highcharts/modules/exporting";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { FolderOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import BarChart from "./BarChart";

exportingInit(Highcharts);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Marketing() {
  const [time, setTime] = React.useState("This week");
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "",
      align: "left",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    exporting: {
      enabled: true,
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Acquisition",
            y: 33.77,
            sliced: true,
            selected: true,
          },
          {
            name: "Purchase",
            y: 23.02,
          },
          {
            name: "Retention",
            y: 33.28,
          },
        ],
      },
    ],
  };

  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 600px)');

  const commonStyles = {
    margin: "8px 0px 0px 20px",
    height: "350px",
    padding: "11px 15px 11px 15px",
    boxShadow: "2px 2px 2px 2px grey",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6} sx={commonStyles}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Marketing
          </Typography>
          <FormControl variant="standard" sx={{ minWidth: 100 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={time}
              onChange={handleChange}
              label="This week"
            >
              <MenuItem value="This week">This week</MenuItem>
              <MenuItem value="This month">This month</MenuItem>
              <MenuItem value="This year">This year</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Grid>
      <Grid item xs={12} md={5.5}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box
              sx={{
                height: isTablet || isMobile ? "auto" : "170px",
                backgroundColor: "#5570F1",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  height: "36px",
                  width: "36px",
                  backgroundColor: "#5E63661A",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FolderOutlined sx={{ color: "white" }} />
              </Box>

              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <Typography sx={{ fontSize: "14px", color: "white" }}>All Products</Typography>
                  <Typography sx={{ fontSize: "24px", fontWeight: "500", color: "white" }}>45</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <Typography sx={{ fontSize: "14px", color: "white" }}>Active</Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: "24px", fontWeight: "500", color: "white" }}>32</Typography>
                    <span style={{ color: "white", fontSize: "6px !important", marginTop: "10px" }}>+24%</span>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                height: isTablet || isMobile ? "auto" : "170px",
                backgroundColor: "#5E63661A",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  height: "36px",
                  width: "36px",
                  backgroundColor: "#FFCC9129",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ShoppingCartOutlined />
              </Box>

              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <Typography sx={{ fontSize: "14px", color: "red" }}>Abandoned Cart</Typography>
                  <Typography sx={{ fontSize: "24px", fontWeight: "500", color: "black" }}>20%</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <Typography sx={{ fontSize: "14px", color: "#8B8D97" }}>Customers</Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: "24px", fontWeight: "500", color: "black" }}>30</Typography>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
      <BarChart />
      </Grid>
    </Grid>
  );
}
