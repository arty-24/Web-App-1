import OrderRow from "./OrderRow";
import {useState} from 'react';

function OrderPage({products}){
    const [runningTotal, setRunningTotal] = useState(0);

    const updateRunningTotal = (oldSubtotal, newSubtotal) => {
        setRunningTotal((prevTotal) => prevTotal - oldSubtotal + newSubtotal);
    };
    return (
        <>
            <h2>Order Pet Products</h2>
            <article>
                <p></p>
                <table id="order">
                    <caption>Current Products</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) =>
                        <OrderRow
                            product={product}
                            key={i}
                            updateRunningTotal={updateRunningTotal}
                    />)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="3" style={{textAlign: "right"}}>Running total: </th>
                            <td>{runningTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                    </tfoot>
                </table>
            </article>
        </>
    )
}
export default OrderPage;