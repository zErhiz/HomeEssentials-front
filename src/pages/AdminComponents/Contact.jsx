import React, { useEffect } from 'react';
import { Link as Anchor } from 'react-router-dom';
import action from '../../store/actions/contactRead';
import { useSelector, useDispatch } from "react-redux";
import NavigationComponent from './NavigationComponent';

const Contact = () => {
  let { contact_read } = action;
  const dispatch = useDispatch();
  let contact = useSelector(store => store.contactget.contact);

  useEffect(() => {
    if (contact.length === 0) {
      dispatch(contact_read());
    }
  }, []);

  return (
    <div className="h-screen flex bg-gray-100">
      <NavigationComponent />
      <div className="flex-1 p-8 overflow-scroll">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <h3 className="hidden sm:block col-span-1 font-medium lg:text-xl">User messages</h3>

          {contact.map((contacto) => (
            <div className="border border-gray-200 rounded p-4 shadow-md" key={contacto._id}>
              <h3 className="text-lg font-semibold mb-2">{contacto?.name} {contacto?.lastName}</h3>
              <p className="text-sm mb-2">Email: {contacto?.email}</p>
              <p className="text-sm mb-2">Affair: {contacto?.affair}</p>
              <p className="text-sm mb-2">Message: {contacto?.message}</p>
              <h4 className="text-base font-semibold">Date</h4>
              <p className="text-sm mb-2">Contact date: {contacto.createdAt.slice(0, -14)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;