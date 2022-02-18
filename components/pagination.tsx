import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import paging from '../styles/Pagination.module.css';

const theme = createTheme({
    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                      "backgroundColor": "#f92a63e7",
                    },
                    "&.Mui-selected:hover": {
                        "backgroundColor": "#ae1d45e7",
                    },
                }
            }
        }
    }
  });

const Paging = ({count} : { count: number }) =>  {
    return (
        <div className={paging.section}>
            <ThemeProvider theme={theme}>
                <Pagination count={count} color="primary" />
            </ThemeProvider>
        </div>
    );
}

export default Paging;