import bannerImg1 from '/assets/images/banner/bannerImg1.webp';
import bannerImg4 from '/assets/images/banner/bannerImg4.png';
import bannermain from '/assets/images/banner/bannermain.webp';
import product1 from '/assets/images/products/product1.jpg';
import product2 from '/assets/images/products/product2.jpg';
import product3 from '/assets/images/products/product3.jpg';
import product4 from '/assets/images/products/product4.jpg';
import product5 from '/assets/images/products/product5.jpg';
import product6 from '/assets/images/products/product6.jpg';
import product7 from '/assets/images/products/product7.jpg';
import product8 from '/assets/images/products/product8.png';
import product9 from '/assets/images/products/product9.jpg';
import product10 from '/assets/images/products/product10.jpg';
import product11 from '/assets/images/products/product11.png';

const products = [
  { id: 1, title: 'Product 1', details: 'Details of Product 1', price: '$10', image: product1 },
  { id: 2, title: 'Product 2', details: 'Details of Product 2', price: '$20', image: product2 },
  { id: 3, title: 'Product 3', details: 'Details of Product 3', price: '$30', image: product3 },
  { id: 4, title: 'Product 4', details: 'Details of Product 4', price: '$40', image: product4 },
  { id: 5, title: 'Product 5', details: 'Details of Product 5', price: '$50', image: product5 },
  { id: 6, title: 'Product 6', details: 'Details of Product 6', price: '$60', image: product6 },
  { id: 7, title: 'Product 7', details: 'Details of Product 7', price: '$70', image: product7 },
  { id: 8, title: 'Product 8', details: 'Details of Product 8', price: '$80', image: product8 },
  { id: 9, title: 'Product 9', details: 'Details of Product 9', price: '$90', image: product9 },
  { id: 10, title: 'Product 10', details: 'Details of Product 10', price: '$100', image: product10 },
  { id: 11, title: 'Product 11', details: 'Details of Product 11', price: '$110', image: product11 }
];

const images = {
  bannerImg1,
  bannerImg4,
  bannermain,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11
};

export default { images, products };
