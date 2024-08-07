import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Avatar, IconButton, Drawer,
  List, ListItem, ListItemText, TextField, Button, CssBaseline, Divider
} from '@mui/material';
import {
  Menu as MenuIcon, ChevronLeft as ChevronLeftIcon,
  AccountCircle as AccountCircleIcon, ExitToApp as ExitToAppIcon
} from '@mui/icons-material';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleDrawer = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleProfileChange = () => {
    // Implement profile picture change logic here
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
      // Add logic to get a response from your backend or AI model
    }
  };

  return (
    <div className="app">
      <CssBaseline />
      <Drawer
        variant="persistent"
        anchor="left"
        open={sidebarOpen}
        className="drawer"
        classes={{ paper: 'drawer-paper' }}
      >
        <div className="drawer-header">
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Chat 1
          </Typography>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Menu Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Menu Item 2" />
          </ListItem>
          {/* Add more items as needed */}
        </List>
        <Divider />
        <List style={{ marginTop: 'auto' }}>
          <ListItem button>
            <ExitToAppIcon />
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        onClick={toggleDrawer}
        className={`menu-button ${sidebarOpen ? 'menu-button-shift' : ''}`}
      >
        <MenuIcon />
      </IconButton>
      <main className={`content ${sidebarOpen ? 'content-shift' : ''}`}>
        <AppBar
          position="fixed"
          className={`app-bar ${sidebarOpen ? 'app-bar-shift' : ''}`}
        >
          <Toolbar>
            <Typography variant="h6" className="title">
              Welcome Tharanitharan!
            </Typography>
            <IconButton color="inherit" onClick={handleProfileChange}>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="chatbox">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                {msg}
              </div>
            ))}
          </div>
          <div className="input-area">
            <TextField
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button variant="contained" color="primary" onClick={handleSend}>
              Send
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
