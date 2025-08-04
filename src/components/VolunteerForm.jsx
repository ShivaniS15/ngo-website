import React, { useState } from 'react';
// import '../App.css';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer Form Submitted:', formData);
    alert('Thank you for volunteering!');
    setFormData({ name: '', email: '', phone: '', interest: '' });
  };

  return (
    <section className="volunteer-section">
      <div className="container">
        <h2>Volunteer With Us</h2>
        <form className="volunteer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
          >
            <option value="">Select Area of Interest</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Fundraising">Fundraising</option>
            <option value="Women Empowerment">Women Empowerment</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
