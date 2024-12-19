import {useState} from 'react';
import {GoChevronDown, GoPlus} from 'react-icons/go';

function OrderQuantity({onQuantityChange}){
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        if (quantity < 10){
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    const decrement = () => {
        if (quantity > 0){
            const newQuantity = quantity - 1
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    return (
        <div class="clicker">
            <i><GoChevronDown onClick={decrement} /></i>
            {quantity}
            <i><GoPlus onClick={increment} /></i>
        </div>
    );
}

export default OrderQuantity