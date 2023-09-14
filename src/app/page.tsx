export default function Home() {
  return (
    <main
      className='mx-auto flex max-w-[390px] flex-col border border-black px-[20px] font-raleway'
      style={{
        backgroundImage: 'url(graphics/top-background.png)',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* NAVIGATION */}
      <nav className='flex justify-between py-[38px]'>
        <div className='flex items-center'>
          <button>
            <img src='graphics/menu.svg' alt='menu icon' />
          </button>
        </div>
        <div className='flex gap-3'>
          <button>
            <img src='graphics/icon-heart.png' alt='favorites icon' />
          </button>
          <button>
            <img src='graphics/icon-cart.png' alt='cart icon' />
          </button>
          <button>
            <img src='graphics/icon-user.png' alt='user profile icon' />
          </button>
        </div>
      </nav>

      {/* LOGO */}
      <section className=''>
        <img
          src='graphics/logo.png'
          className='mx-auto h-[52px] w-[284px]'
          alt='logo'
        />
      </section>

      {/* HEADLINE */}
      <section className='my-[24px]'>
        <h1 className='text-center font-open-sans text-[21px] font-normal leading-[23px] text-[#141414]'>
          Generate your ART
          <br /> by typing in field below any words that comes to your mind!
        </h1>
      </section>

      {/* STEPS */}
      <section className='relative my-[22px] flex h-[62px]'>
        <div className='absolute left-0 h-[5px] w-2/3 rounded-[5px] bg-[#CE2B28]'></div>
        <div className='flex h-[24px] w-1/3 flex-wrap items-center justify-center'>
          <div className='relative h-[5px] w-full rounded-[5px] bg-transparent'>
            <div className='absolute left-1/2 top-1/2 flex h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[9px] bg-[#CE2B28] text-[16px] text-white'>
              1
            </div>
          </div>
          <div className='w-full pt-3 text-center text-[14px] font-semibold leading-4 text-[#CB2B28]'>
            Generate
            <br /> image
          </div>
        </div>
        <div className='flex h-[24px] w-1/3 flex-wrap items-center'>
          <div className='relative h-[5px] w-full rounded-l-[5px] bg-[#E5E5E7]'>
            <div className='absolute left-1/2 top-1/2 flex h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[9px] bg-[#E5E5E7] text-[16px] text-[#9C9C9C]'>
              2
            </div>
          </div>
          <div className='w-full pt-3 text-center text-[14px] font-semibold leading-4 text-[#C0C1C9]'>
            Choose your product
          </div>
        </div>
        <div className='flex h-[24px] w-1/3 flex-wrap items-center'>
          <div className='relative h-[5px] w-full rounded-r-[5px] bg-[#E5E5E7]'>
            <div className='absolute left-1/2 top-1/2 flex h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[9px] bg-[#E5E5E7] text-[16px] text-[#9C9C9C]'>
              3
            </div>
          </div>
          <div className='w-full pt-3 text-center text-[14px] font-semibold leading-4 text-[#C0C1C9]'>
            Order
          </div>
        </div>
      </section>

      {/* INPUT What do you want to create */}
      <section className='my-[12px]'>
        <div
          className='relative overflow-hidden rounded-[9px]'
          style={{ boxShadow: '1px 2px 5px 0px #C0C1C9' }}
        >
          <input
            placeholder='What do you want to create?'
            className='h-[48px] w-full rounded-[9px] bg-[#F5F5F6] p-[12px] focus:outline-[#F5F5F6]'
          ></input>
          <button className='absolute right-0 top-0 flex h-full w-[53px] items-center justify-center rounded-[9px] bg-[#CE2B28]'>
            <img src='graphics/icon-pen-white-1.png' alt='pen white icon' />
          </button>
        </div>
      </section>

      {/* OPTIONS */}
      <section className='my-[12px] flex justify-between gap-[11px] text-[14px] font-semibold text-black'>
        <button className='h-[47px] w-1/3 rounded-[7px] bg-[#F5F5F6] '>
          High Quality
        </button>
        <button className='h-[47px] w-1/3 rounded-[7px] bg-[#F5F5F6]'>
          Pop Art
        </button>
        <button className='h-[47px] w-1/3 rounded-[7px] bg-[#F5F5F6]'>
          Realistic Look
        </button>
      </section>

      {/* STYLE PREVIEW */}
      <section
        style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
        className='my-[12px] flex  overflow-hidden rounded-[9px] bg-[#E3E4E7] bg-opacity-[86%]'
      >
        <div className='relative mx-auto w-1/2 space-y-1 bg-[#F9F9FA] py-3 text-center'>
          <p className='text-[13px] font-semibold'>Style preview</p>
          <img src='graphics/OPQ72O0-10.png' className='mx-auto' alt='image' />
          <img
            src='graphics/arrow-down-sign-to-navigate.png'
            className='absolute left-[8px] top-[16px]'
            alt='arrow icon'
          />
        </div>
        <div className='flex w-1/2 justify-center gap-2 bg-[#F3F3F4] text-center'>
          <div className='flex items-center'>
            <img src='graphics/scrolling.png' alt='scrolling icon' />
          </div>
          <div className='flex h-full flex-col items-center justify-center space-y-2'>
            <button className='text-[14px] font-semibold'>MINIMALISTIC</button>
            <button
              className='rounded-[7px] bg-[#CB2B28] px-[20px] py-[10px] text-[16px] font-semibold text-[#F5F5F6]'
              style={{
                boxShadow: '4px 4px 10px 0px rgba(64, 53, 53, 0.49) inset',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
              }}
            >
              CARTOON
            </button>

            <button className='flex items-center justify-center gap-1'>
              <img
                src='graphics/padlock-2.png'
                alt='padlock icon'
                className='translate-y-[2px]'
              />
              <span
                className='font-outline-1 pr-1 text-[14px] font-semibold text-white'
                style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                ARTISTIC
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* GET INSPIRED SECTION */}
      <section className='my-[12px] space-y-4 rounded-[9px] bg-[#E3E4E7] bg-opacity-[26%] pb-[26px] pt-[8px] text-center'>
        <div>
          <h2 className='text-[20px] font-bold text-[#CB2B28]'>
            GET INSPIRED!
          </h2>
          <h3 className='text-[20px] font-medium text-black'>
            BEST USERS DESIGN
          </h3>
          <button className='mx-auto flex items-center gap-2 text-[18px] text-[#1E1E1E]'>
            <span>See more</span>
            <img src='graphics/right-arrow.png' alt='right arrow icon' />
          </button>
        </div>
        <img src='graphics/18851834a-2.png' className='mx-auto' alt='image' />
        <div className='relative flex overflow-hidden rounded-[9px] bg-[#E5E5E7]'>
          <input
            placeholder='punk heart, gothic'
            className='h-[48px] w-full rounded-l-[9px] bg-[#E5E5E7] p-[12px] placeholder-black  focus:outline-transparent'
          ></input>
          <button className='flex h-[48px] items-center justify-center rounded-r-[9px] bg-gradient-to-b from-[#CFCFD0] to-transparent px-4'>
            ARTISTIC
          </button>
        </div>
        <button className='h-[44px] w-[178px] rounded-[7px] bg-[#CB2B28] text-[20px] font-semibold text-white'>
          BUY
        </button>
      </section>
    </main>
  );
}
