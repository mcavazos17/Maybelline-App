import { useEffect, useRef} from 'react';
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
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: '2.5em',
                    '&.Mui-focused fieldset': {
                        borderColor: '#f92a63e7 !important'
                    },
                    '&:hover': {
                        'fieldset': {
                            borderColor: '#f92a63e7 !important'
                        },
                    }
                },
            },
        },
        MuiMenuItem: {
            styleOverrides:{
                root: {
                    "&.Mui-selected": {
                        "backgroundColor": "#ae1d451f !important",
                    },
                }
            }
        }
    }
});
  

const Paging = (props: { PageCount: number, ProductCount: number}) =>  {
    const element = useRef<typeof Pagination>(null);
    const router = useRouter();
    const [pagingLimit, setPagingLimit] = useState(10);
    const [pagingSelect, setPagingSelect] = useState(props.PageCount);
    const [currentPage, setCurrentPageSelect] = useState(1);

    const PaginationOnChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push({ query: {seed: (value != 1 ? (value - 1) * pagingLimit - 1 : 0).toString(), limit: pagingLimit} });
        setCurrentPageSelect(value);
    };

    const PaginationViewOnChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
        const limit = event.target.value as number;
        router.push({ query: {seed: 1, limit} });
        setPagingLimit(limit);
    };

    useEffect(() => {
        if(pagingSelect != props.PageCount)
        setCurrentPageSelect(1);

        setPagingSelect(props.PageCount);
      }, [pagingSelect, props.PageCount]);
    
    return (
        <div className={paging.section}>
            <div className={paging.page_select}>
                <div className={paging.page_title}>View</div>
                <ThemeProvider theme={pageTheme}>
                    <Select
                        value={pagingLimit}
                        onChange={PaginationViewOnChange}
                    >
                        {[...Array(props.ProductCount)].map((value: any, index: any) => {
                            const item = (index + 1) * 10;

                            return (
                                <MenuItem key={index + 1} value={item}>{item}</MenuItem>
                            )
                        })}
                    </Select>
                </ThemeProvider>
            </div>

            <div>
                <ThemeProvider theme={pageSelectTheme}>
                    <Pagination
                        ref={element}
                        count={pagingSelect} 
                        color="primary" 
                        onChange={PaginationOnChange}
                        page={currentPage}
                    />
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Paging;