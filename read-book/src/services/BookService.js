import { get, post, put } from "./BaseApiService";

export const getById = (bookId) => get(`/books/${bookId}`);

export class BookService {

    static getAll = () =>
        get(`/books`);

    static update = (id, query) =>
        put(`/books/${id}`, query);

    static search = (query) =>
        post(`/search`, query);
}
