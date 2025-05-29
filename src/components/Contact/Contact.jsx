import styles from './Contact.module.css'
import { PiPhoneCallBold } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";

export default function Contact({numberInfo: { name, number, id }, removeNumber}) {
    return (
        <div className={styles.contact}>
            <div className={styles.contactInfo}>
                <IoIosContact className={styles.contactNameIcon} />
                <p className={styles.contactText}>{name}</p>
                <PiPhoneCallBold className={styles.contactNumberIcon} />
                <p className={styles.contactText}>{number}</p>
            </div>
            <button className={styles.deleteButton} onClick={() => {removeNumber(id)}}>Delete</button>
        </div>
    )
}