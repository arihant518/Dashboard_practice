import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../CommonButton'
import DashboardHeader from '../dashboard/DashboardHeader'
import OrderTable from './OrderTable'

export default function OrderSummary() {
  return (
    <div>
        <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:'12px'}}>
            <Typography>Order Summary</Typography>
           <CommonButton sx={{borderRadius:'12px', backGroundColor:'#5570F1', height:'30px', textTransform:'none'}}> + Create a New Order</CommonButton>
        </Box>

        {/* <-------------For not wasting my time on making same boxes i use the dashboard cards as it is in this --------------> */}
        <DashboardHeader />
        <OrderTable />
    </div>
  )
}
