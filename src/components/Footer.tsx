/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */
type Props = {
  className?: string;
};

export default function Footer({ className = '' }: Props) {
  return (
    <footer className={`space-y-4 bg-primary-foreground p-4 ${className}`}>
      <div className="border-b">
        <p className="text-center text-xl font-bold">เว็บในเครือ</p>
        <div className="mx-auto grid max-w-[2400px] grid-cols-2">
          <a
            href="https://www.bloggang.com/"
            target="_blank"
            className="m-auto"
          >
            <img
              src="https://pantip.com/static/images/logo-bloggang.png"
              className="h-16"
              alt="logo-bloggang"
            />
          </a>
          <a href="https://www.pantown.com/" target="_blank" className="m-auto">
            <img
              src="https://pantip.com/static/images/logo-pantown.png"
              className="h-16"
              alt="logo-pantown"
            />
          </a>
          <a
            href="https://www.pantipmarket.com/"
            target="_blank"
            className="m-auto"
          >
            <img
              src="https://pantip.com/static/images/logo-pantipmarket.png"
              className="h-16"
              alt="logo-pantipmarket"
            />
          </a>
          <a href="https://maggang.com/" target="_blank" className="m-auto">
            <img
              src="https://pantip.com/static/images/logo-maggang.png"
              className="h-16"
              alt="logo-maggang"
            />
          </a>
        </div>
      </div>
      <div className="space-y-4 border-b pb-8">
        <p className="text-center text-xl font-bold">ดาวน์โหลดได้แล้ววันนี้</p>
        <div className="mx-auto grid max-w-[2400px] grid-cols-3 items-center justify-center gap-8">
          <a
            href="https://www.bloggang.com/"
            target="_blank"
            className="m-auto"
          >
            <img
              src="https://pantip.com/static/images/button_download-app-store.png"
              className="h-16"
              alt="button_download-app-store"
            />
          </a>
          <a href="https://www.pantown.com/" target="_blank" className="m-auto">
            <img
              src="https://pantip.com/static/images/button_download-google-play.png"
              className="h-16"
              alt="button_download-google-play"
            />
          </a>
          <a
            href="https://www.pantipmarket.com/"
            target="_blank"
            className="m-auto"
          >
            <img
              src="https://ptcdn.info/application/huawei-Black.png"
              className="h-16"
              alt="huawei-Black"
            />
          </a>
        </div>
      </div>
      <div className="border-b">
        <div className="mx-auto flex max-w-[2400px] justify-between py-4">
          <div className="flex flex-col">
            <a
              href="https://pantip.com/about/tos"
              target="_blank"
              className="hover:underline"
            >
              กฎ กติกาและมารยาท
            </a>
            <a
              href="https://pantip.com/about/defamation"
              target="_blank"
              className="hover:underline"
            >
              คำแนะนำการโพสต์
            </a>
            <a
              href="https://pantip.com/about/privacy"
              target="_blank"
              className="hover:underline"
            >
              นโยบายเกี่ยวกับข้อมูลส่วนบุคคล
            </a>
            <a
              href="https://pantip.com/about/privilege"
              target="_blank"
              className="hover:underline"
            >
              สิทธิ์การใช้งานของสมาชิก
            </a>
            <a
              href="https://pantip.com/about/contact"
              target="_blank"
              className="hover:underline"
            >
              ติดต่อทีมงาน Pantip
            </a>
          </div>
          <div className="flex flex-col">
            <a
              href="https://pantip.com/advertising"
              target="_blank"
              className="hover:underline"
            >
              ติดต่อลงโฆษณา
            </a>
            <a
              href="https://pantip.com/about/job"
              target="_blank"
              className="hover:underline"
            >
              ร่วมงานกับ Pantip
            </a>
            <a
              href="https://pantip.com/app"
              target="_blank"
              className="hover:underline"
            >
              Download App Pantip
            </a>
            <a
              href="https://pantip.com/about/certified_developer"
              target="_blank"
              className="hover:underline"
            >
              Pantip Certified Developer
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="mx-auto max-w-[2400px] text-start">
          © 2024 Internet Marketing co., ltd
        </p>
      </div>
    </footer>
  );
}
