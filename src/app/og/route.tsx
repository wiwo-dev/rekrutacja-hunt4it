import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

const encodedTestImages = [
  'https://drive.google.com/uc?export=view&id=1CS4rIB2EmceVb4336Gw8nXL99TNJ5Vso',
];

export async function GET(request: Request) {
  //   const logo = await fetch(new URL('/img/logo.png', import.meta.url)).then(
  //     (res) => res.arrayBuffer()
  //   );

  const logo = await fetch(
    new URL('./assets/img/logo.png', import.meta.url)
  ).then((res) => res.arrayBuffer());
  const expressYourself = await fetch(
    new URL('./assets/img/express-yourself.png', import.meta.url)
  ).then((res) => res.arrayBuffer());

  const men = await fetch(
    new URL('./assets/img/men.png', import.meta.url)
  ).then((res) => res.arrayBuffer());

  // Make sure the font exists in the specified path:
  const ralewayRegular = await fetch(
    new URL('./assets/raleway/static/Raleway-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());
  const ralewayExtraBold = await fetch(
    new URL('./assets/raleway/static/Raleway-ExtraBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  const { searchParams } = new URL(request.url);
  const graphic = searchParams.get('graphic');
  const headline = searchParams.get('headline');
  const subheadline = searchParams.get('subheadline');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'white',
        }}
      >
        <div tw='bg-white flex'>
          <div tw='flex flex-row w-full justify-between'>
            <div tw='flex flex-col justify-between p-10 py-30'>
              <div tw='flex flex-col'>
                <img
                  src={logo as any as string}
                  width='573'
                  height='77'
                  //className='h-[100px] w-[300px]'
                />
                <div tw='flex justify-end pr-20'>
                  <img
                    src={expressYourself as any as string}
                    width='262'
                    height='42'
                  />
                </div>
              </div>
              <div tw='flex pl-20'>
                <h2
                  tw='flex flex-col text-3xl text-black'
                  style={{ fontFamily: '"Raleway-Regular"' }}
                >
                  <span style={{ fontFamily: '"Raleway-ExtraBold"' }}>
                    {headline || 'Check out my awesome ART.'}
                  </span>
                  <span tw='text-black'>
                    {subheadline || 'Generated with AI.'}
                  </span>
                </h2>
              </div>
            </div>
            <div tw='flex items-end relative'>
              <img src={men as any as string} width={415} height={590} tw='' />
              {graphic && (
                <img
                  src={graphic}
                  width={150}
                  height={150}
                  tw='absolute top-[250px] right-[140px]'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Raleway-Regular',
          data: ralewayRegular,
          style: 'normal',
        },
        {
          name: 'Raleway-ExtraBold',
          data: ralewayExtraBold,
          style: 'normal',
        },
      ],
    }
  );
}
