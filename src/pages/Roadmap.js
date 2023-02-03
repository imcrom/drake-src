import { Typography, Box, Stepper, Step, StepLabel, StepContent, Button} from '@mui/material'
import React from 'react'
import '../App.css'
import { Player } from '@lottiefiles/react-lottie-player';

const steps = [
    {
      label: 'Phase 1',
      description: `1. Socials Launch\n
                2. Token Launch\n
                3. Guerilla Marketing\n`,
    },
    {
      label: 'Phase 2',
      description: `1. Coingecko and CMC Listing\n
      2. Beta for the Telegram bot\n
      3. Launch of the final Telegram bot and website app\n`,
    },
    {
      label: 'Phase 3',
      description: `1. CEX Listings\n
      2. Upload of application to appstores for mobile\n
      3. More fun tools AI Technology development\n`,
    },
  ];

export const Roadmap = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };

  return (
    <div id='Roadmap' className="Roadmap-mob">
      <div className="flex flex-col w-[33%] pl-8 md:w-full sm:w-full md:items-center sm:pl-0 md:pl-0">
      <div className='pt-14 mb-14 border-b-2 w-[50%] md:text-center sm:text-center md:border-b-0 sm:border-b-0 md:mb-4 sm:mb-4 sm:w-full md:w-full'>
            <Typography className="font-link" variant="h2" color="#F6BE64">
                ROADMAP
            </Typography>            
        </div>
              <Box sx={{ maxWidth: 400}}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography className='font-link-monst' color='#efefef' variant="p">Last step</Typography>
                      ) : null
                    }
                  >
                    <Typography className='font-link-italic' variant='h4' color='#F6BE64'>{step.label}</Typography>
                  </StepLabel>
                  <StepContent>
                  <Typography className='font-link-monst' variant='p' color='#efefef' dangerouslySetInnerHTML={{ __html: step.description.replace(/\n/g, '<br>') }} />
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          style={{ backgroundColor: '#F6BE64', color: '#efefef' }}
                          variant="contained"
                          color='primary'
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          style={{color: '#efefef' }}

                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (

                <Button style={{ backgroundColor: '#F6BE64', color: '#efefef' }} onClick={handleReset} sx={{ mt: 1, mr: 1, }}>
                  Reset
                </Button>

            )}
          </Box>

      </div>

      <div className="flex flex-col w-[33%] items-center md:w-full sm:w-full">
        <div className='pt-14'>
              <Typography className="font-link" variant="h4" color="#F6BE64">
                  What are we building?
              </Typography>            
          </div>

          <div className='text-justify md:pl-24 md:pr-24 sm:pl-12 sm:pr-12 justify-center items-center mt-4'>
              <Typography className="font-link-monst" variant="p" color="#efefef">
                Using text to Drake music Artificial Intelligence technology, it is possible to develop applications such as automated lyric generation, music recommendation systems, and more detailed artist analysis. Additionally, AI-driven algorithms can be used to extract musical features from Drake's songs in order to generate informative playlists that contain elements similar to his style. Further development could bring us closer to being able to detect attributes of an artist’s style and use machine learning models built upon those characteristics in order to create cover versions of songs incorporating those same stylistic choices. Ultimately, the possibilities are limitless and deeper exploration over the course of the coming years may yield some unexpected and ground breaking results in terms of how AI can be used within the domain of music production.
              </Typography>
          </div>
      </div>

      <div className="flex flex-col mr-auto ml-auto pt-14">
        <Button href='https://twitter.com/drakeaierc' className='flex flex-col'>
          <Player autoplay loop src="https://assets3.lottiefiles.com/packages/lf20_hdy0htc2.json" style={{ height: '200px', width: '300px', }}></Player>
          <Typography className="font-link text-center" variant="h6" color="#efefef">
          https://twitter.com/drakeaierc
            </Typography>
        </Button>


        <Button href='https://t.me/drakeAI' className='flex flex-col'>
          <Player autoplay loop src="https://assets10.lottiefiles.com/packages/lf20_pqnhnube.json" style={{ height: '200px', width: '300px', }}></Player>
          <Typography className="font-link text-center sm:pb-24 md:pb-24" variant="h6" color="#efefef">
          https://t.me/drakeAI
            </Typography>          
        </Button>



      </div>

    </div>
  )
}
