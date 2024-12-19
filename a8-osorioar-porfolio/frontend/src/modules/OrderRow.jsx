import OrderQuantity from "./OrderQuantity";
import {useState} from 'react';

function OrderRow({product, updateRunningTotal}) {
    const [subtotal, setSubtotal] = useState(0);

    const handleQuantityChange = (quantity) => {
        const newSubtotal = product.price * quantity;
        updateRunningTotal(subtotal, newSubtotal); // Update the running total
        setSubtotal(newSubtotal); // Update the row's subtotal
    };

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US', {style: 'currency', 
                currency: 'USD', minimumFractionDigits: 2})}</td>
            <td><OrderQuantity onQuantityChange={handleQuantityChange} /></td>
            <td>{subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
        </tr>
    )
}

export default OrderRow