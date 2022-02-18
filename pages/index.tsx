import type { GetServerSideProps } from 'next'
import { useState } from 'react';
import { Product } from '../interfaces';
import {SearchAppBar, FilterPanel, Card, Paging} from '../components';
import card from '../styles/Card.module.css'
import filter from '../styles/Filter.module.css'
import paging from '../styles/Pagination.module.css'
import appbar from '../styles/AppBar.module.css'
import home from '../styles/Home.module.css'

const Products = ({products, pages} : {products:Product[], pages: number})  => {
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

            <div className={home.filtersort}> 
                <div className={filter.component}>
                    <FilterPanel />
                </div>

                <div className={paging.component}>
                    <Paging count={pages}/>
                </div>
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
    const products = await fetch('https://maybelline-app.herokuapp.com//api/search').then(res => res.json());
    const pages = Math.ceil(products.length / 10);

    return {
        props: {
            pages,
            products: products.splice(0, 5)
        }, 
    }
}

export default Products;