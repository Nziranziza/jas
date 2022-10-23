import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import { createApplication } from "../../services";
import { Input } from "../../components/input";
import "./style.scss";

const formValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  cvUrl: yup
    .string()
    .url("CV URL must be a valid URL")
    .required("CV URL is required"),
});

export const NewApplication = () => {
  const onSubmit = async (values, { resetForm }) => {
    try {
      await createApplication(values);
      resetForm();
      toast.success("Application submitted successfully");
    } catch (error) {
      toast.error("Something went wrong, try again later");
    }
  };

  return (
    <div className="new-application">
      <h1>Submit New Application</h1>
      <div className="form">
        <Formik
          initialValues={{
            name: "",
            cvUrl: "",
          }}
          onSubmit={onSubmit}
          validationSchema={formValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            values: { name, cvUrl },
            errors,
            touched,
            handleSubmit,
          }) => (
            <>
              <Input
                placeholder="Enter your name"
                error={touched.name && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={name}
                name="name"
              />
              <Input
                placeholder="Enter your CV URL"
                error={touched.cvUrl && errors.cvUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                name="cvUrl"
                value={cvUrl}
              />
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};
