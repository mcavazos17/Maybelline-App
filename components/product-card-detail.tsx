import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image'
import { Product } from '../interfaces';
import card from '../styles/CardDetail.module.css';
import { GetColorName } from 'hex-color-to-color-name';

const buttonTheme = createTheme({
    palette: {
      primary: {
        main: '#f92a63e7',
      },
    },
  });

const ratingTheme = createTheme({
    components: {
        MuiRating: {
            styleOverrides: {
                root: {
                    '& .MuiRating-iconFilled': {
                        color: '#f92a63e7',
                    },
                },
            }
        }
    }
});

const CardDetail = ({product} : {product:Product}) =>  {
    return (
        <div>
            <div className={card.card}>
                <div className={card.imageCard}>
                    <Image 
                        src={product.image_link.toString()} 
                        alt={product.name.toString()}
                        height={'300'}
                        width={'300'}
                    />
                </div>

                <div className={card.container}>
                    <ThemeProvider theme={ratingTheme}>
                        <Rating
                            name="product-rating"
                            value={Number(product.rating)}
                            readOnly
                            color='primary'
                        />
                    </ThemeProvider>

                    <div className={`${card.tag_container} ${card.spacing}`}>
                        {product.product_colors.map((colour, index) => {
                            return (
                                <div
                                className={card.tag}
                                key={index} 
                                style={{backgroundColor: `${colour.hex_value}`}}>
                                    {colour.colour_name ?? GetColorName(colour.hex_value.toString())}
                                </div>
                            )
                        })}
                    </div>

                    <div className={card.spacing}>
                        <h4 className={card.text}><b>{product.name}</b></h4>
                    </div>

                    <div className={card.spacing}>
                        <p className={card.text}>{product.description}</p>
                    </div>

                    <div className={card.spacing}>
                        <h4 className={card.text}>Price: {'$' + product.price}</h4>
                    </div>

                    <div className={card.spacing}>
                        <ThemeProvider theme={buttonTheme}>
                            <a href={product.product_link.toString()} target='_blank' rel="noreferrer">
                                <Button variant="contained">
                                    Buy Now
                                </Button>
                            </a>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetail;