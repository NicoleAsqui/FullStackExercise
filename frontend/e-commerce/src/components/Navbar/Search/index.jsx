import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext'
import './Search.css'

function Search () {
    const {
        searchValue,
        setSearchValue,
    } = useContext(SearchContext);

    return (
        <div className='SearchContainer'>
            <input
                placeholder='Search...'
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            <img src='src/assets/loupe.png'/>
        </div>
    )
}

export { Search }