import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Bog‘lanish</h1>
      <p>Iltimos, savol yoki fikringizni quyidagi shakl orqali yuboring:</p>

      <form className="contact-form">
        <input type="text" placeholder="Ismingiz" required />
        <input type="email" placeholder="Email manzilingiz" required />
        <textarea placeholder="Xabaringiz" rows="5" required></textarea>
        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
}

export default Contact;
