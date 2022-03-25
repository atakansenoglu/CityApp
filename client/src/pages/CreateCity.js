import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

function CreateCity() {
  const initialValues = {
    cityName: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/api/createcity", data).then((response) => {
      console.log("IT WORKED!");
    });
  };
  return (
    <div className="createCityPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="formContainer">
          <label>City: </label>
          <ErrorMessage name="cityName" component="span" />
          <Field
            autoComplete="off"
            id="inputCreateCity"
            name="cityName"
            placeholder="(Ex. Paris)"
          />
          <button type="submit"> Create City</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateCity;
