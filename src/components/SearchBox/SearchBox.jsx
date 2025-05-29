import styles from './SearchBox.module.css'

export default function SearchBox({value, onFilter}) {

    return (
        <>
            <p className={styles.searchBoxDescr}>Find contacts by name</p>
            <input className={styles.inputSearchBox} type='text' onChange={(event) => onFilter(event.target.value)} value={value} />
        </>
    )
}