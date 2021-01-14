import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons'
import { CartContext } from '../../contexts/CartContext';

import { formatNumber } from '../../helpers/utils';

const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={product.name}
                style={{margin: "0 auto", maxHeight: "100px"}} 
                src={product.photo} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
            <p className="mb-1">Order Placed: {Date()} </p>
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">{product.name}</p>
                <p className="mb-1">Price: {formatNumber(product.price)} </p>
                <p className="mb-1"><b>Status:</b> Delivered</p>
            </div>
            
            
        </div>
     );
}
 
export default CartItem;