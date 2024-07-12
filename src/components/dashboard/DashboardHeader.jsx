import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DonutSmallOutlined, LocalMallOutlined, PeopleAltOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DashboardHeader() {
    const [time, setTime] = React.useState('This week');
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isMobile = useMediaQuery('(max-width: 600px)');

    const handleChange = (event) => {
      setTime(event.target.value);
    };

    const commonStyles = {
      margin: "16px 0px 0px 24px",
      height: "145px",
      padding: "11px 15px 11px 15px",
      boxShadow: "2px 2px 2px 2px grey",
      borderRadius: "12px",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    sm={isTablet ? 6 : 3}
                    sx={commonStyles}
                >
                    <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                height: "36px",
                                width: "36px",
                                backgroundColor: "#5570F11F",
                                borderRadius: "8px",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        ><DonutSmallOutlined sx={{ color: 'blue' }} /></Box>
                        <FormControl variant="standard" sx={{ minWidth: 100 }}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={time}
                                onChange={handleChange}
                                label="This week"
                            >
                                <MenuItem value="This week">This week
                                </MenuItem>
                                <MenuItem value='This month'>This month</MenuItem>
                                <MenuItem value='This year'>This year</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Typography sx={{ fontSize: '14px', color: '#8B8D97' }}>Sales</Typography>
                            <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>4000000</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Typography sx={{ fontSize: '14px', color: '#8B8D97' }}>Volumn</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>450</Typography>
                                <span style={{ color: 'green', fontSize: '6px !important', marginTop: '10px' }}>+20.00%</span>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={isTablet ? 6 : 3}
                    sx={commonStyles}
                >
                    <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                height: "36px",
                                width: "36px",
                                backgroundColor: "#FFCC9129",
                                borderRadius: "8px",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        ><PeopleAltOutlined /></Box>
                        <FormControl variant="standard" sx={{ minWidth: 100 }}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={time}
                                onChange={handleChange}
                                label="This week"
                            >
                                <MenuItem value="This week">This week
                                </MenuItem>
                                <MenuItem value='This month'>This month</MenuItem>
                                <MenuItem value='This year'>This year</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Typography sx={{ fontSize: '14px', color: '#8B8D97' }}>Customers</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>1250</Typography>
                                <span style={{ color: 'green', fontSize: '6px !important', margin: '10px 0px 0px 10px' }}>+15.00%</span>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Typography sx={{ fontSize: '14px', color: '#8B8D97' }}>Active</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>1180</Typography>
                                <span style={{ color: 'green', fontSize: '6px !important', margin: '10px 0px 0px 10px' }}>85%</span>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={isTablet ? 12 : 5}
                    sx={commonStyles}
                >
                    <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box
                            sx={{
                                height: "36px",
                                width: "36px",
                                backgroundColor: "#FFCC9129",
                                borderRadius: "8px",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        ><LocalMallOutlined /></Box>
                        <FormControl variant="standard" sx={{ minWidth: 100 }}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={time}
                                onChange={handleChange}
                                label="This week"
                            >
                                <MenuItem value="This week">This week
                                </MenuItem>
                                <MenuItem value='This month'>This month</MenuItem>
                                <MenuItem value='This year'>This year</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Typography sx={{ fontSize: '14px', color: '#8B8D97' }}>All Orders</Typography>
                            <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>450</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Typography sx={{ fontSize: '14px', color: '#8B8D97' }}>Pending</Typography>
                                <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>5</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Typography sx={{ fontSize: '14px', color: '#8B8D97' }}>Complete</Typography>
                                <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>445</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
