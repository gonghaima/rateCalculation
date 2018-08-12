import test from 'ava';
import  {heaiRule} from '../src/pricingRules/heaiRule';
import productData from '../config/product.json'

const items = ["heai"];
const items_discount_peti_1 = ["heai","peti"];
const items_discount_peti_2 = ["heai","peti","peti"];

test('heai rule should caculate as usual', t => {
  const result = heaiRule(items, productData);
	t.is(result, 1399.99);
});

test('heai rule should only taking care health item', t => {
  const result = heaiRule(items_discount_peti_1, productData);
	t.is(result, 1399.99);
});

test('heai rule should only taking care health item', t => {
  const result = heaiRule(items_discount_peti_2, productData);
	t.is(result, 1399.99);
});