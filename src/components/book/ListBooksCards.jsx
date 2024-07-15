import {BookCard} from "./BookCard";

export const ListBooksCards = ({books}) => {
    return <div style={{gridTemplateColumns: 'repeat(5, 1fr)', display: "grid", gap: "40px"}}>
        {books.map((book, index) => {
            return <BookCard book={book} key={index} />;
        })}
    </div>
}