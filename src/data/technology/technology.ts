import { TechnologyCategory } from '@/data/technology/technology-category';

export interface Technology {
  id: string;

  /**
   * Display name of the technology.
   */
  name: string;

  /**
   * Technologies' category.
   */
  category: TechnologyCategory;

  /**
   * Asset name of the logo representing this technology.
   * If not provided, will use '/assets/technologies/[id].png'
   * If provided, will use 'assets//technologies/[logoAssetName].png'
   */
  logoAssetName?: string;
}
