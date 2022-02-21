import { useEffect, useState } from 'react';
import { Product } from '../interfaces';
import {Card} from '.';

const ProductList = (props: { Products : Product[] }) => {
    const { Products } = props;
    const [allProducts, setAllProducts] = useState(Products);

    useEffect(() => {
        setAllProducts(Products);
      }, [Products])

    return (
        <>{allProducts.map((product: Product) => {
            return (
                <Card key={product.id.toString()} Product={product} />
            )
        })}</>
    );
}

export default ProductList;
