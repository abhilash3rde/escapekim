import React, { useState } from 'react'
import { Parallax, useParallax } from 'react-scroll-parallax';
// import AOS from 'aos';
import 'aos/dist/aos.css';


export const ActFirstDesktop = () => {
  const [enter, setEntered] = useState(false)
  const [progress, setProgress] = useState(null)
  console.log(enter, 'enter')
  const parallax = useParallax({
    // easing: 'easeOutQuad',
    // scale:[2, 1],
    // translateX: [0, 100, ],
    translateX: [-100, 0, 'easeOutExpo'],
  });


  const parallax1 = useParallax({
    translateX: [25, 0, 'easeOutExpo'],
    speedX: 100
  });

  // const props = { rootMargin: { top: 100, } };
  const parallax3 = useParallax({
    translateY: [50, 0, 'easeOutExpo'],
  });
  const parallax4 = useParallax({
    translateY: [75, 0, 'easeOutExpo'],
  });
  const parallax0 = useParallax({
    translateY: [0, -50, 'easeInExpo'],
  });

  // const text1 = useParallax({
  //   translateX: [-100, 0, 'easeOutExpo'],
  // });
  // const text2 = useParallax({
  //   translateX: [-100, 0, 'easeOutExpo'],
  // });

  // const text3 = useParallax({
  //   translateX: [-100, 0, 'easeOutExpo'],
  // });

  const text5 = useParallax({
    translateX: [-75, 0, 'easeOutExpo']

  })

  const text6 = useParallax({
    translateX: [-75, 0, 'easeOutExpo']
  })
  const text7 = useParallax({
    translateX: [-75, 0, 'easeOutExpo']
  })
  const text8 = useParallax({
    translateX: [100, 0, 'easeOutExpo']
  })
  const text9 = useParallax({
    translateX: [100, 0, 'easeOutExpo']
  })
  const text10 = useParallax({
    translateX: [100, 0, 'easeOutExpo']
  })

  const textEnd = useParallax({
    translateX: [25, 0, 'easeOutExpo'],
  });

  const text11 = useParallax({
    translateX: [-100, 0, 'easeOutExpo'],
  });

  const text12 = useParallax({
    translateX: [-100, 0, 'easeOutExpo'],
  });

  const cloud = useParallax({
    scale: [1.5, 1],
    easing: "easeInQuad"

  });

  const warmHoleimg = useParallax({
    translateY: [75, 0, 'easeOutExpo'],
  });
  return (

    <div className='font-classic overflow-hidden  scroll-smooth ' >
      <div className="bg-[url('/DesktopImages/background_02.jpg')] h-[100%] bg-cover  pb-[200px] bg-no-repeat bg-fixed  " >

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
              <img src={'/DesktopImages/Cloud01.png'} alt="" className=' object-contain  duration-[2000ms]' />
            </Parallax>
            <div className='flex justify-start items-center '>
              <img src={'DesktopImages/silhouette-dude@2x.png'} alt="" className='h-[62px] w-[66px] z-50 absolute left-[47%]  object-contain duration-100' ref={cloud.ref} />
            </div>
          </div>
          <div className='absolute top-[-260px] grid grid-cols-2 justify-end' >

            <div className='col-start-2 flex justify-end'>
              <Parallax
                scale={[1.5, 1]}
                easing="easeInQuad"
              >
                <img src={'/DesktopImages/Cloud02.png'} alt="" className=' object-contain duration-[2000ms]' />
              </Parallax>
            </div>
          </div>

        </div>


        <div className='flex  justify-center '>
          <div className=' w-[80%] ' >
            <div className='duration-300'
              ref={parallax0.ref}
            >
              <div className=' relative flex  grid grid-cols-1 ' >
                <img src={'/DesktopImages/cs01.png'} alt="" className='w-full h-[362px] z-50   duration-200 ' ref={parallax.ref} />

                <div className=' flex justify-center ' >
                  <div className='w-[80%] grid  grid-cols-2 absolute  top-[-20px] z-50 duration-[2000ms]'

                  //ref={text1.ref}

                  >
                    <div className=' px-2 py-2 z-50 border-[#070707] w-[275px] h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>He’s not going to make it…</span>
                    </div>
                  </div>

                </div >

                <div className=' flex justify-center '>
                  <div className='w-[95%] grid  grid-cols-2 absolute  top-[28px] duration-[2000ms] z-50'
                  //ref={text2.ref} 
                  >
                    <div className=' px-2 py-2 z-50 border-[#070707] w-[34.562rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>
                        You know that is not for you to decide… that is up to him.
                      </span>
                    </div>
                  </div>
                </div>
                <div className=' flex justify-center '>
                  <div className='w-[95%] grid  grid-cols-2 absolute  top-[76px] z-50 duration-[2000ms]'
                  // ref={text3.ref}
                  >
                    <div className=' px-2 py-2 z-50 border-[#070707] w-[10.688rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>
                        There is hope…
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Parallax
                className={enter ? 'textEnter-transition' : 'textOut-transition'}
                onEnter={() => setEntered(true)}
                onExit={() => setEntered(false)}
              >
                <div className=' flex justify-center ease-in-out ' >
                  <div className='w-[80%] grid  grid-cols-3 mt-2 z-50 '  >
                    <div className='col-span-2 px-2 py-2 z-50 border-[#070707]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>He’s fat and soft. a trigger happy child is what he is. he’s not worked a day in his life. how do you suppose he’s to survive this game we’re set for him…..</span>
                    </div>
                  </div>

                </div >
              </Parallax>
            </div>


            <div className=' relative flex justify-center mt-6 duration-400'>
              <div className='w-[90%] grid  grid-cols-1 ' >
                <img src={'/DesktopImages/cs-jump02.png'} alt="" className='h-[268px] duration-200' ref={parallax1.ref} />

                <div className=' flex justify-center '>
                  <div className='w-[95%] grid  grid-cols-2 absolute  top-[3px] z-50 duration-[2000ms]' ref={text5.ref}>
                    <div className=' px-2 py-2 z-50 border-[#070707] w-[18.375rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>
                        YOU KNOW why he’s like this?
                      </span>
                    </div>
                  </div>
                </div>

                <div className='my-2  flex justify-center '>
                  <div className='w-[80%] grid  grid-cols-2 absolute  top-[50px] z-50  duration-[2000ms]' ref={text6.ref}>
                    <div className=' px-2 py-2 z-50 border-[#070707] w-[15.25rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>Of Course i know why….</span>
                    </div>
                  </div>

                </div >
                <div className=' flex justify-center '>
                  <div className='w-[95%] grid  grid-cols-2 absolute  top-[95px]  z-50 duration-[2000ms]' ref={text7.ref}>
                    <div className=' px-2 py-2 z-50 border-[#070707] w-[13.813rem]  h-[42px] items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>
                        He Won’t remember….
                      </span>
                    </div>
                  </div>
                </div>

                <div className=' absolute top-[9.6875rem] right-0 z-50 duration-[2000ms]' ref={text8.ref}>
                  <div className=''>
                    <div className='  w-[27.812rem]  h-[4.5rem] px-2 py-2 z-50 border-[#070707]  text-right items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>That’s enough from you two. he has help. he won’t survive without it. none of us would. all seven of our destinies are linked…</span>
                    </div>
                  </div>
                </div>
                <div className=' absolute top-[14.6rem] right-0  z-50 duration-[2000ms]' ref={text9.ref} >
                  <div className=''>
                    <div className='w-[26.4375rem] h-[3.5625rem] px-2 py-2 z-50 border-[#070707] ml-4  text-right items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                      <span className='text-[14px] uppercase font-normal '>You don’t have to remind us, we all know the consequences if he fails…</span>
                    </div>
                  </div>
                </div>
              </div >
            </div>


            <div className='mb-2  ' >
              <div className='w-[100%] grid   grid-cols-4 mt-4  duration-[2000ms] z-50 ' ref={text10.ref}>
                <div className=' col-start-6 px-2 py-2 h-[2.625rem]  w-[17.3125rem]  justify-end z-50 border-[#070707]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                  <span className='text-[14px] text-right uppercase font-normal '>… and there’s eights of us</span>
                </div>
              </div>

            </div >

            <div className=' relative flex  grid grid-cols-1 duration-200 ' ref={parallax3.ref}>
              <img src={'/DesktopImages/cs03last.png'} alt="" className='w-full h-[23.375rem] z-50' />



              <div className='my-2 flex justify-center'>
                <div className='w-[80%] grid  grid-cols-3 absolute  top-[0px] z-50 duration-[2000ms]' ref={text11.ref}>
                  <div className='col-span-2 px-2 py-2 z-50 border-[#070707]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                    <span className='text-[14px] uppercase font-normal '>fuck him. he’s a parasite. he’s not playing for his evolution… he plays for his destruction. <br /><br /> chaos is all he knows.</span>
                  </div>
                </div>
              </div>

              <div className='my-2  flex justify-center '>
                <div className='w-[95%] grid  grid-cols-2 absolute  bottom-[-15px] z-50 duration-[2000ms]' ref={text12.ref}>
                  <div className=' px-2 py-2 z-50 border-[#070707] w-[34.625rem]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                    <span className='text-[14px] uppercase font-normal '>
                      yes, he’s an asshole, but this is how its always been… <br /> sometimes we need asshole to teach us. <br /><br /> without shadow, light has nothing to reflect from. <br /> without shadow, none of us remember why we’re here. <br /><br /> This life is about a game… <br /> but only a few of us know how to unlock the cheat codes. <br /><br /> AND MAYBE HE WILL TOO…
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid  grid-cols-1  duration-[2000ms] ' ref={parallax4.ref}>
          <div className=' mt-[100px] mb-4 flex justify-center'>
            <div className='   px-2 h-[42px] w-[21.5rem] py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
              <span className='text-[14px] text-center uppercase font-normal '>well, that is pricey why we built….</span>
            </div>
          </div>
        </div >

        <div className=' relative flex w-full '>
          <div className='w-[40%]' >
            <Parallax
              scale={[1.3, 1]}
              easing="easeInQuad"
            >
              <img src={'/DesktopImages/Cloud03.png'} alt="" className='h-[37.5rem] w-[43.25rem] bg-transparent  object-contain duration-[2000ms]' />
            </Parallax>
          </div>

          <div className='w-[20%] flex-col  flex justify-center items-center  mt-[10.937rem]'>
            <Parallax
              scaleX={[1.2, 1]}
              easing="easeInQuad"
            >
              <img src={'/DesktopImages/the_tesseract.png'} alt="" className=' h-[4.25rem] w-[15.375rem] bg-transparent col-start-2 object-contain duration-[2000ms]' />
            </Parallax>
            <Parallax
              scaleX={[1.2, 1]}
              easing="easeInQuad"
            >
              <img src={'/DesktopImages/silhouette-dude01.png'} alt="" className=' h-[1.375rem] z-10 w-[1.5rem] bg-transparent object-contain duration-[2000ms]' />
            </Parallax>
            <div className=' absolute top-[385px] grid grid-cols-1  flex justify-center ' >
              <Parallax
                scale={[1, 0]}
                easing='easeInQuad'
              // translateY={[20 , 0 , 'easeInExpo']}
              >
                <img src={'/DesktopImages/the-star.png'} alt="" className='w-[44.812rem] h-[58.375rem] bg-transparent z-50 opacity-1 object-contain duration-[2000ms]' />
              </Parallax>
            </div>
          </div>

          <div className='flex justify-end w-[40%]' >
            <Parallax
              scale={[1.3, 1]}
              easing="easeInQuad"
            >
              <img src={'/DesktopImages/Cloud04.png'} alt="" className='h-[34.625rem] w-[39.875rem] bg-transparent col-start-2  object-contain duration-[2000ms]' />
            </Parallax>
          </div>
        </div>

        <div className='relative flex justify-center items-center w-[100%]  duration-700' ref={warmHoleimg.ref}>
          {/* <Parallax
            translateY={[100, 0, 'easeOutExpo']}
            easing="easeInQuad"
          > */}
          <img src={'/DesktopImages/Wormhole_03.png'} alt="" className='w-full h-[1080px] opacity-1 bg-transparent duration-[2000ms] ' />
          {/* </Parallax> */}
          <div className='absolute bottom-[105px] grid w-[80%] grid-cols-3 duration-[2000ms] z-50' ref={textEnd.ref}>
            <div className='col-start-3   flex justify-start'>
              <div className='   px-2 h-[42px] w-[12rem] py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                <span className='text-[14px] text-center uppercase font-normal '>TO be continued….</span>
              </div>
            </div>
          </div >
        </div>



      </div>
    </div>
  )
}
