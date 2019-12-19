import React from 'react';
import { withFormik,Form,Field } from 'formik';

const BoardingForm = () => {
    return (
        <Form>
            <label htmlFor="name">Name:
                <Field type="name" id="name" name="name" placeholder="Name" />
            </label>

            <label htmlFor="email">Email:
                <Field type="email" id="email" name="email" placeholder="Email" />
            </label>

            <label htmlFor="email">Password:
                <Field type="password" id="password" name="password" placeholder="Password" />
            </label>
            
            <label htmlFor="tos" className="tos">
                <Field type="checkbox" name="tos" className="tos"/>
                Terms of Service
            </label>
        
            <button type="submit">Submit</button>
        </Form>
    );
}

const FormikForm = withFormik({

})(BoardingForm)

export default FormikForm;