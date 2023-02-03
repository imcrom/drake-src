import React from 'react'
import '../App.css'
import { AppBar, Toolbar, Typography, Button, Modal, Box } from '@mui/material'

import TableRowsSharpIcon from '@mui/icons-material/TableRowsSharp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'rgba(18, 18, 18, 0.9)',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};




export const Navbar = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar id='Home' position='relative' className="Appbar" color='transparent' elevation={0}>
        <Toolbar className="flex-row justify-between">
            <Typography className="font-link" variant="h5" color="white">
                DRAKE AI-
            </Typography>

            <Button onClick={handleOpen}>
              <TableRowsSharpIcon sx={{ color: '#fff', width: 30, height: 30}}/>
            </Button>
      <Modal
        disableRestoreFocus
        open={open}
        onClick={e => e.preventDefault()}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Button onClick={() => window.location.href = "#Home"} className="w-full">
            <Typography className="font-link-monst" variant="h8" color="#F6BE64">
                 - HOME - 
            </Typography>
          </Button>
          <Button onClick={() => window.location.href = "#Tokenomics"} className="w-full">
            <Typography className="font-link-monst" variant="h8" color="#F6BE64">
                  - TOKENOMICS - 
            </Typography>
          </Button>
          <Button onClick={() => window.location.href = "#Roadmap"} className="w-full">
            <Typography className="font-link-monst" variant="h8" color="#F6BE64">
                  - ROADMAP - 
            </Typography>
          </Button>
          <Button onClick={() => window.location.href = "#Roadmap"} className="w-full">
            <Typography className="font-link-monst" variant="h8" color="#F6BE64">
                    - SOCIALS - 
            </Typography>
          </Button>
        </Box>
      </Modal>

        </Toolbar>


    </AppBar>
  )
}