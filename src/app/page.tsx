import Navbar from '@/components/Navbar';
import GenerateArtSection from './components/GenerateArtSection';
import OrderSteps from '@/components/OrderSteps';
import StylePreviewSection from './components/StylePreviewSection';
import GetInspiredSection from './components/GetInspiredSection';

export default function Home() {
  return (
    <main
      id='main-frame'
      className='relative mx-auto max-w-[390px] border border-black'
    >
      <div
        className='flex flex-col  px-[20px] font-raleway'
        style={{
          backgroundImage: 'url(graphics/top-background.png)',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* NAVIGATION */}
        <Navbar />

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
        <section className='my-[22px]'>
          <OrderSteps />
        </section>

        {/* INPUT What do you want to create */}
        <section className='my-[12px]'>
          <GenerateArtSection />
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
        <section className='my-[12px]'>
          <StylePreviewSection />
        </section>

        {/* GET INSPIRED SECTION */}
        <section className='my-[12px]'></section>
        <GetInspiredSection />
      </div>
    </main>
  );
}
