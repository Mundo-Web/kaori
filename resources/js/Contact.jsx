import React from "react";
import CreateReactScript from "./Utils/CreateReactScript";
import { createRoot } from "react-dom/client";
import Base from "./Components/Tailwind/Base";
import Address from "./Components/Contact/Address";
import ContactForm from "./Components/Contact/ContactForm";
import ArrayDetails2Object from "./Utils/ArrayDetails2Object";

const Contact = ({ generals, details: detailsDB }) => {
  const details = ArrayDetails2Object(detailsDB)
  return <>
    <Address generals={generals} details={details} />
    <ContactForm />
  </>
}

CreateReactScript((el, properties) => {
  createRoot(el).render(<Base {...properties}>
    <Contact {...properties} />
  </Base>);
})