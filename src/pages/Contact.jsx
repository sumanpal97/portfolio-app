import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setForm({ name: '', email: '', message: '' });
        setStatus('Message sent successfully!');
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="form-control" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Send</button>
          {status && <p className="mt-2">{status}</p>}
        </div>
      </form>
    </div>
  );
}
