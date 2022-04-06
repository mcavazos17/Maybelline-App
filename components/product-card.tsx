import { Rating } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import card from '../styles/Card.module.css'
import Image from 'next/image'
import { Product } from '../interfaces';
import CardDetail from './product-card-detail';

const theme = createTheme({
    palette: {
      primary: {
        main: '#f92a63e7',
      },
    },
  });

const Card = ({Product} : {Product: Product}) =>  {
    const [modalVisibile, setModalVisibility] = useState(false);
    const {image_link, name, rating, price} = Product;

    return (
        <div>
            <div className={card.card}>
                <div className={card.imageCard}>
                    <Image 
                        src={image_link.toString()} 
                        alt={name.toString()}
                        height={'300'}
                        width={'300'}
                    />
                </div>

                <div className={card.container}>
                    <div>
                        <Rating
                            name="product-rating"
                            value={Number(rating)}
                            readOnly
                        />
                    </div>

                    <div style={{height: '7em'}}>
                        <h4 className={card.text}><b>{name}</b></h4>
                    </div>

                    <div>
                        <h4 className={card.text}>Price: {'$' + price}</h4>
                    </div>

                    <div style={{marginTop: '1em', marginBottom: '1em'}}>
                        <ThemeProvider theme={theme}>
                            <Button 
                                variant="contained" 
                                onClick={() => setModalVisibility(true)}>
                                View More
                            </Button>
                        </ThemeProvider>
                    </div>

                    <Dialog
                    open={modalVisibile}
                    onClose={() => setModalVisibility(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                       <CardDetail product={Product} />
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default Card;