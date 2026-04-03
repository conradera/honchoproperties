import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertiesClient from './PropertiesClient';

export const metadata = {
  title: 'Properties | HONCHO Property Partners',
  description: 'Browse our collection of premium properties across Uganda',
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PropertiesClient />
      </div>
      <Footer />
    </main>
  );
}