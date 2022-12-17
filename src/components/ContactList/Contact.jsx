import PropTypes from 'prop-types';
import { ContactItem, Text, DeleteButton } from './Contact.styled';

export const Contact = ({ contact, deleteHandler }) => (
  <ContactItem>
    <Text>{contact.name}:</Text>
    <Text>{contact.number}</Text>
    <DeleteButton type="button" id={contact.id} onClick={deleteHandler}>
      Delete
    </DeleteButton>
  </ContactItem>
);

Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
};