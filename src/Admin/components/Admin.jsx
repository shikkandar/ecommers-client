import { useTheme } from '@emotion/react';
import { InboxIcon } from '@heroicons/react/24/outline';
import { Avatar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MailIcon from "@mui/icons-material/Mail";

const menu = [
    {name:"Dashboard",path:"/admin"},
    {name:"Products",path:"/admin/products"},
    {name:"Customers",path:"/admin/customers"},
    {name:"Orders",path:"/admin/orders"},
    {name:"Total Earnings",path:"/admin"},
    {name:"Weekly Overview",path:"/admin"},
    {name:"Monthly Overview",path:"/admin"},
    {name:"Add Product",path:"/admin/product/create"},
  ];
const Admin = () => {
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate=useNavigate()

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
       
        <ListItem   disablePadding >
            <ListItemButton>
            <Avatar
                        className="text-white"
              
                       
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {/* {auth.user?.firstName[0].toUpperCase()} */}
                      </Avatar>
              <ListItemText className="ml-5" primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );
  return (
    <div>Admin</div>
  )
}

export default Admin