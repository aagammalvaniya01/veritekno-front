import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import * as ContactUs from "../../../services/contact-us";

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
    borderRadius: "16px",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

//Data
const initialValues = {
  firstName: "",
  email: "",
  contactNumber: "",
  lookingFor: "",
  service_type: "",
  description: "",
};

const options = [
  { label: "Migration", value: "migration" },
  { label: "Data Engineering", value: "data_engineering" },
  { label: "SAP", value: "sap" },
  { label: "Cloud Computing", value: "cloud_computing" },
  { label: "NAS/SAN", value: "nas_san" },
  { label: "Alteryx", value: "alteryx" },
  { label: "Power BI", value: "power_bi" },
  { label: "Informatica", value: "informatica" },
  { label: "Jenkins", value: "jenkins" },
  { label: "Docker-kubernetes-for-deployment", value: "docker-kubernetes-for-deployment" },
  { label: "Others", value: "others" },
];
const lookingForOptions = [
  { label: "Service", value: "Service" },
  { label: "Training", value: "Training" },
  { label: "Job", value: "Job" },
];

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  contactNumber: Yup.number().required("Required"),
  lookingFor: Yup.string().required("Please select an option"),
  // service_type: Yup.string().when('lookingFor', {
  //   is: 'Service',
  //   then: Yup.string().required('Service type is required when looking for a service'),
  //   otherwise: Yup.string(), // No additional requirements if lookingFor is not 'Service'
  // }),
  description: Yup.string().required("Required"),
});

const handleClick = async (values) => {
  try {
    const payloadData = {
      name: values.firstName,
      email: values.email,
      message: values.description,
    };
    const res = await ContactUs.createContactUs(payloadData);
    if (res?.status === "Success") {
      console.log("success");
    }
  } catch (error) {
    console.log(error);
  }
};

const UserForm = () => {
  const classes = useStyle();

  const onSubmit = (values, { resetForm }) => {
    console.log("values", values);
    handleClick(values);
    resetForm({ values: initialValues });
  };

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item md={6}>
        <Card className={classes.padding}>
          <CardHeader title="CONTACT FORM"></CardHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Name"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          value={values.firstName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Contact Number"
                          variant="outlined"
                          fullWidth
                          type="number"
                          name="contactNumber"
                          value={values.contactNumber}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          label="Email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={values.email}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={values?.lookingFor === "Service" ? 6 : 12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label-lookingFor">
                            Are You Looking For?*
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label-lookingFor"
                            id="demo-simple-select-outlined-lookingFor"
                            label="lookingFor"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lookingFor}
                            name="lookingFor"
                          >
                            <MenuItem>None</MenuItem>
                            {lookingForOptions.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      {values?.lookingFor === "Service" && (
                        <Grid item xs={12} sm={6} md={6}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Please Select Service
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Please Select Service"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.service_type}
                              name="service_type"
                            >
                              <MenuItem>None</MenuItem>
                              {options.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      )}

                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          label="Tell Us Some More Info"
                          variant="outlined"
                          fullWidth
                          name="description"
                          value={values.description}
                          component={TextField}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      className={classes.button}
                    >
                      SUBMIT
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserForm;
