import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products =[
        {name:'Lenovo Laptop', id: 1},
        {name:'Asus Laptop', id: 2},
        {name:'Dell Laptop', id: 3},
        {name:'Hp Laptop', id: 4},
        {name:'Toshiba Laptop', id: 5},
        {name:'LG Laptop', id: 6},
    ]
    return (
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd=><Product key={pd.id} prodcut = {pd}></Product>)
            }
        </div>
    );
};

export default Shop;