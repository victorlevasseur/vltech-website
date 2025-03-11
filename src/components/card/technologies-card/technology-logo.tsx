'use client';

import React, { useState } from 'react';
import { Technology } from '@/data/technology/technology';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

export interface TechnologyLogoProps {
  technology: Technology;

  className?: string;
}

export const TechnologyLogo: React.FC<TechnologyLogoProps> = (props) => {
  const logoAssetName =
    '/assets/technologies/' +
    (props.technology.logoAssetName ?? props.technology.id) +
    '.png';

  const [logoAssetNameCurrent, setLogoAssetNameCurrent] =
    useState(logoAssetName);
  const [isErrored, setIsErrored] = React.useState(false);

  if (logoAssetName !== logoAssetNameCurrent) {
    setLogoAssetNameCurrent(logoAssetName);
    setIsErrored(false);
  }

  if (isErrored) {
    return <FontAwesomeIcon icon={faCube} height={24} width={24} />;
  } else {
    return (
      <Image
        className={props.className}
        width={24}
        height={24}
        src={logoAssetNameCurrent}
        onError={() => setIsErrored(true)}
        objectFit={'contain'}
        alt={props.technology.name + ' logo'}
        aria-hidden={true}
      />
    );
  }
};
