import React from 'react';
import { withFormik } from 'formik';

const Form = () => {
    return (
        <form>
            <label htmlFor="name">Name:
                <input type="name" name="name" placeholder="Name" />
            </label>

            <label htmlFor="email">Email:
                <input type="email" name="email" placeholder="Email" />
            </label>

            <label htmlFor="email">Password:
                <input type="password" name="password" placeholder="Password" />
            </label>

            <label htmlFor="tos">
                <input type="checkbox" name="tos" />
                Terms of Service
            </label>

            <input type="button" value="Submit" />
        </form>
    );
}

const FormikForm = withFormik({

})(Form)

export default FormikForm;