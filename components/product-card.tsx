import { Rating } from '@mui/material';
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { Product } from '../interfaces';

const Card = ({product} : {product:Product}) =>  {
    return (
        <a href={product.product_link.toString()} target='_blank' rel="noreferrer">
            <div className={styles.card}>
                <div className={styles.imageCard}>
                    <Image 
                        src={product.image_link.toString()} 
                        alt={product.name.toString()}
                        height={'300'}
                        width={'300'}
                    />
                </div>

                <div className={styles.container}>
                    <div>
                        <Rating
                            name="product-rating"
                            value={Number(product.rating)}
                            readOnly
                        />
                    </div>

                    <div style={{height: '8em'}}>
                        <h4><b>{product.name}</b></h4>
                    </div>

                    <div>
                        <h4>Price: ${product.price}</h4>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Card;