import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import SmallLogoIcon from '../../src/assets/Logo1.svg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OrderIcon from '../assets/Bag.svg';
import LogoIcon from '../assets/Logo.svg';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate, useLocation } from 'react-router-dom';
import { Avatar, IconButton, Tooltip, Typography } from '@mui/material';
import { ArrowForwardIosOutlined, CardGiftcardOutlined, HeadphonesOutlined, LogoutOutlined } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar({ open, setOpen }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isSelected = (path) => location.pathname === path;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white !important' }}>
        <Toolbar>
          {!open && <img src={SmallLogoIcon} alt='logo' onClick={handleDrawerOpen} style={{ cursor: 'pointer', position:'relative' }} />}
          <Tooltip title='Arihant'>
          <Avatar sx={{position:'absolute', right:"24px"}}>A</Avatar>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{padding:'0px 100px !important'}}>
          <img src={LogoIcon} alt='logo' onClick={handleDrawerClose} style={{ cursor: 'pointer' }} />
        </DrawerHeader>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/dashboard")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius:'16px',
                backgroundColor: isSelected("/dashboard") ? '#5570F1' : 'inherit',
                '&:hover': {
                  backgroundColor: isSelected("/dashboard") ? '#5570F1' : '#BBC5F9',
                  borderRadius:'16px'
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title='Dashboard' placement="right-start"  >
                <DashboardIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0,color: isSelected("/dashboard") ? 'white' : 'black', }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/order")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius:'16px',
                backgroundColor: isSelected("/order") ? '#5570F1' : 'inherit',
                '&:hover': {
                  backgroundColor: isSelected("/order") ? '#5570F1' : '#BBC5F9',
                  borderRadius:'16px'
                },
              }}
            >
                <Tooltip title='order' placement="right-start">
              <img src={OrderIcon} style={{ paddingLeft: open ? 0 : '20px' }} />
              </Tooltip>
              <ListItemText primary="Order" sx={{ opacity: open ? 1 : 0, marginLeft: '26px',color: isSelected("/order") ? 'white' : 'black', }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/inventory")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius:'16px',
                backgroundColor: isSelected("/inventory") ? '#5570F1' : 'inherit',
                '&:hover': {
                  backgroundColor: isSelected("/inventory") ? '#5570F1' : '#BBC5F9',
                  borderRadius:'16px'
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title='inventory' placement='right-start'>
                <SourceOutlinedIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Inventory" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate("/conversation")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius:'16px',
                backgroundColor: isSelected("/conversation") ? '#5570F1' : 'inherit',
                '&:hover': {
                  backgroundColor: isSelected("/conversation") ? '#5570F1' : '#BBC5F9',
                  borderRadius:'16px'
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title='Conversation' placement='right-start'>
                <SmsOutlinedIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Conversation" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block', marginBottom: '50px' }} onClick={() => navigate("/settings")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                borderRadius:'16px',
                backgroundColor: isSelected("/settings") ? '#5570F1' : 'inherit',
                '&:hover': {
                  backgroundColor: isSelected("/settings") ? '#5570F1' : '#BBC5F9',
                  borderRadius:'16px'
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title='Settings' placement='right-start'>
                <SettingsOutlinedIcon />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding sx={{ display: 'block', backgroundColor:'#5E63661A', borderRadius:'16px' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title='Contact Support' placement='right-start'>
                <HeadphonesOutlined />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Contact Support" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block',backgroundColor:'#FFCC9133', borderRadius:'16px',height:open?'82px' : '50px',marginTop:'8px' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <CardGiftcardOutlined />
              </ListItemIcon>
              <ListItemText primary="Free Gifts Awaits For you!" sx={{ opacity: open ? 1 : 0, fontSize:'12px' }} />
            </ListItemButton>
            <Typography endIcon  sx={{color:'#6E7079' , fontSize:'12px',paddingLeft:'24px' , display:open ?'block' : 'none'}}>Upgrade Your Account  <IconButton>
        <ArrowForwardIosOutlined  sx={{height:'14px', width:'14px'}}/>
      </IconButton></Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block', borderRadius:'16px', marginTop:'8px' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                color:'red'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Tooltip title='Logout' placement='right-start'>
                <LogoutOutlined  sx={{color:'red'}}/>
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
