import React from 'react'
import { Parallax, useParallax } from 'react-scroll-parallax';

export const ActFirstMobile = () => {

    const image01 = useParallax({
        translateX: [-100, 0, 'easeOutExpo'],
    });

    const text01 = useParallax({
        translateX: [-100, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });
    const text02 = useParallax({
        translateX: [-120, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });
    const text03 = useParallax({
        translateX: [-100, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });
    const text04 = useParallax({
        translateX: [-120, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });
    const image02 = useParallax({
        translateX: [100, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.5],
    });
    const text05 = useParallax({
        translateX: [-100, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });
    const text06 = useParallax({
        translateX: [-100, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });
    const text07 = useParallax({
        translateX: [-100, 0, 'easeOutExpo'],
        easing: [0, 1, 1, 0.2],
    });

    const text08 = useParallax({
        translateX: [100, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });
    const text09 = useParallax({
        translateX: [100, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });
    const text10 = useParallax({
        translateX: [100, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });

    const fadeIn = useParallax({
        translateY: [25, 0, 'easeOutExpo'],
    });
    const fadeOut = useParallax({
        translateY: [0, -25, 'easeInExpo'],
    });
    const text11 = useParallax({
        translateX: [-100, 0, 'easeOutExpo'],
        easing: [0.2, 1, 1, 0.2],
    });

    const text12 = useParallax({
        translateX: [-100, 0, 'easeOutExpo'],
        easing: [0.4, 1, 1, 1],
    });

    const text13 = useParallax({
        translateY: [75, 0, 'easeOutExpo'],
    });


    return (
        <div className='font-classic overflow-hidden'>
            <div className="bg-[url('/DesktopImages/background_02.jpg')] h-[100%] bg-cover bg-no-repeat bg-fixed bg-center " >
                <div className='grid grid-cols-2 gap-10 w-[100%] container mx-auto '>
                    <div className=' flex text-center items-center mt-4'>
                        <img src={'/DesktopImages/Act01.png'} alt="" className=' bg-top  to-transparent w-[62px] h-[28px]' />
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

                <div className='grid grid-cols-1 '>
                    <img src={'/MobileImages/Billboard_mobile.png'} alt="houdini" class="" />
                </div>

                <div className='flex  justify-center gird  grid-cols-1 '>
                    <Parallax
                        scale={[1, 1.8]}
                        easing="easeInQuad"
                    >
                        <div className='h-[24px] w-[26px] '>
                            <img src={'MobileImages/silhouette-dude.png'} alt="" className=' mt-2' />
                        </div>
                    </Parallax>
                </div>

                <div className='flex  justify-center '>
                    <div className=' w-[90%] ' >

                        <div className="  duration-300 " ref={fadeOut.ref}>


                            <div className=' relative flex  grid grid-cols-1 mt-20 '>

                                <img src={'/MobileImages/cs01_mobile.png'} alt="" className='w-full h-[267px] duration-300' ref={image01.ref} />

                                <div ref={text01.ref} className=' duration-[3000ms] grid grid-cols-1  absolute top-[-8px] left-[25px] w-[100%] overflow-hidden'>
                                    <div className='  px-[0.6rem] py-[0.15rem] z-50 border-[#070707]  text-center items-center bg-[#FFE5A3] border-2 opacity-1 w-[62%] object-contain flex  flex-nowrap '>
                                        <span className=' text-[10px]   uppercase font-normal tracking-normal'>He’s not going to make it…</span>
                                    </div>
                                </div>

                                <div ref={text02.ref} className=' duration-[3000ms] grid grid-cols-1  absolute top-[18px] left-[25px] w-[100%] overflow-hidden'>
                                    <div className='  px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707]  items-center bg-[#FFE5A3] border-2 opacity-1 w-[80%]  flex  flex-nowrap '>
                                        <span className='text-[10px] uppercase font-normal tracking-normal'>You know that is not for you to decide… that is up to him.</span>
                                    </div>
                                </div>
                                <div ref={text03.ref} className='duration-[3000ms] grid grid-cols-1 absolute top-[59px] left-[25px]  w-[100%] overflow-hidden'>
                                    <div className='  px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707]   items-center bg-[#FFE5A3] border-2 opacity-1 w-[40%]  flex  flex-nowrap'>
                                        <span className='text-[10px] uppercase font-normal tracking-normal'>There is hope…</span>
                                    </div>
                                </div>

                            </div>


                            <div className='my-2  flex justify-center '>
                                <div ref={text04.ref} className=' duration-[3000ms] w-[90%] grid  grid-cols-1'>
                                    <div className=' px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                                        <span className='text-[10px] uppercase font-normal tracking-normal'>He’s fat and soft. a trigger happy child is what he is. he’s not worked a day in his life. how do you suppose he’s to survive this game we’re set for him…..</span>
                                    </div>
                                </div>

                            </div >

                        </div>

                        <div className=' relative flex  grid grid-cols-1 mt-3' >
                            <img src={'/MobileImages/cs02_mobile.png'} alt="" className='w-full h-[267px]  duration-300' ref={image02.ref} />
                            <div className='grid grid-cols-1 w-[100%] gap-1 col overflow-hidden'>
                                <div ref={text05.ref} className='duration-[3000ms] grid grid-cols-1  absolute right-0 left-[25px] top-[-8px] w-[100%]'>
                                    <div className=' px-[0.6rem] py-[0.15rem] object-contain  z-50 border-[#070707]   items-center bg-[#FFE5A3] border-2 opacity-1 w-[65%]  flex  flex-nowrap '>
                                        <span className=' text-[10px]  uppercase font-normal tracking-normal'>YOU KNOW why he’s like this?</span>
                                    </div>
                                </div>
                                <div ref={text06.ref} className='duration-[3000ms] grid grid-cols-1  absolute right-0 left-[25px] top-[22px] w-[100%]'>
                                    <div className='  px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707]  items-center bg-[#FFE5A3] border-2 opacity-1 w-[55%]  flex  flex-nowrap '>
                                        <span className='text-[10px] uppercase font-normal tracking-normal'>Of Course i know why….</span>
                                    </div>
                                </div>
                                <div ref={text07.ref} className='duration-[3000ms] grid grid-cols-1  absolute right-0 left-[25px] top-[50px] w-[100%]'>
                                    <div className='  px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707]   items-center bg-[#FFE5A3] border-2 opacity-1 w-[45%]  flex  flex-nowrap'>
                                        <span className='text-[10px] uppercase font-normal tracking-normal'>He Won’t remember….</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='my-2  flex justify-center'>
                            <div ref={text08.ref} className='w-[90%] grid  grid-cols-1 duration-[3000ms]'>
                                <div className='px-[0.6rem] py-[0.15rem] object-contain justify-end z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                                    <span className='text-[10px] text-right uppercase font-normal tracking-normal'>That’s enough from you two. he has help. he won’t survive without it. none of us would. all seven of our destinies are linked…</span>
                                </div>
                            </div>

                        </div >
                        <div className='my-2  flex justify-center'>
                            <div ref={text09.ref} className='w-[90%]  duration-[3000ms] flex justify-end'>
                                <div className='col-start-2 justify-end w-[90%] px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                                    <span className='text-[10px] text-right uppercase font-normal tracking-normal'>You don’t have to remind us, we all know the consequences if he fails…</span>
                                </div>
                            </div>

                        </div >
                        <div className='my-2  flex justify-center'>
                            <div ref={text10.ref} className='w-[90%] duration-[3000ms] flex justify-end'>
                                <div className='w-[70%] justify-end px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                                    <span className='text-[10px] text-right uppercase font-normal tracking-normal'>… and there’s eights of us</span>
                                </div>
                            </div>
                        </div >



                        <div className=' relative flex  grid grid-cols-1 mt-[45px]  duration-300' ref={fadeIn.ref}>
                            <img src={'/MobileImages/cs03_mobile.png'} alt="" className='w-full h-[267px]' />

                            <div className='my-2 flex justify-center'>
                                <div className='w-[90%] grid  grid-cols-4 absolute  top-[-48px] duration-[3000ms]' ref={text11.ref}>
                                    <div className='col-span-3  px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                                        <span className='text-[10px] uppercase font-normal tracking-normal'>fuck him. he’s a parasite. he’s not playing for his evolution… he plays for his destruction. <br /><br /> chaos is all he knows.</span>
                                    </div>
                                </div>
                            </div>
                            <div className='my-2  flex justify-center '>
                                <div className='w-[90%] grid  grid-cols-1 absolute top-[235px] duration-[3000ms]' ref={text12.ref}>
                                    <div className=' px-[0.6rem] py-[0.15rem] object-contain justify-center z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                                        <span className='text-[10px] text-left uppercase  font-normal tracking-normal'>yes, he’s an asshole, but this is how its always been… sometimes we need asshole to teach us. <br /><br /> without shadow, light has nothing to reflect from. without shadow, none of us remember why we’re here. <br /><br /> This life is about a game… but only a few of us know how to unlock the cheat codes. <br /><br /> AND MAYBE HE WILL TOO…</span>
                                    </div>
                                </div>

                            </div >

                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='w-full  justify-center flex mt-[10rem] mb-4 duration-300' ref={text13.ref}>
                        <div className='justify-center px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707] h-[23px]  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                            <span className='text-[10px]  text-center uppercase font-normal tracking-normal'>well, that is pricey why we built….</span>
                        </div>
                    </div>
                </div >

                <div className='grid  grid-cols-2' >
                    <Parallax
                        scale={[1, 1.5]}
                        easing="easeInQuad"
                    >
                        <img src={'/MobileImages/Cloud03.png'} alt="" className='w-full h-[158px] bg-transparent ' />
                    </Parallax>
                </div>

                <Parallax
                        scale={[1, 1.5]}
                        easing="easeInQuad"
                    >
                <div className='grid  grid-cols-2' >
                   
                        <img src={'/MobileImages/Cloud04.png'} alt="" className='w-full h-[158px] bg-transparent col-start-2' />
                  
                    <div className='absolute flex-col  flex justify-center items-center w-[100%]'>
                        <img src={'/MobileImages/the_tesseract.png'} alt="" className=' h-[105px] w-[166px] bg-transparent col-start-2' />
                        <img src={'/MobileImages/silhouette-dude.png'} alt="" className=' h-[27px] z-10 w-[30px] bg-transparent' />
                    </div>
                </div>
                </Parallax>
                {/* <div className=' relative grid grid-cols-1' >
                    <img src={'/MobileImages/the-star02.png'} alt="" className='w-full  h-auto object-contain  bg-transparent z-50 opacity-1 ' />
                    <img src={'/MobileImages/Wormhole_03.png'} alt="" className='w-full h-[25.3125rem] opacity-1 bg-transparent ' />
                    <div className='absolute bottom-[5px] grid w-[90%] grid-cols-2'>
                        <div className='col-start-2  flex justify-end'>
                            <div className='   px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                                <span className='text-[10px] text-center uppercase font-normal '>TO be continued….</span>
                            </div>
                        </div>
                    </div >
                </div> */}

                <div className=' relative grid grid-cols-1' >
                    <div>
                        <img src={'/MobileImages/the-star02.png'} alt="" className='w-full  h-auto object-contain   z-[99] opacity-1 ' />

                    </div>
                    {/* <div className='absolute bottom-0 z-10'>
                        <img src={'/MobileImages/Wormhole_03.png'} alt="" className='w-full h-[25.3125rem]   -z-50' />

                    </div> */}
                    <div className='absolute bottom-[5px] grid w-[90%] grid-cols-2'>
                        <div className='col-start-2  flex justify-end'>
                            <div className='   px-[0.6rem] py-[0.15rem] object-contain z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                                <span className='text-[10px] text-center uppercase font-normal '>TO be continued….</span>
                            </div>
                        </div>
                    </div >
                </div>


            </div>
        </div>
    )
}
