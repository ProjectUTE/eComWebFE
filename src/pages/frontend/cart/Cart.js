import { MainLayout } from '~/layouts';
import { Breadcrumb, EstimateShipping, ShoppingCart } from './sections';

function Cart() {
  return (
    <MainLayout>
      <Breadcrumb />
      <ShoppingCart />
      <EstimateShipping />
    </MainLayout>
  );
}

export default Cart;
