import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

export default function ContactList({phoneData, removeNumber}) {
    return (
    <div className={styles.contactsContainer}>
        {phoneData.map((number) =>
            <Contact key={number.id} numberInfo={number} removeNumber={removeNumber} />)}
    </div>
    )
}