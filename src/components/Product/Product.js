import React from 'react';

const Product = (props) => {

    const {name, id} = props.prodcut;
    return (
        <div style={{border:'1px solid tomato'}}>
            <h5>{name}</h5>
            <button>Add to cart</button>
            
        </div>
    );
};

export default Product;