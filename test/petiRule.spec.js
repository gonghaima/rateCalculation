import test from 'ava';
import  {petiRule} from '../src/pricingRules/petiRule';
import productData from '../config/product.json'

const items = ["heai"];
const items_discount_peti_1 = ["heai","peti"];
const items_discount_peti_2 = ["heai","peti","peti"];

test('petiRule should only look for peti item', t => {
  const result = petiRule(items, productData);
	t.is(result, 0);
});

test('petiRule should be free per health item', t => {
  const result = petiRule(items_discount_peti_1, productData);
	t.is(result, 0);
});

test('only one petiRule should be free per health item', t => {
  const result = petiRule(items_discount_peti_2, productData);
	t.is(result, 30);
});