import { redirect } from 'next/navigation';

export default function ItineraryDetailRedirectPage({ params }: { params: { duration: string; slug: string } }) {
  redirect(`/plan/itineraries/${params.duration}/${params.slug}`);
}
