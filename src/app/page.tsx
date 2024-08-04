import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Highlights from '@/components/Highlights';
import StickyFooter from '@/components/StickyFooter';
import TopPosts from '@/components/TopPosts';

export default async function Page() {
  return (
    <div className="mx-auto">
      <Header className="sticky top-0 border-b" />
      <main className="mx-auto max-w-[2400px]">
        <Highlights />
        <TopPosts type="realtime" />
        <TopPosts type="pick" />
        <TopPosts type="hitz" />
      </main>
      <Footer className="border-t" />
      <StickyFooter />
    </div>
  );
}
