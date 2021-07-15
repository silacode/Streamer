import React from "react";
// // import { Field, reduxForm } from "redux-form";
import { Form, Field } from "react-final-form";

const StreamForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  const renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form className="ui form error" onSubmit={handleSubmit}>
          <Field name="title" component={renderInput} label="Title" />
          <Field
            name="description"
            component={renderInput}
            label="Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Must enter a title";
  }
  if (!formValues.description) {
    errors.description = "Must enter a description";
  }
  return errors;
};

export default StreamForm;
