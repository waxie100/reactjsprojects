import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';


const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body">
            <Link to='/bookdetail' onClick={() => addProduct(product)}><img  style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt=""/></Link>
            <p className="text-center">{product.name}</p>
			<p className="text-center-custom">{product.description}</p>
            <h3 className="text-left">{/*formatNumber(product.price)*/}</h3>
            <div className="text-right">
                
                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Buy more</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Buy Button</button>
                }
                
            </div>
        </div>
     );
}
 
export default ProductItem;