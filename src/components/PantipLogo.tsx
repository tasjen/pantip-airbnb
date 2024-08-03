import Image from 'next/image';

type Props = {
  className?: string;
};

export default function PantipLogo({ className = '' }: Props) {
  return (
    <Image
      src="/assets/images/pantip-logo.png"
      alt="pantip-logo"
      className={className}
      height={48}
      width={96}
    />
  );
}
