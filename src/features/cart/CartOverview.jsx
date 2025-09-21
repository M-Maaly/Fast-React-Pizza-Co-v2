import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';

function CartOverview() {
  const totalCartquantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartPrice) return null
  return (
    <div className="bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 text-sm sm:text-base flex justify-between items-center">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartquantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Button type={'small'} to={'/cart'}>Open cart &rarr;</Button>
    </div>
  );
}

export default CartOverview;
