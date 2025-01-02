import {Store} from './store';

export const AmdCa: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '#form-action-addToCart',
      text: ['Add to Cart'],
    },    
    outOfStock: {
      container: '#main-content > div.container > div > div.productView > section.productView-details.product-data > div.stockAvailable > div > span > span.productAttributes-message-in > span',
      text: ['Out of Stock'],
    },
    maxPrice: {
      container: '#main-content > div.container > div > div.productView > section.productView-details.product-data > div.productView-product > div.productView-price > div:nth-child(3) > span.price.price--withoutTax',
      euroFormat: false,
    },
  },
  links: [ 
    {
      brand: 'amd',
      model: '9800x3d',
      series: 'ryzen9800',
      url: 'https://shop-ca-en.amd.com/amd-ryzen-7-9800x3d-processor/', 
    },
  ],
  name: 'amd-ca',
};
