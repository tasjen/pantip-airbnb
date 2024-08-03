import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Highlights from '@/components/Highlights';
import PantipTopPosts from '@/components/PantipTopPosts';
import StickyFooter from '@/components/StickyFooter';

export default async function Page() {
  return (
    <div className="mx-auto">
      <Header className="sticky top-0 border-b border-x-white" />
      <main className="mx-auto max-w-[2400px]">
        <Highlights />
        <PantipTopPosts type="realtime" />
        <PantipTopPosts type="pick" />
        <PantipTopPosts type="hitz" />
      </main>
      <Footer className="border-t" />
      <StickyFooter />
    </div>
  );
}
