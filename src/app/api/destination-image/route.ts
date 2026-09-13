import { NextRequest, NextResponse } from 'next/server';
import { fetchPexelsDestinationImage, getDestinationCacheAuditInfo } from '@/lib/services/pexelsService';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug') || searchParams.get('q') || '';
    const name = searchParams.get('name') || undefined;
    const state = searchParams.get('state') || undefined;
    const category = searchParams.get('category') || undefined;
    const refresh = searchParams.get('refresh') === 'true';
    const audit = searchParams.get('audit') === 'true';

    // Development/Admin Audit endpoint (secured)
    if (audit) {
      const auditInfo = getDestinationCacheAuditInfo();
      return NextResponse.json({ success: true, audit: auditInfo });
    }

    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'Missing destination slug or query parameter (e.g. ?slug=varanasi)' },
        { status: 400 }
      );
    }

    const imageResult = await fetchPexelsDestinationImage({
      slug,
      name,
      state,
      category,
      forceRefresh: refresh,
    });

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
