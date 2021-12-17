import type { GetStaticProps, NextPage } from 'next'
import Hamburger from 'hamburger-react'
import Card from '../components/product-card';
import { Product } from '../interfaces';
import styles from '../styles/Card.module.css'

const Products: NextPage = ({products} : {products:Product[]}) => {
    return (
        <div className={`container ${styles.productlist}`} >
            <Hamburger onToggle={toggled => (console.log(toggled))} />

            {products.map((product: Product) => {
                return (
                    <Card key={product.id.toString()} product={product} />
                )
            })}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const products = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then(res => res.json());

    return {
        props: {
            products,
        },
    }
}

export default Products;