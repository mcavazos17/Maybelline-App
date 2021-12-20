import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import filter from '../styles/Filter.module.css'

const FilterPanel = () =>  {
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