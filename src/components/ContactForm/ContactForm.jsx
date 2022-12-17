import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  FormWrapper,
  InputLabel,
  Input,
  ErrorMsg,
  SubmitButton,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/;

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe('), dash and spaces"
    )
    .required(),
  number: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});


export const ContactForm = ({ handleSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={schema}
  >
    <FormWrapper>
      <InputLabel htmlFor="name">
        Name
        <Input type="text" name="name" />
        <ErrorMsg name="name" />
      </InputLabel>
      <InputLabel htmlFor="number">
        Number
        <Input type="tel" name="number" />
        <ErrorMsg name="number" />
      </InputLabel>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormWrapper>
  </Formik>
);


ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
