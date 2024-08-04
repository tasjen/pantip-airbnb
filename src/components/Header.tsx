/* eslint-disable jsx-a11y/control-has-associated-label */

import PantipLogo from './PantipLogo';
import Rooms from './Rooms';
import Menu from './Menu';
import SearchBar from './SearchBar';

type Props = {
  className?: string;
};

export default function Header({ className = '' }: Props) {

  // z-50
  return (
    <header className={`sticky top-0 bg-background pt-4 ${className}`}>
      <div className="mx-auto max-w-[2400px]">
        <div className="m-4 hidden justify-between md:flex">
          <PantipLogo />
          <Menu />
        </div>
        <SearchBar />
        <Rooms />
      </div>
    </header>
  );
}
