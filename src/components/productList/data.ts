
export interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Tshirt",
    price: "Rp60.000",
    imageUrl:
      "/asset/5.png",
  },
  {
    id: 2,
    title: "Polo Shirt",
    price: "Rp80.000",
    imageUrl:
      "/asset/6.png",
  },

  {
    id: 3,
    title: "Work Shirt",
    price: "Rp110.000",
    imageUrl:
      "/asset/3.png",
  },
  
  {
    id: 4,
    title: "TrackPants",
    price: "Rp100.000",
    imageUrl:
      "/asset/track.png",
  },
  
  {
    id: 5,
    title: "Varsity Jacket",
    price: "Rp200.000",
    imageUrl:
      "/asset/1.png",
  },
  
  {
    id: 6,
    title: "Almamater",
    price: "Rp160.000",
    imageUrl:
      "/asset/11.png",
  },
  
  {
    id: 7,
    title: "Hoodie",
    price: "Rp190.000",
    imageUrl:
      "/asset/9.png",
  },
  
  {
    id: 8,
    title: "Work Jacket",
    price: "Rp160.000",
    imageUrl:
      "/asset/4.png",
  },
  
];
