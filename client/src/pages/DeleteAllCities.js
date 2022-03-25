import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";

function DeleteAllCities() {
  const onSubmit = (data) => {
    axios.delete("http://localhost:3001/api/deleteallcities", data)
      .then((response) => {
        console.log("IT WORKED!");
      });
  };
  return (
    <div>
      <Formik onSubmit={onSubmit}>
        <Form>
          <button type="submit"> Delete All Cities</button>
        </Form>
      </Formik>
    </div>
  );
}

export default DeleteAllCities;
