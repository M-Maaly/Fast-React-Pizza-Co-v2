import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='py-3 px-4 space-y-7'>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>

      <p className='font-semibold text-center '>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
