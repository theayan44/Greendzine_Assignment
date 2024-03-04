import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./style.css";
const SearchBar = ({ searchValue, setSearchValue }) => {
    return (
        <div className='search-bar-wrapper'>
            <div className='search-bar'>
                <input type="text" placeholder="Search with name" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <SearchRoundedIcon />
            </div>
        </div>
    )
}

export default SearchBar;