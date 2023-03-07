import './SearchBox.sass'
import React, {useState} from "react";

function SearchBox() {
    const [userName, setUserName] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const url = `https://api.github.com/users/${userName}`;
            const response = await fetch(url);
            const userData = await response.json();
        } catch (error) {
        }

    }
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return <form className='search-box' onSubmit={handleFormSubmit}>
        <input className='search-box__box'
               onChange={(e) => setUserName(e.target.value)}
               value={userName} type='text'
               placeholder={'Search GitHub username...'}/>
        <button className='search-box__btn' onClick={fetchData}>Search</button>
    </form>
}

export default SearchBox;