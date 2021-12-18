import type { GetStaticProps } from 'next'
import Card from '../components/product-card';
import { Product } from '../interfaces';
import styles from '../styles/Card.module.css'
import SearchAppBar from '../components/app-bar';
import { useState } from 'react';


const Products = ({products} : {products:Product[]})  => {
    return (
        <div>
            <div style={{marginBottom: '6em'}}>
                <SearchAppBar />
            </div>

            <div className={`container ${styles.productlist}`} >
                {products.map((product: Product) => {
                    return (
                        <Card key={product.id.toString()} product={product} />
                    )
                })}
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const products = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then(res => res.json());

    return {
        props: {
            products
        },
    }
}

export default Products;