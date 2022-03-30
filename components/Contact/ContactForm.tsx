import React, { Dispatch, SetStateAction } from "react";
import { Formik, Field, Form } from "formik";
import Button from "../Shared/Button/Button";
import ContactFormValidationSchema from "./ContactFormValidationSchema";
import ErrorMessage from "./ErrorMessage";
import styles from "./ContactForm.module.scss";

type FormProps = {
  setIsContacted: Dispatch<SetStateAction<boolean>>;
};

const ContactForm = ({ setIsContacted }: FormProps) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={ContactFormValidationSchema}
      onSubmit={async (values) => {
        // TODO: dock real api here
        setIsContacted(true);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.root}>
          <Field id="name" name="name" placeholder="Name" />
          {errors.name && touched.name ? (
            <ErrorMessage>{errors.name}</ErrorMessage>
          ) : null}

          <Field
            id="email"
            name="email"
            placeholder="Email Address"
            type="email"
          />
          {errors.email && touched.email ? (
            <ErrorMessage>{errors.email}</ErrorMessage>
          ) : null}

          <Field id="subject" name="subject" placeholder="Subject" />
          {errors.subject && touched.subject ? (
            <ErrorMessage>{errors.subject}</ErrorMessage>
          ) : null}

          <Field id="message" name="message" as="textarea" />
          {errors.message && touched.message ? (
            <ErrorMessage>{errors.message}</ErrorMessage>
          ) : null}

          <Button type="submit">Send message</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
