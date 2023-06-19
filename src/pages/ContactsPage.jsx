import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contactsSlice';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Title, SubTitle } from 'components/App/App.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export default function ContactsPage() {
  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {allContacts.contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
      )}
    </Container>
  );
}
