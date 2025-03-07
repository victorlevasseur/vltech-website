'use client';

import React from "react";
import { usePathname } from 'next/navigation';
import { MenuBar } from "@/components/menu-bar/menu-bar";

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <MenuBar
      items={[
        { id: 'home', label: 'Accueil', href: '/', onlyRootPageActive: true },
        { id: 'skills', label: 'Compétences', href: '/skills' },
        { id: 'projects', label: 'Projets', href: '/projects' },
      ]}
      currentPathname={pathname} />
  );
};
