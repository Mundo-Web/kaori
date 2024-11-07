import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import CreateReactScript from './Utils/CreateReactScript';
import Base from './Components/Tailwind/Base';
import Filter from './Components/Courses/Filter';
import Results from './Components/Courses/Results';

const Courses = ({ categories, details: detailsDB }) => {
  const details = ArrayDetails2Object(detailsDB)
  const [filter, setFilter] = useState({});

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} details={details}/>
      <Results categories={categories} filter={filter} setFilter={setFilter}/>
    </>
  );
};

CreateReactScript((el, properties) => {
  createRoot(el).render(<Base {...properties}>
    <Courses {...properties} />
  </Base>);
})