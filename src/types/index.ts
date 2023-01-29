export interface gameInfo {
  appId: string;
  title: string;
  url: string;
  imgUrl: string;
  released: string;
  reviewSummary: string;
  price: string;
}

export interface singleGame {
  imgUrl: string;
  title: string;
  developer: {
    name: string;
    link: string;
  };
  publisher: {
    link: string;
    name: string;
  };
  released: string;
  description: string;
  tags: {
    url: string;
    name: string;
  }[];
  allReviews: {
    summary?: string;
    reviewCount?: string;
    ratingValue?: string;
    bestRating?: string;
    worstRating?: string;
  };
  price: string;
  DLCs: {
    appId: string;
    url: string;
    name: string;
    price: string;
  }[];
}
