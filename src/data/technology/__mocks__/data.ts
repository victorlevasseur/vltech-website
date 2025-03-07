import {TechnologyCategory} from "@/data/technology/technology-category";
import {Technology} from "@/data/technology/technology";

export const TECHNOLOGIES_CATEGORIES = {
  CategoryA: {
    id: 'CategoryA',
    name: 'Category A',
    priority: 1,
  },
  CategoryB: {
    id: 'CategoryB',
    name: 'Category B',
    priority: 0,
  },
  CategoryC: {
    id: 'CategoryC',
    name: 'Category C',
    priority: 2,
  },
} satisfies {[technologiesCategoryId: string]: TechnologyCategory}

export const TECHNOLOGIES = {
  victorscript: { id: 'victorscript', name: 'VictorScript', category: TECHNOLOGIES_CATEGORIES.CategoryB },
  arthurscript: { id: 'arthurscript', name: 'ArthurScript', category: TECHNOLOGIES_CATEGORIES.CategoryB },
  totorCloud: { id: 'totorcloud', name: 'Totor Cloud', category: TECHNOLOGIES_CATEGORIES.CategoryA },
  chaumontProcessor: { id: 'chaumontProcessor', name: 'Chaumont Processor', category: TECHNOLOGIES_CATEGORIES.CategoryC },
} satisfies { [technologyId: string]: Technology };