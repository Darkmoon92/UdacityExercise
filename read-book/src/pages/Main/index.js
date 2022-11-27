import React, { useEffect, useState } from 'react';
import { BookService } from '../../services/BookService';
import ListBook from '../components/ListBook';
import "./style.scss";
import { useNavigate } from "react-router-dom";

const TYPE_SECTION = {
    'currentlyReading': 'Currently Reading',
    'read': 'Read',
    'wantToRead': 'Want To Read'
};

const Main = () => {
    const [listStatusBook, setListStatusBook] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        initApp();
    }, []);
    const initApp = () => {
        BookService.getAll().then(data => {
            let typeStatus = [];
            data?.books.forEach(element => {
                typeStatus.push(element.shelf);
            });
            typeStatus = [...new Set(typeStatus)];
            let listStatusBook = {};
            typeStatus.forEach((e) => {
                listStatusBook[e] = {};
                listStatusBook[e].titleSection = TYPE_SECTION[e];
                data?.books.forEach(element => {
                    if (element.shelf === e) {
                        if (listStatusBook[e].data) {
                            listStatusBook[e].data.push(element);
                        } else {
                            listStatusBook[e].data = [element];
                        }
                    }
                });
            });
            setListStatusBook(listStatusBook);
        });
    };
    const changeChangeStatus = (status, item) => {
        BookService.update(item.id, {
            shelf: status
        }).then(data => {
            initApp();
        });
    };
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {Object.keys(listStatusBook ?? {})?.map(item => {
                return <ListBook changeChangeStatus={changeChangeStatus} key={item} books={listStatusBook[item].data} title={listStatusBook[item].titleSection} />;
            })}
            <div className="open-search">
                <button onClick={() => {
                    navigate('search');
                }}>Add a book</button>
            </div>
        </div>
    );
};

export default Main;