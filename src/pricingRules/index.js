import productData from '../../config/product.json';
import {cariRule} from './cariRule';
import {homiRule} from './homiRule';
import {heaiRule} from './heaiRule';
import {petiRule} from './petiRule';

export default class PricingRules {
  constructor() {
    this.productList = JSON.parse(JSON.stringify(productData));
  }

  calc(items){
    let total = cariRule(items, this.productList) 
    + homiRule(items, this.productList)
    + heaiRule(items, this.productList)
    + petiRule(items, this.productList);
    return total;
  }
}