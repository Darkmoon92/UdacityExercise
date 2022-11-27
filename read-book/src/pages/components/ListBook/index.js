import React from 'react';
import Book from '../Book';
import './style.scss';
const ListBook = ({ title, books, changeChangeStatus }) => {
    return (
        <>
            <div className="bookshelf">
                {title ? <h2 className="bookshelf-title">{title}</h2> : <></>}
                <div className="bookshelf-books">
                    <ol className="books-grid"> {books?.map(item => {
                        return (
                            <div key={item.id} className='col-2'>
                                <Book item={item} changeChangeStatus={changeChangeStatus}></Book>
                            </div>
                        );
                    })}</ol>
                </div>
            </div>
        </>
    );
};

export default ListBook;;