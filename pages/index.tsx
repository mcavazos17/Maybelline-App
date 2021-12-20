import type { GetServerSideProps } from 'next'
import { useState } from 'react';
import { Product } from '../interfaces';
import {SearchAppBar, FilterPanel, Card} from '../components';
import card from '../styles/Card.module.css'
import filter from '../styles/Filter.module.css'
import appbar from '../styles/AppBar.module.css'

const Products = ({products} : {products:Product[]})  => {
    const [allProducts, setAllProducts] = useState(products);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const HandleOnChange = (value: String) => {
        const filteredProducts = allProducts.filter(product => {
            console.log(`${product.name} | ${value}`)
            return product.name.toUpperCase().includes(value.toUpperCase().toString())
        });

        setFilteredProducts(filteredProducts);
    }

    return (
        <div>
            <div className={appbar.component}>
                <SearchAppBar OnChange={HandleOnChange}/>
            </div>

            <div className={filter.component}>
                <FilterPanel />
            </div>

            <div className={card.component}>
                {filteredProducts.map((product: Product) => {
                    return (
                        <Card key={product.id.toString()} product={product} />
                    )
                })}
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const products = await fetch('http://localhost:3000/api/search').then(res => res.json());

    return {
        props: {
            products
        }, 
    }
}

export default Products;