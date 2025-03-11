import { TECHNOLOGIES } from '@/data/technology/data';

export function hasTechnology(technologyId: string): technologyId is keyof typeof TECHNOLOGIES {
  return technologyId in TECHNOLOGIES;
}
