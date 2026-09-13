import { NextRequest, NextResponse } from 'next/server';
import { getPexelsPhotoForDestination } from '@/lib/pexels';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug') || searchParams.get('q') || '';
    const name = searchParams.get('name') || undefined;
    const state = searchParams.get('state') || undefined;
    const refresh = searchParams.get('refresh') === 'true';

    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'Missing destination slug or query parameter (e.g. ?slug=varanasi)' },
        { status: 400 }
      );
    }

    const imageResult = await getPexelsPhotoForDestination(slug, name, state, refresh);

    return NextResponse.json({
      success: true,
      data: imageResult,
    });
  } catch (error) {
    console.error('[API /destination-image Error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process destination image request',
      },
      { status: 500 }
    );
  }
}

