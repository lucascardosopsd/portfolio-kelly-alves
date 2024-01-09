interface CategoryServiceProps {
  order: number;
  title: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  secondaryImage: {
    asset: {
      url: string;
    };
  };
}

export interface ServiceCategory {
  categoryName: string;
  categoryServices: CategoryServiceProps[];
}
