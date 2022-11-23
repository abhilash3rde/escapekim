import React from 'react'

export const ActFirstDesktop = () => {
  return (
    <div>
      <div className="bg-[url('/DesktopImages/background_02.jpg')] h-[100%] bg-cover bg-no-repeat bg-fixed bg-top " >

        <div className='grid grid-cols-2 gap-10 w-[100%] container mx-auto '>
          <div className=' flex text-center items-center mt-4'>
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

        {/* <div className='grid grid-cols-1 '>
            <img src={'/DesktopImages/Billboard_fullSize.png'} alt="houdini" class="h-[1080px] w-[1920px]" />
          </div>

          <div className='flex  w-[100%] grid grid-cols-2'>
            <img src={'/DesktopImages/Cloud02.png'} alt="" className='z-50 col-start-2' />
          </div>

          <div className='flex  z-50 w-[100%] grid grid-cols-2 '>
            <img src={'/DesktopImages/Cloud01.png'} alt="" className='' />
        </div>
        <div className=' flex justify-center  z-50 w-[100%] '>
            <img src={'DesktopImages/silhouette-dude@2x.png'} alt="" className='h-[62px] w-[66px]' />
          </div> */}

        <div className='grid grid-cols-1 '>
          <img src={'/DesktopImages/Billboard_fullSize.png'} alt="" className='h-[1080px]' />
        </div>

        <div className=' relative flex  justify-between w-[100%] gap-1'>
          <div className='grid grid-cols-2 w-[90%]'>
            <img src={'/DesktopImages/Cloud01.png'} alt="" className='' />
            <div className='flex justify-start items-center '>
            <img src={'DesktopImages/silhouette-dude@2x.png'} alt="" className='h-[62px] w-[66px] z-50' />
            </div>
          </div>
          <div className='absolute top-[-270px] grid grid-cols-2'>
          <div className='col-start-2'>
            <img src={'/DesktopImages/Cloud02.png'} alt="" className=' ' />
          </div>
          </div>
         
        </div>




        {/* <div className='flex  justify-center gird  grid-cols-1 '>
          <div className='h-[24px] w-[26px] '>
            <img src={'MobileImages/silhouette-dude.png'} alt="" className=' mt-2' />
          </div>
        </div> */}

        <div className='flex  justify-center '>
          <div className=' w-[90%] ' >

            <div className='absolute top-[1450px] flex  grid grid-cols-1 '>
              <img src={'/DesktopImages/cs01.png'} alt="" className='w-full h-[362px] z-50' />
              <div className='grid grid-cols-1 '>
                <div className='absolute top-[-20px] left-[25px] px-2 py-2 z-50 border-[#070707] right-0 text-center items-center bg-[#FFE5A3] border-2 opacity-1 w-[60%] h-[42px] flex  flex-nowrap '>
                  <span className=' text-[11px] uppercase font-bold '>He’s not going to make it…</span>
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className=' absolute top-[30px] left-[25px] px-2 py-2 z-50 border-[#070707] right-0 items-center bg-[#FFE5A3] border-2 opacity-1 w-[80%] h-[42px] flex  flex-nowrap '>
                  <span className='text-[11px] uppercase font-bold '>You know that is not for you to decide… that is up to him.</span>
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className=' absolute top-[80px] left-[25px] px-2 py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1 w-[35%] h-[42px] flex  flex-nowrap'>
                  <span className='text-[11px] uppercase font-bold '>There is hope…</span>
                </div>
              </div>
            </div>


            {/* <div className='my-2  flex justify-center '>
              <div className='w-[90%] grid  grid-cols-1'>
                <div className='px-2 py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                  <span className='text-[11px] uppercase font-bold '>He’s fat and soft. a trigger happy child is what he is. he’s not worked a day in his life. how do you suppose he’s to survive this game we’re set for him…..</span>
                </div>
              </div>

            </div > */}

            {/* <div className=' relative flex  grid grid-cols-1 mt-6'>
              <img src={'/MobileImages/cs02_mobile.png'} alt="" className='w-full h-[267px] ' />
              <div className='grid grid-cols-1 '>
                <div className='absolute top-[-20px] left-[25px] px-2 py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1 w-[60%] h-[42px] flex  flex-nowrap '>
                  <span className=' text-[11px] font-normal uppercase font-bold '>YOU KNOW why he’s like this?</span>
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className=' absolute top-[30px] left-[25px] px-2 py-2 z-50 border-[#070707] right-0 items-center bg-[#FFE5A3] border-2 opacity-1 w-[45%] h-[42px] flex  flex-nowrap '>
                  <span className='text-[11px] uppercase font-bold '>Of Course i know why….</span>
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className=' absolute top-[80px] left-[25px] px-2 py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1 w-[35%] h-[42px] flex  flex-nowrap'>
                  <span className='text-[11px] uppercase font-bold '>He Won’t remember….</span>
                </div>
              </div>
            </div> */}


            {/* <div className='my-2  flex justify-center'>
              <div className='w-[90%] grid  grid-cols-1'>
                <div className='px-2 py-2 justify-end z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                  <span className='text-[11px] text-right uppercase font-bold '>That’s enough from you two. he has help. he won’t survive without it. none of us would. all seven of our destinies are linked…</span>
                </div>
              </div>

            </div > */}
            {/* <div className='my-2  flex justify-center'>
              <div className='w-[90%] grid  grid-cols-6'>
                <div className='col-start-2 justify-end col-span-6 px-2 py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                  <span className='text-[11px] text-right uppercase font-bold '>You don’t have to remind us, we all know the consequences if he fails…</span>
                </div>
              </div>

            </div > */}

            {/* <div className='my-2  flex justify-center'>
              <div className='w-[90%] grid  grid-cols-2'>
                <div className=' col-start-2 justify-end px-2 py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                  <span className='text-[11px] text-right uppercase font-bold '>… and there’s eights of us</span>
                </div>
              </div>
            </div > */}



            {/* <div className=' relative flex  grid grid-cols-1 mt-10 '>
              <img src={'/MobileImages/cs03_mobile.png'} alt="" className='w-full h-[267px]' />
              <div className='grid grid-cols-1 '>
                <div className='absolute top-[-25px] left-[25px] px-2 py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1 w-[75%] h-[57px]  flex  flex-nowrap '>
                  <span className=' text-[11px] font-normal uppercase font-bold '>fuck him. he’s a parasite. he’s not playing for his evolution… he plays for his destruction. <br /><br /> chaos is all he knows.</span>
                </div>
              </div>

              <div className='my-2  flex justify-center '>
                <div className='w-[90%] grid  grid-cols-1 absolute top-[230px]'>
                  <div className=' px-2 py-2 justify-center z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
                    <span className='text-[11px] text-left uppercase  font-bold '>yes, he’s an asshole, but this is how its always been… sometimes we need asshole to teach us. <br /><br /> without shadow, light has nothing to reflect from. without shadow, none of us remember why we’re here. <br /><br /> This life is about a game… but only a few of us know how to unlock the cheat codes. <br /><br /> AND MAYBE HE WILL TOO…</span>
                  </div>
                </div>

              </div >

            </div> */}
          </div>
        </div>

        {/* <div className='  flex justify-center'>
          <div className='w-[60%] grid  grid-cols-1 mt-[120px] mb-4'>
            <div className='  justify-center px-2 py-2 z-50 border-[#070707] right-0  items-center bg-[#FFE5A3] border-2 opacity-1  flex  flex-nowrap '>
              <span className='text-[11px] text-center uppercase font-bold '>well, that is pricey why we built….</span>
            </div>
          </div>
        </div > */}

        {/* <div className='grid  grid-cols-2' >
          <img src={'/MobileImages/Cloud03.png'} alt="" className='w-full h-[158px] bg-transparent ' />
        </div> */}

        {/* <div className='grid  grid-cols-2' >
          <img src={'/MobileImages/Cloud04.png'} alt="" className='w-full h-[158px] bg-transparent col-start-2' />
          <div className='absolute flex-col  flex justify-center items-center w-[100%]'>
            <img src={'/MobileImages/the_tesseract.png'} alt="" className=' h-[105px] w-[166px] bg-transparent col-start-2' />
            <img src={'/MobileImages/silhouette-dude.png'} alt="" className=' h-[27px] z-10 w-[30px] bg-transparent' />
          </div>
        </div> */}

        {/* <div className='grid grid-cols-1 relative flex justify-center' >
          <img src={'/MobileImages/the-star.png'} alt="" className='w-full h-[602px] bg-transparent z-50 opacity-1 ' />
          <div className='absolute top-[350px] left-0 right-0  flex justify-center items-center w-[100%]' >
            <img src={'/MobileImages/Wormhole_03.png'} alt="" className='w-full h-[405px] opacity-1 bg-transparent ' />
          </div>

        </div> */}


      </div>
    </div>
  )
}
