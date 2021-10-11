import React, {useState} from 'react';

import styles from "../../styles/filter.module.scss"

interface IFilter {
    filterType: string
    setFilterType: React.Dispatch<React.SetStateAction<string>>
    filterName: string
    setFilterName: React.Dispatch<React.SetStateAction<string>>
}

const Filter : React.FC<IFilter> = ({filterName, setFilterName, filterType, setFilterType}) => {

    const [filterStatus, setFilterStatus] = useState(false)

    function onChangeValue(event: any) {
        setFilterType(event.target.value)
    }

    return (
        <section className={styles["filter-container"]}>

            <div className={styles["filter__panel"]}>
                <button onClick={() => setFilterStatus(!filterStatus)} className={filterStatus ? `btn ${styles['filter__show']}  ${styles['filter__show--active']}` : `btn ${styles['filter__show']}`}>Filters</button>
                <div className={filterStatus ? `${styles['filter__body']} ${styles['filter__body--active']}` : `${styles['filter__body']}`}>
                    <div className={styles["filter__search"]}>
                        <label htmlFor="filterSearch">Search by title:</label>
                        <input id="filterSearch" type="text" value={filterName} onChange={(e) => setFilterName(e.target.value)}/>
                    </div>

                    <div className={styles["filter__sort"]}  onChange={onChangeValue}>
                        <p>Sort by type</p>

                        <input type="radio" id="sortDate"
                               name="sortType" value="date" defaultChecked={true} />
                            <label htmlFor="sortDate">By date</label>

                            <input type="radio" id="sortTitle"
                                   name="sortType" value="titleName" />
                                <label htmlFor="sortTitle">By title name</label>

                                <input type="radio" id="sortAuthor"
                                       name="sortType" value="authorName" />
                                    <label htmlFor="sortAuthor">By author name</label>
                    </div>

                    <div className={styles["filter__limit"]}>
                        <label htmlFor="filterLimit">Post on page:</label>
                        <select id="filterLimit">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="0">All</option>
                        </select>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Filter;