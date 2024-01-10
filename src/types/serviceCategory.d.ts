export interface CategoryServiceProps {
  order: number;
  title: string;
  description: string;
  mainImage: string;
  secondaryImage: string;
}

export interface ServiceCategory {
  order: number;
  categoryName: string;
  categoryServices: CategoryServiceProps[];
}
