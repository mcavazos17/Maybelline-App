import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import filter from '../styles/Filter.module.css';

const FilterPanel = () =>  {
    const [filterVisibile, setFilterVisibility] = useState(false);
    const [sortVisibile, setSortVisibility] = useState(false);

    return (
        <div className={filter.section}>
            <a className={filter.items}>
                <h4 className={filter.title}>Filter</h4>
                
                <KeyboardArrowDownIcon />
            </a>

            <a className={filter.items}>
                <h4 className={filter.title}>Sort</h4>

                <KeyboardArrowDownIcon />
            </a>
        </div>
    );
}

export default FilterPanel;