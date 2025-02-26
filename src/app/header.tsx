'use client';

import { usePathname } from 'next/navigation';
import { MenuBar } from "@/components/menu-bar/menu-bar";

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <MenuBar
      items={[
        { id: 'home', label: 'Accueil', href: '/', onlyRootPageActive: true },
        { id: 'fake', label: 'Fake', href: '/fake' },
      ]}
      currentPathname={pathname} />
  );
};
