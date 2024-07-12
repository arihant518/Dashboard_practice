import { Box } from '@mui/material'
import React from 'react'
import OrderSummary from './order/OrderSummary'

export default function Order() {
  return (
    <div>
    <Box sx={{margin:'12px'}}><OrderSummary /></Box>
</div>
  )
}
