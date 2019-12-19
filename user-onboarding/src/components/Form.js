import React from 'react';
import { withFormik,Form,Field } from 'formik';
import * as Yup from "yup";

const BoardingForm = ({ values, errors, touched }) => {
    return (
        <Form>
            <label htmlFor="name">Name:
                <Field type="name" id="name" name="name" placeholder="Name" />
                {   
                    touched.name &&
                    errors.name && (
                        <p>{errors.name}</p>
                    )
                }
            </label>

            <label htmlFor="email">Email:
                <Field type="email" id="email" name="email" placeholder="Email" />
                {   
                    touched.email &&
                    errors.email && (
                        <p>{errors.email}</p>
                    )
                }
            </label>

            <label htmlFor="email">Password:
                <Field type="password" id="password" name="password" placeholder="Password" />
                {   
                    touched.password &&
                    errors.password && (
                        <p>{errors.password}</p>
                    )
                }
            </label>
            
            <label htmlFor="tos" className="tos">
                <Field type="checkbox" name="tos" className="tos" checked={values.tos}/>
                Terms of Service
            </label>
        
            <button type="submit">Submit</button>
        </Form>
    );
}

const FormikForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || "",
            email: props.email || "",
            password: props.password || "",
            tos: props.tos || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is Mandatory"),
        email: Yup.string().email().required("Email address is required"),
        password: Yup.string().required("No password provided").min(8, 'Passwod is too short - should be 8 chars minimum').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        tos: Yup.bool().required("You must agree to Terms")
    })
})(BoardingForm)

export default FormikForm;