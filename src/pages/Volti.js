import React from 'react'
import '../App.css'
import { Typography } from '@mui/material'
import Iframe from 'react-iframe'

export const Volti = () => {
  return (

      <div className="flex flex-col justify-center">
        <div className='text-center mt-4'>
            <Typography className='font-link text-2xl w-full md:text-center' variant='h2' color='#F6BE64'>
            VOLTICHANGE
          </Typography>          
        </div>

        <div className="flex flex-col ">

          <Iframe url="https://voltichange.net/api/widget/?chain=1&darktheme=true&tokenin=Native&tokenout=0xe9b2938b994F0B43cDCE0ef6A3d0673610e09E96&slippage=0.5"
          width="500px"
          height="460px"
          id=""
          className="mt-12 self-center"
          display="flex"
          position="relative"/>

        </div>

        <div className='text-center mt-4'>
            <Typography className='font-link text-2xl' variant='p' color='#efefef'>
            Burn $DRAI and connect to $VOLT Whales by using VOLTICHANGE
          </Typography>          
        </div>


      </div>

  )
}
