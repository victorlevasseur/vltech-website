import React from 'react';
import { Technology } from '@/data/technology/technology';
import { InfoCard } from '@/components/card/info-card';

import styles from './technologies-card.module.scss';
import { TechnologyLogo } from '@/components/card/technologies-card/technology-logo';
import lodash from 'lodash';
import { TECHNOLOGIES_CATEGORIES } from '@/data/technology/data';

export interface TechnologiesCardProps {
  technologies: Technology[];
}

export const groupAndSortTechnologies = (technologies: Technology[]) => {
  return lodash
    .chain(technologies)
    .groupBy((technology) => technology.category.id)
    .toPairs()
    .filter(
      (pair): pair is [keyof typeof TECHNOLOGIES_CATEGORIES, Technology[]] =>
        pair[0] in TECHNOLOGIES_CATEGORIES
    )
    .map(([categoryId, technologies]) => ({
      category: TECHNOLOGIES_CATEGORIES[categoryId],
      technologies: technologies.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort(
      (categoryA, categoryB) =>
        categoryA.category.priority - categoryB.category.priority
    )
    .value();
};

export const TechnologiesCard: React.FC<TechnologiesCardProps> = (props) => {
  const technologiesByCategory = groupAndSortTechnologies(props.technologies);

  return (
    <InfoCard className={styles.container} title={'Technos'}>
      <ul className={styles.categoryList}>
        {technologiesByCategory.map((category) => (
          <li className={styles.category} key={category.category.id}>
            <span className={styles.categoryLabel}>
              {category.category.name}
            </span>
            <ul className={styles.technologyList}>
              {category.technologies.map((technology) => (
                <li key={technology.id} className={styles.technology}>
                  <TechnologyLogo technology={technology} />
                  <span>{technology.name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </InfoCard>
  );
};
