import React from "react";
import "./form.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
class FormRegistration extends React.Component {
  render() {
    return (
      <div className="form__wrapper popUp">
        <div className="from__content">
          <p>Registration</p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  className="form__input"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                {errors.email && touched.email && errors.email}
                <input
                  className="form__input"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                {errors.password && touched.password && errors.password}
                <button
                  className="form__btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  submit
                </button>
                <p>Agree terms condisions</p>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default FormRegistration;
