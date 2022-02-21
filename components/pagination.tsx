import * as React from 'react';
import { useRouter } from "next/router"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import paging from '../styles/Pagination.module.css';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const pageSelectTheme = createTheme({
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

const pageTheme = createTheme({
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
  

const Paging = (props: { PageCount: number }) =>  {
    const router = useRouter();
    const [pagingLimit, setPagingLimit] = useState(10);
    const PaginationOnChange = (event: React.ChangeEvent<unknown>, value: number) => router.push({ query: {seed: (value != 1 ? (value - 1) * 10 - 1 : 0).toString()} });
    
    return (
        <div className={paging.section}>
            <div className={paging.page_select}>
                <div className={paging.page_title}>View</div>

                <ThemeProvider theme={pageTheme}>
                    <Select
                        value={pagingLimit}
                        onChange={(event: SelectChangeEvent<number>) => {setPagingLimit(event.target.value as number)}}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                    </Select>
                </ThemeProvider>
            </div>

            <div>
                <ThemeProvider theme={pageSelectTheme}>
                    <Pagination 
                        count={props.PageCount} 
                        color="primary" 
                        onChange={PaginationOnChange}
                    />
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Paging;