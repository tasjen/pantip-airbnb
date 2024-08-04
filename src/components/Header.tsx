/* eslint-disable jsx-a11y/control-has-associated-label */

import Menu from './Menu';
import PantipLogo from './PantipLogo';
import Rooms from './Rooms';
import SearchBar from './SearchBar';

type Props = {
  className?: string;
};

export default function Header({ className = '' }: Props) {
  // z-50
  return (
    <header
      className={`sticky top-0 bg-background pt-4 shadow-sm ${className}`}
    >
      <div className="mx-auto max-w-[2400px]">
        <div className="mx-16 hidden justify-between md:flex">
          <PantipLogo />
          <Menu />
        </div>
        <SearchBar />
        <Rooms />
      </div>
    </header>
  );
}
