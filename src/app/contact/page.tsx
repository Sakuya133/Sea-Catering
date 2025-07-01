"use client";

import { useState } from "react";

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    if (!fullName || !phoneNumber || !message) {
      setError('Semua field harus diisi');
      return;
    }

   
    const phoneRegex = /^\+62[0-9]{9,}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError('Nomor telepon tidak valid. Pastikan nomor diawali dengan +62');
      return;
    }

  
    setError('');
    setSuccess('Formulir berhasil disubmit! Terima kasih atas pesan Anda.');

   
    setFullName('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <div className="form-group">
          <label htmlFor="fullName ">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <nav className="absolute top-0 left-0 right-0 w-full px-6 py-4 bg-black shadow-md z-20">
        <ul className="flex justify-start gap-6">
          <li>
            <a className="text-white hover:text-blue-400 font-medium" href="/home">Home</a>
          </li>
          <li>
            <a className="text-white hover:text-blue-400 font-medium" href="/menu">Menu</a>
          </li>
          <li>
            <a className="text-white hover:text-blue-400 font-medium" href="/sub">Subscription</a>
          </li>
          <li>
            <a className="text-white hover:text-blue-400 font-medium" href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
        <div className="form-group">
          <label htmlFor="phoneNumber">Active Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            pattern="^\+62[0-9]{9,}$"
            placeholder="+62"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <footer>
        <p>Manager: Brian / Phone Number: 08123456789</p>
      </footer>

      <style jsx>{`
        .contact-us-container {
          padding: 20px;
          max-width: 600px;
          margin: auto;
          background-color: #f9f9f9;
          border-radius: 8px;
        }
        h1 {
          font-family: 'Arial', sans-serif;
          color: #388e3c;
          font-weight: bold;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
        }
        input,
        textarea {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        textarea {
          height: 150px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: #388e3c;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #2c6b2f;
        }
        footer {
          margin-top: 20px;
          font-size: 14px;
          text-align: center;
        }
        .error-message {
          background-color: #ffdddd;
          color: #d9534f;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .success-message {
          background-color: #d4edda;
          color: #155724;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;