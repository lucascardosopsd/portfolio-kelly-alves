export interface ServiceCategory {
  order: number | null;
  title: string;
  desription: string;
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
