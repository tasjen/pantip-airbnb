type Props = {
  className?: string;
};

export default function Footer({ className = '' }: Props) {
  return (
    <footer
      className={`flex flex-col bg-primary-foreground p-4 text-center ${className}`}
    >
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
      <p>© 2024 Internet Marketing co., ltd</p>
    </footer>
  );
}
