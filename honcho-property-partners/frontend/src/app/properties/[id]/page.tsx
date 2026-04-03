import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyDetailClient from './PropertyDetailClient';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `Property Details | HONCHO Property Partners`,
    description: 'View property details and schedule a visit',
  };
}

export default function PropertyDetailPage({ params }: Props) {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PropertyDetailClient id={params.id} />
      </div>
      <Footer />
    </main>
  );
}