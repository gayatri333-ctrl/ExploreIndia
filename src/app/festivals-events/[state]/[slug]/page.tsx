import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEventBySlug } from '@/lib/data/events-data';
import EventDetailClient from '@/components/events/EventDetailClient';

interface Props {
  params: {
    state: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = getEventBySlug(params.state, params.slug);

  if (!event) {
    return {
      title: 'Event Not Found — ExploreIndia',
      description: 'The requested festival or event details could not be found.',
    };
  }

  const title = `${event.title} (${event.stateName}) — ExploreIndia`;
  const description = `${event.shortDescription} Dates: ${event.startDate} to ${event.endDate}. Category: ${event.category}.`;
  const url = `https://exploreindia.vercel.app/festivals-events/${event.stateSlug}/${event.slug}`;

  return {
    title,
    description,
    keywords: [event.title, event.stateName, event.category, event.region, 'India festivals', ...event.tags],
    openGraph: {
      title,
      description,
      url,
      siteName: 'ExploreIndia',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: event.heroImage,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [event.heroImage],
    },
  };
}

export default function EventDetailPage({ params }: Props) {
  const eventData = getEventBySlug(params.state, params.slug);

  if (!eventData) {
    notFound();
  }

  return <EventDetailClient eventData={eventData} />;
}
