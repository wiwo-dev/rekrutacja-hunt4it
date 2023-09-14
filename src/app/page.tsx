import Image from "next/image";

export default function Home() {
  return (
    <main
      className="max-w-[390px] mx-auto border border-black px-[20px] flex flex-col gap-5"
      style={{
        backgroundImage: "url(graphics/top-background.png)",
        //backgroundPosition: "-455.504px -1.516px",
        backgroundPosition: "0px 0px",
        //backgroundSize: "208.085% 100.011%",
        //backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "lightgray", // If you want a fallback background color
      }}>
      <nav className="flex justify-between">
        <div>
          <button>
            <img src="graphics/menu.svg" />
          </button>
        </div>
        <div className="flex gap-3">
          <button>
            <img src="graphics/icon-save.png" />
          </button>
          <button>
            <img src="graphics/icon-cart.png" />
          </button>
          <button>
            <img src="graphics/icon-user.png" />
          </button>
        </div>
      </nav>
      <section className="">
        <img src="graphics/logo.png" className="mx-auto w-[284px] h-52px]" />
      </section>
      <section>
        <h1 className="text-center text-[21px] font-normal leading-[23px] text-[#141414]">
          Generate your ART by typing in field below any words that comes to your mind!
        </h1>
      </section>
      <section className="flex">
        <div className="w-1/3 h-[24px] flex items-center flex-wrap">
          <div className="w-full h-[5px] bg-[#CE2B28] relative rounded-[5px]">
            <div className="absolute w-[24px] h-[24px] bg-[#CE2B28] text-white flex justify-center items-center text-[16px] rounded-[9px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              1
            </div>
          </div>
          <div className="text-center">Generate image</div>
        </div>
        <div className="w-1/3 h-[24px] flex items-center flex-wrap">
          <div className="w-full h-[5px] bg-[#E5E5E7] relative rounded-[5px]">
            <div className="absolute w-[24px] h-[24px] bg-[#E5E5E7] text-[#9C9C9C] flex justify-center items-center text-[16px] rounded-[9px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              2
            </div>
          </div>
          <div className="text-center">Choose your product</div>
        </div>
      </section>
      <section>
        <div className="relative">
          <input
            placeholder="What do you want to create?"
            className="p-[12px] h-[48px] bg-[#F5F5F6] border border-[#B7B2B2] rounded-[9px] w-full"
            style={{ boxShadow: "1px 2px 5px 0px #C0C1C9" }}></input>
          <button className="bg-[#CE2B28] absolute right-0 top-0 flex justify-center items-center h-full w-[53px] rounded-[9px]">
            <img src="graphics/icon-pen-white-1.png" />
          </button>
        </div>
      </section>

      <section className="flex justify-between gap-[11px] font-semibold text-[14px] text-black">
        <button className="w-1/3 h-[47px] bg-[#F5F5F6] rounded-[7px] ">High Quality</button>
        <button className="w-1/3 h-[47px] bg-[#F5F5F6] rounded-[7px]">Pop Art</button>
        <button className="w-1/3 h-[47px] bg-[#F5F5F6] rounded-[7px]">Realistic Look</button>
      </section>

      <section
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        className="flex rounded-[9px]  bg-[#E3E4E7] bg-opacity-[26%] overflow-hidden">
        <div className="w-1/2 mx-auto text-center">
          <p>Style preview</p>
          <img src="graphics/OPQ72O0-10.png" className="mx-auto" />
        </div>
        <div className="w-1/2 bg-[#F7F7F8] text-center">
          <div className="flex justify-center items-center flex-col h-full">
            <p>MINIMALISTIC</p>
            <p>CARTOON</p>
            <p>ARTISTIC</p>
          </div>
        </div>
      </section>

      <section className="bg-[#E3E4E7] bg-opacity-[26%] text-center">
        <h2 className="text-[20px] text-[#CB2B28] font-bold">GET INSPIRED!</h2>
        <h3 className="text-[20px] text-black font-medium">BEST USERS DESIGN</h3>
        <button className="flex text-[18px] text-[#1E1E1E] mx-auto items-center gap-2">
          <span>See more</span>
          <img src="graphics/right-arrow.png" />
        </button>
        <img src="graphics/18851834a-2.png" className="mx-auto" />
        <div className="relative">
          <input
            placeholder="punk heart, gothic"
            className="p-[12px] h-[48px] bg-[#E5E5E7] rounded-[9px] w-full placeholder-black"></input>
          <button className="bg-gradient-to-b from-[#CFCFD0] via-transparent absolute right-0 top-0 flex justify-center items-center h-full px-4 rounded-r-[9px]">
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
