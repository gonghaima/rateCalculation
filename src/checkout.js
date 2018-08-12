export default class Checkout {
  constructor(priceRule){
    this.priceRule = priceRule;
    this.items=[];
  }

  // Getter
  get checkoutName(){
    const rl = this.priceRule;
    return 'myCheckout Name';
  }

  scan(item){
    const result = this.items.push(item);
    return result;
  }
  total(){
    return this.format(this.priceRule.calc(this.items));
  }
  format(data){
    if(Math.floor(data)===data){
      return `\$ ${data}.00`;
    }
    return `\$ ${data}`
  }
};
