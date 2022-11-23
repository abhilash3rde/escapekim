import React from 'react'


export const ActFirst = () => {
  return (
    <div className="bg-[url('/DesktopImages/background_02.jpg')] h-[100%] bg-cover bg-no-repeat bg-fixed bg-position " >
      <div className='grid grid-cols-2 gap-10 w-[100%] container mx-auto '>
        <div className=' flex text-center items-center mt-4'>
          <img src={'/DesktopImages/Act01.png'} alt="" className=' bg-top  to-transparent act01-logo' />
        </div>
        <div className='flex justify-end text-center items-center mt-4 gap-2'>
          <span>
            <img src={'/DesktopImages/Discord.svg'} alt="" className='twiter-image' />
          </span>
          <span>
            <img src={'/DesktopImages/Twitter.svg'} alt="" className='twiter-image' />
          </span>
        </div>
      </div>


      <div className='grid grid-cols-1 '>
        <img src={'/DesktopImages/Billboard_fullSize.png'} alt="" className='hidden-mobile' />
        <img src={'/MobileImages/Billboard_mobile.png'} alt="houdini" class="visible-mobile"/>
      </div>

      <div className='flex  justify-between w-[100%] gap-1'>
        <div className='w-[45%]'>
          <img src={'/DesktopImages/Cloud01.png'} alt="" className='hidden-mobile' />
        </div>
        <div className='w-[10%] silhouette-image'>
          <img src={'DesktopImages/silhouette-dude@2x.png'} alt="" className='hidden-mobile'/>
          <img src={'MobileImages/silhouette-dude.png'} alt="" className='visible-mobile mt-2'/>
        </div>
        <div className='w-[45%] '>
          <img src={'/DesktopImages/Cloud02.png'} alt="" className='hidden-mobile' />
        </div>
      </div>

      <div className='flex  justify-center '>
        <div className=' w-[80%] ' >

          <div className='cs-firstImg  relative flex  grid grid-cols-1'>
            <img src={'/DesktopImages/cs01.png'} alt=""  className='hidden-mobile'/>
            <img src={'/MobileImages/cs01_mobile.png'} alt=""  className='visible-mobile mt-10'/>
            <div className='grid grid-cols-1 '>
              <div className='text  flex  flex-nowrap '>
                <span className=' text-[14px] pt-2'>He’s not going to make it…</span>
              </div>
            </div>
          
          {/* <div className='grid grid-cols-1'>
          <div className='text02  flex  flex-nowrap'>
              <span className=''>You know that is not for you to decide… that is up to him.</span>
            </div>
          </div> */}
            
            {/* <div className='text03  flex  flex-nowrap'>
              <span className=''>There is hope…</span>
            </div> */}
          </div>

          {/* <div className='my-2 grid w-full grid-cols-1 flex flex-nowrap'>
            <div className='text04  '>
              <span className=''>He’s fat and soft. a trigger happy child is what he is. he’s not worked a day in his life. how do you suppose he’s to survive this game we’re set for him…..</span>
            </div>
          </div > */}
        </div>
      </div>


      {/* <div className='flex  justify-center '>
        <div className=' w-[70%] grid grid-cols-1 ' >

          <div className='cs-firstImg  relative flex  '>
            <img src={'/DesktopImages/cs-jump01.png'} alt="" />
            <div className='grid grid-cols-1'>
              <div className='text  flex  flex-nowrap '>
                <span className=' text-[14px] pt-2'>He’s not going to make it…</span>
              </div>
            </div>

            <div className='text02  flex  flex-nowrap'>
              <span className=''>You know that is not for you to decide… that is up to him.</span>
            </div>
            <div className='text03  flex  flex-nowrap'>
              <span className=''>There is hope…</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}













