import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, height: '100vh', backgroundColor: '#f5f5f5', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Menu
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component={Link} to="/" sx={{ '&.Mui-selected': { backgroundColor: '#e0e0e0' } }}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="User List" />
        </ListItem>
        <ListItem button component={Link} to="/users/details" sx={{ '&.Mui-selected': { backgroundColor: '#e0e0e0' } }}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="User Details" />
        </ListItem>
        <ListItem button component={Link} to="/AddUser" sx={{ '&.Mui-selected': { backgroundColor: '#e0e0e0' } }}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Add User" />
        </ListItem>
        <ListItem button component={Link} to="/users/edit" sx={{ '&.Mui-selected': { backgroundColor: '#e0e0e0' } }}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Edit User" />
        </ListItem>
        <ListItem button component={Link} to="/users/delete" sx={{ '&.Mui-selected': { backgroundColor: '#e0e0e0' } }}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Delete User" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
