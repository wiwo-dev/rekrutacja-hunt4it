import { NextRequest } from 'next/server';

// this is image proxy, pass an image url and it will return the image
// you must use encodeURIComponent(URL HERE) to encode the url first
export async function GET(req: NextRequest) {
  try {
    if (req.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 });
    }

    const searchParams = req.nextUrl.searchParams;
    const imageUrl = searchParams.get('url');
    console.log('IMAGE URL');
    console.log(imageUrl);

    if (typeof imageUrl !== 'string' || !imageUrl) {
      return new Response('Image URL is missing or not valid', { status: 400 });
    }

    const response = await fetch(imageUrl!);

    if (!response.ok) {
      return new Response('Failed to fetch image', { status: response.status });
    }

    const imageBuffer = await response.arrayBuffer();

    return new Response(Buffer.from(imageBuffer), {
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/octet-stream'
      }
    });
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
