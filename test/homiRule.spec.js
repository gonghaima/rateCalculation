import test from 'ava';
import  {homiRule} from '../src/pricingRules/homiRule';
import productData from '../config/product.json'

const items = ["homi"];
const items_discount_peti_1 = ["homi","homi","homi","homi","homi"];

test('homiRule rule should caculate as usual, when 4 or less', t => {
  const result = homiRule(items, productData);
	t.is(result, 549.99);
});

test('homiRule rule should give discount when over 4', t => {
  const result = homiRule(items_discount_peti_1, productData);
	t.is(result, 2499.95);
});
