export type Product = {
  image:    Image;
  name:     string;
  category: string;
  price:    number;
  quantity: number;
}

export type Image = {
  thumbnail: string;
  mobile:    string;
  tablet:    string;
  desktop:   string;
}
