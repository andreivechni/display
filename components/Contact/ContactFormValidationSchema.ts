import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().max(1000, "Too Long!").required("Required"),
});

export default ContactFormSchema;