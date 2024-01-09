interface PicsProps {
  name: string;
  file: {
    asset: {
      url: string;
    };
  };
}

export interface ProfileProps {
  name: string;
  phone: string;
  instagramUrl: string;
  facebookUrl: string;
  whatsappUrl: string;
  address: string;
  hours: string;
  motto: string;
  bio: string;
  pics: PicsProps[];
}
