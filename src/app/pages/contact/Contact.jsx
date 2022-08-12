import React, { useState } from "react";

const Contact = () => {
  const [reason, setReason] = useState("Contact professionel");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div id="contact" className="Contact-container bg-section-card">
        <p className="Contact-text">
          Un contact professionel, une question, un feedback <br />
          contactez-moi 📝
        </p>
        <section className="form-container">
          <form className="form">
            <div>
              <label htmlFor="reason">Motif :</label>
              <select id="reason" onChange={(e) => setReason(e.target.value)}>
                <option>Contact professionel</option>
                <option>Question(s)</option>
                <option>feedback</option>
              </select>

              <label htmlFor="nom">Prénom :</label>
              <input
                id="nom"
                type="nom"
                name="nom"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <label htmlFor="prenom">Nom :</label>
              <input
                id="prenom"
                type="prenom"
                name="prenom"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <label htmlFor="email">Adresse Mail :</label>
              <input
                id="email"
                type="email"
                name="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <label htmlFor="phone">Téléphone :</label>
              <input
                id="phone"
                type="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Votre message :</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">
                <a
                  href={`mailto:kevin.mrs2020@gmail.com?subject=${reason}&body=${firstname} ${lastname.toUpperCase()}%0A${mail}%0A${phone}%0A%0A${message}`}
                  className="text-center"
                >
                  Envoyer
                </a>
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
