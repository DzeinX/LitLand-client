import {TableBooksEntry} from "./TableBooksEntry";

export const TableBooks = ({books}) => {
    return <table style={{border: '1px solid #ccc', width: '100%', borderCollapse: 'collapse'}}>
        <thead style={{backgroundColor: 'goldenrod', color: 'white'}}>
        <tr style={{height: "30px"}}>
            <th>Название</th>
            <th>Язык</th>
            <th>Количество страниц</th>
            <th>Цена</th>
            <th>Новинка</th>
            <th>Статус книги</th>
            <th>Описание</th>
            <th>Год издания</th>
            <th>Рейтинг</th>
            <th>Издание</th>
            <th>Жанр</th>
            <th>Автор</th>
            <th>Номер ISBN</th>
        </tr>
        </thead>
        <tbody>
        {books.map((book, key) => <TableBooksEntry book={book} key={key}/>)}
        </tbody>
    </table>
}
