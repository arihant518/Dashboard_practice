import { Box, Chip, Grid, Typography } from '@mui/material';
import React from 'react';
import mobilePhoto from '../../assets/mobile.svg';
import mobilePhotoBlack from '../../assets/black_mobile.svg';

const orders = [
  {
    id: 1,
    name: 'Iphone 13',
    price: '59,0000',
    date: '12 Sept 2022',
    status: 'Pending',
    img: mobilePhoto,
  },
  {
    id: 2,
    name: 'Iphone 13',
    price: '59,0000',
    date: '12 Sept 2022',
    status: 'Complete',
    img: mobilePhotoBlack,
  },
  // Add more orders here
  {
    id: 3,
    name: 'Samsung S21',
    price: '70,0000',
    date: '15 Sept 2022',
    status: 'Pending',
    img: mobilePhoto,
  },
  {
    id: 4,
    name: 'OnePlus 9',
    price: '50,0000',
    date: '10 Sept 2022',
    status: 'Complete',
    img: mobilePhotoBlack,
  },
  {
    id: 3,
    name: 'Samsung S21',
    price: '70,0000',
    date: '15 Sept 2022',
    status: 'Pending',
    img: mobilePhoto,
  },
  {
    id: 4,
    name: 'OnePlus 9',
    price: '50,0000',
    date: '10 Sept 2022',
    status: 'Complete',
    img: mobilePhotoBlack,
  },
  {
    id: 5,
    name: 'Samsung S21',
    price: '70,0000',
    date: '15 Sept 2022',
    status: 'Pending',
    img: mobilePhoto,
  },
  {
    id: 6,
    name: 'OnePlus 9',
    price: '50,0000',
    date: '10 Sept 2022',
    status: 'Complete',
    img: mobilePhotoBlack,
  },
  {
    id: 7,
    name: 'Samsung S21',
    price: '70,0000',
    date: '15 Sept 2022',
    status: 'Pending',
    img: mobilePhoto,
  },
  {
    id: 8,
    name: 'OnePlus 9',
    price: '50,0000',
    date: '10 Sept 2022',
    status: 'Complete',
    img: mobilePhotoBlack,
  },
];

export default function RecentOrder() {
  return (
    <div>
      <Grid sx={{ padding: '20px', borderRadius: '12px', backgroundColor: '#5E63661A', width:'100%' }}>
        <Typography sx={{ fontSize: '16px' }}>Recent Orders</Typography>
        {orders.map((order) => (
          <Box
            key={order.id}
            xs={12} sm={6} md={4}
            sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}
          >
            <Box sx={{ display: 'flex', gap: '12px' }}>
              <Box
                sx={{
                  height: '50px',
                  width: '50px',
                  border: '1px solid white',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img src={order.img} alt='mobile' />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Typography>{order.name}</Typography>
                <Typography sx={{ fontWeight: '600' }}>{order.price} * 1</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Typography>{order.date}</Typography>
              <Chip
                label={order.status}
                sx={{
                  color: order.status === 'Pending' ? 'red' : 'green',
                  backgroundColor: order.status === 'Pending' ? '#F57E771F' : '#32936F1F',
                  height: '24px',
                }}
              />
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
}
