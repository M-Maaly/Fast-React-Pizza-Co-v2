import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

function UpdateItemQuantity({pizzaId, quantity}) {
    const dispatch = useDispatch()

    return (
            <div className="flex items-center gap-2 md:gap3">
                <Button disabled={quantity === 1}  type={'round'} onClick={()=> dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
                <span className='text-sm font-medium'>{quantity}</span>
                <Button type={'round'} onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
            </div>
    )
}

export default UpdateItemQuantity
