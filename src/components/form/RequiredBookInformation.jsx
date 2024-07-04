import {useSelector} from "react-redux";

export const RequiredBookInformation = () => {
    const languageReducer = useSelector(state => state.languageReducer)
    const genreReducer = useSelector(state => state.genreReducer)
    const publisherReducer = useSelector(state => state.publisherReducer)

    return <>
        <input type="text" name="name" placeholder="Название книги" required/>
        <select name="language" required>
            {
                languageReducer.map((language, key) => {
                    return <option key={key}
                                   value={language.code}>{language.languageName}</option>
                })
            }
        </select>
        <input type="number" name="price" placeholder="Цена" required/>
        <input type="number" name="pages" placeholder="Количество страниц" required/>
        <textarea style={{resize: 'vertical'}} name="description" placeholder="Описание"/>
        <input type="number" name="publicationYear" placeholder="Год издания" required/>
        <input type="number" name="rating" placeholder="Рейтинг"/>
        <select name="publisher" required>
            {
                publisherReducer.map((publisher, key) => {
                    return <option key={key}
                                   value={publisher.hash}>{publisher.name}</option>
                })
            }
        </select>
        <select name="genre" required>
            {
                genreReducer.map((genre, key) => {
                    return <option key={key}
                                   value={genre.hash}>{genre.name}</option>
                })
            }
        </select>
        <input type="text" name="authors" placeholder="Автор" required/>
        <input type="text" name="ISBNNumber" placeholder="Номер ISBN"/>
        <label>
            <span>Это новинка</span>
            <input type="checkbox" name="isNew" placeholder="Новинка"/>
        </label>
    </>
}