import React, { useState, useEffect } from 'react';
import { withFormik,Form,Field } from 'formik';
import * as Yup from "yup";
import axios from "axios";

const BoardingForm = ({ values, errors, touched, status }) => {

    const [ user, setUser ] = useState([]);

    useEffect(() => {
        console.log(
          "status has changed!",
          status
        );
        status &&
          setUser(user => [
            ...user,
            status
          ]);
      }, [status]);
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
    }),

    handleSubmit(
            values,
            { setStatus, resetForm }
        ) 
        
        {
            axios
              .post("https://reqres.in/api/users/",values)
              .then(res => {
                console.log("success", res);
                setStatus(res.data);
                resetForm();
              })
              .catch(err =>
                console.log(err.response)
              );
        }
})(BoardingForm)

export default FormikForm;