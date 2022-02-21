import type { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react';
import { Product } from '../interfaces';
import {SearchAppBar, FilterPanel, Paging, ProductList} from '../components';
import card from '../styles/Card.module.css'
import filter from '../styles/Filter.module.css'
import paging from '../styles/Pagination.module.css'
import appbar from '../styles/AppBar.module.css'
import home from '../styles/Home.module.css'

const Products = ({products, pages} : { products:Product[], pages: number}) => {
    const [allProducts, setAllProducts] = useState(products);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setAllProducts(products);
        setFilteredProducts(products);
      }, [products])

    const SearchOnChange = (value: String) => {
        const filteredProducts = allProducts.filter(product => {
            return product.name.toUpperCase().includes(value.toUpperCase().toString())
        });

        setFilteredProducts(filteredProducts);
    }

    return (
        <div>
            <div className={appbar.component}>
                <SearchAppBar OnChange={SearchOnChange}/>
            </div>

            <div className={home.filtersort}> 
                <div className={filter.component}>
                    <FilterPanel />
                </div>

                <div className={paging.component}>
                    <Paging PageCount={pages}/>
                </div>
            </div>

            <div className={card.component}>
                <ProductList Products={filteredProducts}/>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const products = await fetch('https://maybelline-app.herokuapp.com//api/search').then(res => res.json());
    const pages = Math.ceil(products.length / 10);
    const seed = query.seed || 0;

    return {
        props: {
            pages,
            products: products.splice(seed, 10)
        }, 
    }
}

export default Products;