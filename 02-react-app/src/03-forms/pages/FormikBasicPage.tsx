import { useFormik } from 'formik';
import '../styles/styles.css';

export const FormikBasicPage = () => {
    const { handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    });
    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange={handleChange} value={values.firstName} />
                <span>First name is required</span>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} value={values.lastName} />
                <span>Last name is required</span>

                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" onChange={handleChange} value={values.email} />
                <span>Email is required</span>
                <span>Check for an valid email format</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
