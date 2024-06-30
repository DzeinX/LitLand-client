import styles from "../../static/css/MarkingBook.module.css"

export const MarkingBook = ({book}) => {
    return <div className={styles["rating"]}>
        <div className={styles["rating-title"]}>
            <div className={styles["title"]}>Оцените книгу</div>
            <div className={styles["subtitle"]}>Не волнуйтесь, вы всегда можете поменять своё мнение :)</div>
        </div>
        <div className={styles["rating-case"]}>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="1" name="mark"/>
                <input type="submit" value="" title="Оценить на 1" className={styles["star"]}/>
            </form>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="2" name="mark"/>
                <input type="submit" value="" title="Оценить на 2" className={styles["star"]}/>
            </form>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="3" name="mark"/>
                <input type="submit" value="" title="Оценить на 3" className={styles["star"]}/>
            </form>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="4" name="mark"/>
                <input type="submit" value="" title="Оценить на 4" className={styles["star"]}/>
            </form>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="5" name="mark"/>
                <input type="submit" value="" title="Оценить на 5" className={styles["star"]}/>
            </form>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="5" name="mark"/>
                <input type="submit" value="" title="Оценить на 6" className={styles["star"]}/>
            </form>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="5" name="mark"/>
                <input type="submit" value="" title="Оценить на 7" className={styles["star"]}/>
            </form>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="5" name="mark"/>
                <input type="submit" value="" title="Оценить на 8" className={styles["star"]}/>
            </form>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="5" name="mark"/>
                <input type="submit" value="" title="Оценить на 9" className={styles["star"]}/>
            </form>
            <form method="post" className={styles["rating-form"]}>
                <input type="hidden" value="5" name="mark"/>
                <input type="submit" value="" title="Оценить на 10" className={styles["star"]}/>
            </form>
        </div>
        <div className="amount-voices-case">
            {/*<div className="title" th:if="${amountVoices != 0}" th:text="${amountVoices} + ' человек оценило'"></div>*/}
            {/*<div className="title" th:if="${amountVoices == 0}">Ещё никто не оценил, будьте первыми!</div>*/}
        </div>
    </div>
}