import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admin: false
  })


  function handleNameChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    if (e.target.type === "checkbox") {
      value = e.target.checked
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit (e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleNameChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleNameChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleNameChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
