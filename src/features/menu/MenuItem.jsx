import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/updateItemQuantity';

function MenuItem({ pizza }) {
  const dispach =useDispatch()

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  
  const currentQuantity = useSelector(getCurrentQuantityById(id))

  const isInCart = currentQuantity > 0

  console.log({currentQuantity});
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    console.log(`Add to cart ${name}`);
    // dispatch an action to add this item to the cart
    dispach(addItem(newItem))
  }
  return (
    <li className="flex gap-4 py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && 'opacity-70 grayscale'}`}
      />
      <div className="flex grow pt-0.5 flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between font-semibold">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && 
          <div className='flex items-center gap-3 sm:gap-8'>
            <UpdateItemQuantity pizzaId={id} quantity={currentQuantity} />
            <DeleteItem pizzaId={id} />
          </div>
          }
          {
           !soldOut && !isInCart && <Button type="small" onClick={handleAddToCart} >Add To Cart</Button> 
          }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
