import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';


function Checkout ({customerInfo}){
    const history = useHistory();
    const dispatch = useDispatch();  
    const cart = useSelector(store => store.cart);

    let info = {
        customer_name:customerInfo.name, 
        street_address:customerInfo.address, 
        city:customerInfo.city, 
        zip:customerInfo.zip,
        type:customerInfo.type  
    }

    function onCheckout(){
        window.alert("Order Submitted!");

        axios.post(`/api/order`, info)
        .then(() => {
            // [] clear cart reducer
            dispatch({ type: 'CLEAR_CART' }); 
                    
            history.push('/' );
    });
}
    return(

        <>
            <h2> Step 3: Checkout </h2>
            <p>Hibaq Gelle</p>
            <p>101 street view</p>
            <p> Minneapolis, 55418 </p>
            <h4> Delivery </h4>

            <table>
            
                <tbody>
                {cart.map((pizza) => {
                    return <tr key={pizza.id} >
                        <td><h1>Meat Lover</h1></td>
                        <td><p>$15.00</p></td>
                        </tr>
                })} 
                </tbody>
            </table>

            <h4> Total: $15.00 </h4>

            <button 
                type='submit'
                onClick={onCheckout}
            >
                CHECKOUT
            </button>
        </>
    )
}

export default Checkout; 
