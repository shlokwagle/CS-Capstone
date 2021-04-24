export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id, name, description = '', price = 0, imageUrl = 'https://footwearnews.com/wp-content/uploads/2020/04/jordan-melo-m12-ct4954_007_a_prem-e1586190824726.jpg')  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
