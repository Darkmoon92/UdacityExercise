import React from 'react';
import "./style.scss";
const Book = ({ item, changeChangeStatus }) => {
    if (!item.shelf) {
        item.shelf = 'none';
    }
    return (
        <>
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${item?.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={item.shelf} onChange={(e) => {
                                changeChangeStatus(e.target.value, item);
                            }}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{item.title}</div>
                    {item?.authors?.map((item, key) => {
                        return <div key={key} className="book-authors">{item}</div>;
                    })}

                </div>
            </li>

        </>
    );
};

export default Book;