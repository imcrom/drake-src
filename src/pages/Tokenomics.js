import React from 'react'
import '../App.css'
import { Player } from '@lottiefiles/react-lottie-player'
import { Typography } from '@mui/material'


export const Tokenomics = () => {
  return (
    <div className='Tokenomics'> 

    <div id="Tokenomics" className="w-[50%] md:w-[70%] sm:w-[80%] m-12 text-center self-center">
        <Typography className='font-link-monst pt-4 w-[90%]' variant='h8' color='#efefef'>
        This revolutionary tool utilizes natural language processing and advanced algorithms to interpret your input and generate original tracks in line with the same quality of music produced by the Grammy Award-winning artist. This "creative robot" is perfect for anyone looking to add some flare to their content or just have fun experimenting!        </Typography>
    </div>

    <div className="text-center self-center">
    <Player src='https://assets9.lottiefiles.com/packages/lf20_vixkj2dq.json' autoplay loop className='w-[100%]'/>

    </div>

    <div className="Tax">
          <div className="w-[50%] h-[100%] border-r-2 border-[#F6BE64] md:m-auto sm:m-auto md:border-b-2 md:border-r-0 sm:border-r-0 sm:border-b-2 sm:m-auto" >
                <Typography sx={{ fontSize: '20vw' }} className="text-center" variant='h1' color="#F6BE64">
                    4/4%
                </Typography>

            </div>
            <div className="w-[50%] h-[100%] md:m-auto sm:m-auto sm:m-auto">
                <Typography sx={{ fontSize: '20vw'}} className="text-center" variant='h1' color="#F6BE64">
                    TAX
                </Typography>
            </div>      
    </div>


    </div>
  )
}
