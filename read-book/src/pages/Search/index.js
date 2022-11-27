import React, { useState } from 'react';
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { BookService } from '../../services/BookService';
import ListBook from '../components/ListBook';

const Search = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState(null);
    const handleChange = (e) => {
        const value = e.target.value.trim();
        BookService.search({ query: value }).then((data) => {
            if (data.books?.error) {
                setBooks([]);
            } else {
                setBooks(data.books);
            }
        });
    };
    const changeChangeStatus = (status, item) => {
        BookService.update(item.id, {
            shelf: status
        }).then(data => {
            console.log(data);
        });
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <button className="close-search" onClick={
                    () => {
                        navigate('/');
                    }
                }>Close</button>
                <div className="search-books-input-wrapper">

                    <input type="text" onChange={handleChange} placeholder="Search by title or author" name='search' />

                </div>
            </div>
            <div className="search-books-results">
                <ListBook books={books} changeChangeStatus={changeChangeStatus} />
            </div>
        </div>
    );
};

export default Search;