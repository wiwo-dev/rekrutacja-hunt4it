import Image from "next/image";

export default function Home() {
  return (
    <main
      className="max-w-[390px] mx-auto border border-black px-[20px] flex flex-col font-raleway"
      style={{
        backgroundImage: "url(graphics/top-background.png)",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}>
      <nav className="flex justify-between py-[38px]">
        <div>
          <button>
            <img src="graphics/menu.svg" />
          </button>
        </div>
        <div className="flex gap-3">
          <button>
            <img src="graphics/icon-heart.png" />
          </button>
          <button>
            <img src="graphics/icon-cart.png" />
          </button>
          <button>
            <img src="graphics/icon-user.png" />
          </button>
        </div>
      </nav>
      <section className="py-[22px]">
        <img src="graphics/logo.png" className="mx-auto w-[284px] h-[52px]" />
      </section>
      <section className="py-[22px]">
        <h1 className="text-center text-[21px] font-normal font-open-sans leading-[23px] text-[#141414]">
          Generate your ART
          <br /> by typing in field below any words that comes to your mind!
        </h1>
      </section>

      <section className="flex h-[62px] my-[22px]">
        <div className="w-1/3 h-[24px] flex items-center justify-center flex-wrap">
          <div className="w-full h-[5px] bg-[#CE2B28] relative rounded-[5px]">
            <div className="absolute w-[24px] h-[24px] bg-[#CE2B28] text-white flex justify-center items-center text-[16px] rounded-[9px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              1
            </div>
          </div>
          <div className="text-center text-[14px] text-[#CB2B28] font-semibold leading-4 pt-3">
            Generate
            <br /> image
          </div>
        </div>
        <div className="w-1/3 h-[24px] flex items-center flex-wrap">
          <div className="w-full h-[5px] bg-[#E5E5E7] relative rounded-[5px]">
            <div className="absolute w-[24px] h-[24px] bg-[#E5E5E7] text-[#9C9C9C] flex justify-center items-center text-[16px] rounded-[9px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              2
            </div>
          </div>
          <div className="text-center text-[14px] text-[#C0C1C9] font-semibold leading-4 pt-3">Choose your product</div>
        </div>
      </section>

      <section className="my-[12px]">
        <div className="relative rounded-[9px] overflow-hidden" style={{ boxShadow: "1px 2px 5px 0px #C0C1C9" }}>
          <input
            placeholder="What do you want to create?"
            className="p-[12px] h-[48px] bg-[#F5F5F6] rounded-[9px] w-full focus:outline-[#F5F5F6]"></input>
          <button className="bg-[#CE2B28] absolute right-0 top-0 flex justify-center items-center h-full w-[53px] rounded-[9px]">
            <img src="graphics/icon-pen-white-1.png" />
          </button>
        </div>
      </section>

      <section className="flex justify-between gap-[11px] font-semibold text-[14px] text-black my-[12px]">
        <button className="w-1/3 h-[47px] bg-[#F5F5F6] rounded-[7px] ">High Quality</button>
        <button className="w-1/3 h-[47px] bg-[#F5F5F6] rounded-[7px]">Pop Art</button>
        <button className="w-1/3 h-[47px] bg-[#F5F5F6] rounded-[7px]">Realistic Look</button>
      </section>

      <section
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        className="flex rounded-[9px]  bg-[#E3E4E7] bg-opacity-[86%] overflow-hidden my-[12px]">
        <div className="w-1/2 mx-auto text-center space-y-1 bg-[#F9F9FA] py-3 relative">
          <p className="text-[13px] font-semibold">Style preview</p>
          <img src="graphics/OPQ72O0-10.png" className="mx-auto" />
          <img src="graphics/arrow-down-sign-to-navigate.png" className="absolute top-[16px] left-[8px]" />
        </div>
        <div className="w-1/2 bg-[#F3F3F4] text-center">
          <div className="flex justify-center items-center flex-col h-full space-y-2">
            <p className="text-[14px] font-semibold">MINIMALISTIC</p>
            <div className="flex gap-2 items-center">
              <img src="graphics/scrolling.png" />
              <div
                className="bg-[#CB2B28] py-[10px] px-[20px] rounded-[7px] text-[#F5F5F6] text-[16px] font-semibold"
                style={{
                  boxShadow: "4px 4px 10px 0px rgba(64, 53, 53, 0.49) inset",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}>
                CARTOON
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <img src="graphics/padlock-2.png" />
              <span
                className="text-[14px] font-semibold font-outline-1 text-white"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                ARTISTIC
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E3E4E7] bg-opacity-[26%] text-center my-[12px] rounded-[9px] pt-[8px] pb-[26px] space-y-4">
        <div>
          <h2 className="text-[20px] text-[#CB2B28] font-bold">GET INSPIRED!</h2>
          <h3 className="text-[20px] text-black font-medium">BEST USERS DESIGN</h3>
          <button className="flex text-[18px] text-[#1E1E1E] mx-auto items-center gap-2">
            <span>See more</span>
            <img src="graphics/right-arrow.png" />
          </button>
        </div>
        <img src="graphics/18851834a-2.png" className="mx-auto" />
        <div className="relative flex bg-[#E5E5E7] rounded-[9px] overflow-hidden">
          <input
            placeholder="punk heart, gothic"
            className="p-[12px] h-[48px] bg-[#E5E5E7] rounded-l-[9px] w-full placeholder-black  focus:outline-transparent"></input>
          <button className="h-[48px] bg-gradient-to-b from-[#CFCFD0] to-transparent flex justify-center items-center px-4 rounded-r-[9px]">
            ARTISTIC
          </button>
        </div>
        <button className="bg-[#CB2B28] text-white text-[20px] font-semibold w-[178px] h-[44px] rounded-[7px]">
          BUY
        </button>
      </section>
    </main>
  );
}
