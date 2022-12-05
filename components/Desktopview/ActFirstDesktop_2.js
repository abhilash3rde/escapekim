import React, { useEffect, useState } from 'react'
import { Parallax, useParallax } from 'react-scroll-parallax';

// import AOS from 'aos';
// import 'aos/dist/aos.css';


export const ActFirstDesktop02 = () => {
  const [enter, setEntered] = useState(false)
  const [progress, setProgress] = useState(null)







  return (

    <div className='font-classic overflow-hidden  scroll-smooth ' >
      <div className="bg-[url('/DesktopImages/background_02.jpg')] h-[100%] bg-cover bg-no-repeat bg-fixed  " >

        <div className='grid grid-cols-2 gap-10 w-[100%] container mx-auto  '>
          <div className=' flex text-center items-center mt-4' data-aos="fade-up">
            <img src={'/DesktopImages/Act01.png'} alt="" className=' bg-top  to-transparent w-[84px] h-[38px]' />
          </div>
          <div className='flex justify-end text-center items-center mt-4 gap-2'>
            <span>
              <img src={'/DesktopImages/Discord.svg'} alt="" className='w-[57px] h-[57px]' />
            </span>
            <span>
              <img src={'/DesktopImages/Twitter.svg'} alt="" className='w-[57px] h-[57px]' />
            </span>
          </div>
        </div>


        <div className='flex justify-center w-full'>
          <img src={'/DesktopImages/Billboard_fullSize.png'} alt="" className='' />
        </div>

        <div className=' relative flex  justify-between w-[100%] gap-1'  >
          <div className='grid grid-cols-2 w-[100%]'>
            <Parallax
              scale={[1.5, 1]}
              easing="easeInQuad"
            >
              <img src={'/DesktopImages/Cloud01.png'} alt="" className=' object-contain   ' />
            </Parallax>
            <div className='flex justify-start items-center '>
              <img src={'DesktopImages/silhouette-dude@2x.png'} alt="" className='h-[62px] w-[66px]  z-50 absolute left-[47%]  object-contain duration-100' />
            </div>
          </div>
          <div className='absolute top-[-260px] grid grid-cols-2 justify-end' >

            <div className='col-start-2 flex justify-end'>
              <Parallax
                scale={[1.5, 1]}
                easing="easeInQuad"
              >
                <img src={'/DesktopImages/Cloud02.png'} alt="" className=' object-contain  ' />
              </Parallax>
            </div>
          </div>

        </div>


        <div className='flex  justify-center '>
          <div className=' w-[80%] ' >
            <div
              // className='leftmove'
              data-aos="new-animation"
              // data-aos-offset="100"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            // data-aos-anchor-placement="left-center"
            >
              <div>
                <div className=' relative  grid grid-cols-1 ' >
                  <img src={'/DesktopImages/cs01.png'} alt="" className='w-full h-[362px] z-50  ' />

                  <div className=' flex justify-center ' >
                    <div className='w-[80%] grid  grid-cols-2 absolute  top-[-20px] z-50 '>
                      <div className=' px-2 py-2 z-50 border-[#070707] w-[275px] h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                        <span className='text-[14px] uppercase font-normal '>He’s not going to make it…</span>
                      </div>
                    </div>

                  </div >

                  <div className=' flex justify-center '



                  >
                    <div className='w-[95%] grid  grid-cols-2 absolute  top-[28px] z-50'  >
                      <div className=' px-2 py-2 z-50 border-[#070707] w-[34.562rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                        <span className='text-[14px] uppercase font-normal '>
                          You know that is not for you to decide… that is up to him.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=' flex justify-center '>
                    <div className='w-[95%] grid  grid-cols-2 absolute  top-[76px] z-50 '>
                      <div className=' px-2 py-2 z-50 border-[#070707] w-[10.688rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                        <span className='text-[14px] uppercase font-normal '>
                          There is hope…
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Parallax
                className={enter ? 'textEnter-transition' : 'textOut-transition'}
                onEnter={() => setEntered(true)}
                onExit={() => setEntered(false)}
              > */}
                <div className=' flex justify-center ease-in-out ' >
                  <div className='w-[80%] grid  grid-cols-3 mt-2 z-50 '  >
                    <div className='col-span-2 px-2 py-2 z-50 border-[#070707]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>He’s fat and soft. a trigger happy child is what he is. he’s not worked a day in his life. how do you suppose he’s to survive this game we’re set for him…..</span>
                    </div>
                  </div>

                </div >
                {/* </Parallax> */}
              </div>
            </div>


            <div
              // className='leftmove'
              className=' relative  RIghtmove flex justify-center pt-6 pb-6 duration-400'
              data-aos="new-animation-right"
              // data-aos-offset="100"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div>
                <div className='w-[90%] grid  grid-cols-1 ' >
                  <img src={'/DesktopImages/cs-jump02.png'} alt="" className='h-[268px] ' />

                  <div className=' flex justify-center '>
                    <div className='w-[95%] grid  grid-cols-2 absolute  top-[3px] z-50 ' >
                      <div className=' px-2 py-2 z-50 border-[#070707] w-[18.375rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                        <span className='text-[14px] uppercase font-normal '>
                          YOU KNOW why he’s like this?
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='my-2  flex justify-center '>
                    <div className='w-[80%] grid  grid-cols-2 absolute  top-[50px] z-50   ' >
                      <div className=' px-2 py-2 z-50 border-[#070707] w-[15.25rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                        <span className='text-[14px] uppercase font-normal '>Of Course i know why….</span>
                      </div>
                    </div>

                  </div >
                  <div className=' flex justify-center '>
                    <div className='w-[95%] grid  grid-cols-2 absolute  top-[95px]  z-50  ' >
                      <div className=' px-2 py-2 z-50 border-[#070707] w-[13.813rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                        <span className='text-[14px] uppercase font-normal '>
                          He Won’t remember….
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=' absolute top-[9.6875rem] right-0 z-50  '  >
                    <div className=''>
                      <div className='  w-[27.812rem]  h-[4.5rem] px-2 py-2 z-50 border-[#070707]  text-right items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                        <span className='text-[14px] uppercase font-normal '>That’s enough from you two. he has help. he won’t survive without it. none of us would. all seven of our destinies are linked…</span>
                      </div>
                    </div>
                  </div>
                  <div className=' absolute top-[14.6rem] right-0  z-50  '   >
                    <div className=''>
                      <div className='w-[26.4375rem] h-[3.5625rem] px-2 py-2 z-50 border-[#070707] ml-4  text-right items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                        <span className='text-[14px] uppercase font-normal '>You don’t have to remind us, we all know the consequences if he fails…</span>
                      </div>
                    </div>
                  </div>
                </div >



                <div className='mb-2  ' >
                  <div className='w-[100%] grid   grid-cols-4 mt-4    z-50 '  >
                    <div className=' col-start-6 px-2 py-2 h-[2.625rem]  w-[17.3125rem]  justify-end z-50 border-[#070707]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] text-right uppercase font-normal '>… and there’s eights of us</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className=' relative leftmove  grid grid-cols-1 duration-200 '
              data-aos="new-animation"
              // data-aos-offset="100"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div>
                <img src={'/DesktopImages/cs03last.png'} alt="" className='w-full h-[23.375rem] z-50' />
                <div className='my-2 flex justify-center'>
                  <div className='w-[80%] grid  grid-cols-3 absolute  top-[0px] z-50  '  >
                    <div className='col-span-2 px-2 py-2 z-50 border-[#070707]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>fuck him. he’s a parasite. he’s not playing for his evolution… he plays for his destruction. <br /><br /> chaos is all he knows.</span>
                    </div>
                  </div>
                </div>

                <div className='my-2  flex justify-center '>
                  <div className='w-[95%] grid  grid-cols-2 absolute  bottom-[-15px] z-50  '  >
                    <div className=' px-2 py-2 z-50 border-[#070707] w-[34.625rem]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>
                        yes, he’s an asshole, but this is how its always been… <br /> sometimes we need asshole to teach us. <br /><br /> without shadow, light has nothing to reflect from. <br /> without shadow, none of us remember why we’re here. <br /><br /> This life is about a game… <br /> but only a few of us know how to unlock the cheat codes. <br /><br /> AND MAYBE HE WILL TOO…
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className='grid  grid-cols-1    '  >
          <div className=' mt-[100px] mb-4 flex justify-center'>
            <div className='   px-2 h-[42px] w-[21.5rem] py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
              <span className='text-[14px] text-center uppercase font-normal '>well, that is pricey why we built….</span>
            </div>
          </div>
        </div >

        <div className=' relative customsf w-full '>
          <div className='w-full ' >
            <Parallax
              scale={[1.5, .8]}
              easing="easeInQuad"
            >
              <img src={'/DesktopImages/Cloud03.png'} alt="" className='h-[37.5rem] w-[43.25rem] bg-transparent  object-contain  ' />
            </Parallax>
          </div>

          <div className='w-full flex-col  flex justify-center items-center  mt-[10.937rem]'>
            <Parallax
              scaleX={[1.0, .8]}
              easing="easeInQuad"
            >
              <img src={'/DesktopImages/the_tesseract.png'} alt="" className=' h-[4.25rem] w-[15.375rem] bg-transparent col-start-2 object-contain  ' />
            </Parallax>
            <Parallax
              scaleX={[1.2, 1]}
              easing="easeInQuad"
            >
              <img src={'/DesktopImages/silhouette-dude01.png'} alt="" className=' h-[1.375rem] z-10 w-[1.5rem] bg-transparent object-contain  ' />
            </Parallax>
            <div className=' absolute top-[385px] grid grid-cols-1 justify-center z-[100] ' >
              <Parallax
                scale={[.9, .20]}
                easing='easeInQuad'
              // translateY={[20 , 0 , 'easeInExpo']}
              >
                <img src={'/DesktopImages/the-star.png'} alt="" className='w-[44.812rem] h-[58.375rem] bg-transparent z-50 opacity-1 object-contain  ' />
              </Parallax>


            </div>
          </div>

          <div className='flex justify-end w-full' >
            <Parallax
              scale={[1.5, .7]}
              easing="easeInQuad"
            >
              <img src={'/DesktopImages/Cloud04.png'} alt="" className='h-[34.625rem] w-[39.875rem] bg-transparent col-start-2  object-contain  ' />
            </Parallax>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-[100%] bg-[url('/DesktopImages/Wormhole_03.png')] h-[900px] bg-cover bg-center "   >
          {/* <Parallax
            scale={[.5, 1]}
            // translateY={[100, 0, 'easeOutExpo']}
            easing="easeInQuad"
          > */}
          {/* <img src={'/DesktopImages/Wormhole_03.png'} alt="" className='w-full h-[1080px] opacity-1 bg-transparent   ' /> */}
          {/* </Parallax> */}
          <div className='absolute bottom-[105px] grid w-[80%] grid-cols-3   z-50'  >
            <div className='col-start-3   flex justify-start'>
              <div className='   px-2 h-[42px] w-[12rem] py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                <span className='text-[14px] text-center uppercase font-normal '>TO be continued….</span>
              </div>
            </div>
          </div >
        </div>



      </div>
    </div >
  )
}
