import React, { FC } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonalFiles from './PersonalFiles';
// import Deposits from './Deposits';
// import Orders from './Orders';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import QueueIcon from '@mui/icons-material/Queue';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FolderIcon from '@mui/icons-material/Folder';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import Logo from '../assets/ethereum-icon-purple.svg';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Word from '../assets/microsoft-word-2013-logo.svg'
import Power from '../assets/microsoft-powerpoint-2013.svg'
import Excel from '../assets/microsoft-excel-2013.svg'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://aygunsalimova.netlify.com/" target="_blank">
        Aygun Salimova
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 350;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
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
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const defaultTheme = createTheme();

const Dashboard: FC = () => {

 // You can add authentication checks here
 const token = localStorage.getItem('token');
 if (!token) {
   // Redirect to the login page if not authenticated
   window.location.href = '/login';
 }
  
  // Sidebar
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // open-close file libs
  const [openFol, setOpenFol] = React.useState(false);
  const handleClick = () => {
    setOpenFol(!openFol);
  };

  // modal new section
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  // modal style
  const style = {
    position: 'absolute',
    top: '40%',
    left: '15%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    py: 2,
  };

// create folder section
const [openCreateFolderModal, setOpenCreateFolderModal] = React.useState(false);
const handleOpenCreateFolderModal = () => setOpenCreateFolderModal(true);
const handleCloseCreateFolderModal = () => setOpenCreateFolderModal(false);
  // modal style
  const styleCreateFolder = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 345,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    lineHeight: 5
  };

  
// error-- 1st modal isn't closing while 2nd is open



  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', bgcolor: 'text.disabled'  }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', 
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <img src={Logo} alt="logo" className='logo'/>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
             Hello
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <React.Fragment>
              <ListItemButton  onClick={handleOpenModal}>
                <ListItemIcon>
                  <QueueIcon />
                </ListItemIcon>
               <ListItemText primary="New" />
                 {/* {openFol2 ? <ExpandLess /> : <ExpandMore />}*/}
              </ListItemButton> 
                 <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={openCreateFolderModal ? "d-none" : ""}
              >
                   <Box sx={style}>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                       <FileUploadIcon />
                   </ListItemIcon>
                      <ListItemText primary="Upload File" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                       <FileUploadIcon />
                   </ListItemIcon>
                      <ListItemText primary="Upload Folder" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <img src={Word} alt=""  className='icon-img'/>
                   </ListItemIcon>
                      <ListItemText primary="Word Document" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <img src={Power} alt=""  className='icon-img'/>
                   </ListItemIcon>
                      <ListItemText primary="PowerPoint Presentation" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <img src={Excel} alt=""  className='icon-img'/>
                   </ListItemIcon>
                      <ListItemText primary="Excel Spreadsheet" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={handleOpenCreateFolderModal}>
                    <ListItemIcon>
                    <CreateNewFolderIcon />
                    </ListItemIcon>
                      <ListItemText primary="Create Folder" />
                    </ListItemButton>
                    <Modal
                      open={openCreateFolderModal}
                      onClose={handleCloseCreateFolderModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                   <Box sx={styleCreateFolder}>
                   <ListItemText primary="Create new folder" />
                   <TextField id="standard-basic" label="Name" variant="standard" required sx={{ width: '30ch'  }} />
                   <TextField id="standard-basic" label="Title" variant="standard" sx={{ width: '30ch'  }}/>
                   <TextField id="standard-basic" label="Describtion" variant="standard" sx={{ width: '30ch'  }}/>

                  </Box>
                  </Modal>

                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <CreateNewFolderIcon />
                    </ListItemIcon>
                      <ListItemText primary="Create Library" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <TextSnippetIcon />
                    </ListItemIcon>  
                      <ListItemText primary="Create file from template" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <CreateNewFolderIcon />
                    </ListItemIcon>
                      <ListItemText primary="Create Folder from template" />
                    </ListItemButton>
                  </List>
                  </Box>
                  </Modal>
            </React.Fragment>

            <Divider sx={{ my: 1 }} />

            <React.Fragment>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Personal Files" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText primary="File Libraries" />
                  {openFol ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openFol} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} className='sublibs'>
                      <ListItemText primary="Favorite Libraries" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} className='sublibs'>
                      <ListItemText primary="My Libraries" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </React.Fragment>


            <Divider sx={{ my: 1 }} />
            
            <React.Fragment>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary="Shared" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="Recent Files" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </React.Fragment>


          </List>
        </Drawer>
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <PersonalFiles />
                </Paper>
              </Grid>
            
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export default Dashboard;