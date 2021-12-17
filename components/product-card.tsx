import Button from '@mui/material/Button';
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { Product } from '../interfaces';

const Card = ({product} : {product:Product}) =>  {
return (
    <div className={styles.card}>
        <Image 
            src={product.image_link.toString()} 
            alt={product.name.toString()}
            height={'300'}
            width={'300'}
        />

        <div className={styles.container}>
            <h4><b>{product.name}</b></h4>
            <p>{product.description.slice(0,140)}...</p>

            <Link href={product.product_link.toString()} passHref>
                <Button variant="contained" color="secondary">Buy</Button>
            </Link>
        </div>
    </div>
);
}

export default Card;