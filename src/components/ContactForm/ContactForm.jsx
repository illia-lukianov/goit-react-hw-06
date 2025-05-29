import { ErrorMessage, Field, Form, Formik } from 'formik'
import styles from './ContactForm.module.css'
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { PhoneSchema } from './PhoneSchema';

export default function ContactForm({addNumber}) {

    const initialValues = {
        username: "",
        phoneNumber: "",
    };

    const nameFieldId = useId();
    const phoneFieldId = useId();

    const handleSubmit = (event, { resetForm }) => {
        addNumber({
            id: nanoid(),
            name: event.username,
            number: event.phoneNumber,
        });
        resetForm();
    };

    return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={PhoneSchema}>
            <Form className={styles.formContainer}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field id={nameFieldId} name="username" type="text" />
            <ErrorMessage
                name='username'
                component='span'
                className={styles.validationMsg}
            />
                
            <label htmlFor={phoneFieldId}>Number</label>
            <Field id={phoneFieldId} name="phoneNumber" type="text" />
            <ErrorMessage
                name='phoneNumber'
                component='span'
                className={styles.validationMsg}
            />    
                
            <button type='submit' className={styles.submitBtn}>Add contact</button>
        </Form>
    </Formik>
    )
}