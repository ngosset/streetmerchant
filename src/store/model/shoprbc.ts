import {Store} from './store';

export const ShopRBC: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '#availability_0 > span',
      text: ['Quantity'],
    },
    outOfStock: {
      container: '#availability_0 > span',
      text: ['On Order'],
    },
    maxPrice: {
      container: 
        '#access-area-visitor > div > div > table > tbody > tr > td.pageOutline > table:nth-child(5) > tbody > tr > td.panelCenter > table:nth-child(4) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.productDetailsRegularPrice', 
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.shoprbc.com/ca/shop/product_details.php?pid=55899357',
    },
    {
      brand: 'amd',
      model: '9800x3d',
      series: 'ryzen9800',
      url: 'https://www.shoprbc.com/ca/shop/product_details.php?pid=59848245',
    },
  ],
  name: 'shoprbc',
  waitUntil: 'networkidle2',
};
