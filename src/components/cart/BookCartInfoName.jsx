export const BookCartInfoName = ({book}) => {
    return <a href={"/book/" + book.hash}>
        <div>{book.name}</div>
        <div>{book.authors}</div>
    </a>
}