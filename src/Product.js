import React from 'react'
import material from './styles/cartStyle.module.css';

function Product(props) {
    const {pic,title,price,children,reviews} = props;
    return (
            <div className={material.product_item}>
                <div className={material.left_block} >
                    <img  src={pic} alt="phone" />
                </div>
                <div className={material.right_block}>
                    <p className={material.title_prod}>{title}</p>
                    <p className={material.price_prod}>{price}</p>
                    <span className={material.child}>{children}</span>
                    <br />
                     <span className={material.ratings}>{reviews}</span>   
                        
                    <button style={{backgroundColor:'yellow', borderRadius:'2px'}}>Add To Cart</button>   
                </div>
            </div>
    )
}


export default Product
