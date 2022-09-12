import './Admin.css';
import axios from 'axios'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Admin = () => {
    const dispatch = useDispatch();

    const orderInfo = useSelector(store => store.orderInformation)

    useEffect(() => {
        getOrderInformation();
    }, [])

    const getOrderInformation = () => {
        axios.get('/api/order')
            .then(res => {
                dispatch({
                    type: 'GET_ORDER_INFORMATION',
                    payload: res.data
                })
            })
    }

    return (
        <>
           <table className="admin-order-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>

                    {orderInfo.map((item) => {
                        return(
                        <>
                        <tr>
                            <td>{item.customer_name}</td>
                            <td>{item.time}</td>
                            <td>{item.type}</td>
                            <td>{item.total}</td>
                        </tr>
                        </>
                        )
                    })}

            </tbody>
           </table>
        </>
    )
}


export default Admin;