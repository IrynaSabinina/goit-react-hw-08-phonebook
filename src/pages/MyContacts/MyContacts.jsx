import { Form } from '../../components/Form/Form';
import { FindElement } from '../../components/FindElement/FindElement';
import { ContactsList } from '../../components/Contacts/ContactsList';
import { GoHome } from '../../components/Navigation/GoHome';

export const MyContacts = () => {
  return (
    <>
      <Form />
      <FindElement />
      <ContactsList />
      <GoHome />
    </>
  );
};
