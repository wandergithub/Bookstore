import React from 'react';

const Form = () => (
  <div>
    <form>
      <h2>Add New Book</h2>
      <input placeholder="Book Title" type="text" name="title" />
      <input placeholder="Book Author" type="text" name="Author" />
      <button type="button">ADD Book</button>
    </form>
  </div>
);

export default Form;
