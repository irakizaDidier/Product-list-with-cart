export type Product = {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export type ProductImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}
