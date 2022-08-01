import { Formik, Form } from 'formik'
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={{ name: "" }}
                onSubmit={values => console.log(values)}
            >
                {
                    (formik) => (
                        <Form>
                            {
                                formJson.map(({ type, name, placeholder, label }) => {
                                    return <MyTextInput key={name} type={type as any} name={name} placeholder={placeholder} label={label} />
                                })
                            }
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
