
import React, { useState } from 'react';

function React_forms1() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev,[name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(Submitted:formData.name,{formData.email});
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default React_forms1;