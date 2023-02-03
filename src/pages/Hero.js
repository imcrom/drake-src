import React from 'react'
import '../App.css'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Player } from '@lottiefiles/react-lottie-player';

export const Hero = () => {
  return (
<div className='Hero'>
  <div className="flex flex-col pt-8 pl-24 w-[50%] md:pl-0 m-auto md:w-full">
    <Typography className="font-link pl-4 md:pl-0 md:text-center" variant="h8" color="#efefef">
      ⎯WELCOME!⎯
    </Typography>
    <Typography className='font-link-italic text-2xl w-90 md:text-center' variant='h1' color='#F6BE64'>
      DRAKE AI
    </Typography>
    <Typography className='font-link-monst pt-4 text-base w-90 md:text-center md:pl-24 md:pr-24 sm:pl-12 sm:pr-12' variant='h8' color='#efefef'>
      Drake AI is an artificial intelligence technology that has the power to turn your ideas into Drake songs! With this innovative technology, you can take any idea or concept and transform it into a catchy hip-hop track using Drake's iconic flow and beat. 
    </Typography>
    <Typography className='font-link-italic pt-8 md:text-center' variant='h8' color='#F6BE64'>
      MORE INFORMATION BELOW
    </Typography>
    <Player src='https://assets5.lottiefiles.com/private_files/lf30_fah4ouxp.json' autoplay loop className='w-20 sm:w-32'/>
  </div>

  <div className="justify-center items-center w-[50%] md:w-[50%] sm:w-[50%] m-auto">
    <Box
      component="img"
      sx={{
        margin: 'auto',
        minWidth: '200px',
        maxWidth: '600px',
        maxHeight: '600px',
      }}
      src={require('../images/logo.png')}
      className='w-[75%]'
    />
  </div>
</div>

  )
}
