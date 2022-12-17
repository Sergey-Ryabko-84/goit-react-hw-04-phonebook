import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { List } from './ContactList.styled';

export const ContactList = ({ contactList, deleteHandler }) => (
  <List>
    {contactList.map(contact => (
      <Contact
        key={contact.id}
        contact={contact}
        deleteHandler={deleteHandler}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
