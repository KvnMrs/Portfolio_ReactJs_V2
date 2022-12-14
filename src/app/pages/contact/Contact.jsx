import React, { useState } from "react";

// Package
import { motion } from "framer-motion";

// Sub-components
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";

// Animations
import {
  inputsAnim,
  texteAreaAnim,
  submitAnim,
} from "../../animations/contactAnimation";

const Contact = () => {
  const [reason, setReason] = useState("Contact professionel");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <section id="contact" className="sections-containers">
        <div className="sections-surfaces">
          <article className="sections-sub-containers">
            <header className="sections-headers">
              <p className="contact-text">
                Un contact professionel, une question, un feedback <br />
                contactez-moi 📝
              </p>
            </header>
            <form className="form">
              <motion.div
                variants={inputsAnim}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <label htmlFor="reason">Motif :</label>
                <select id="reason" onChange={(e) => setReason(e.target.value)}>
                  <option>Contact professionel</option>
                  <option>Question(s)</option>
                  <option>Feedback</option>
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
              </motion.div>
              <motion.div
                variants={texteAreaAnim}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <label htmlFor="message">Votre message :</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <ButtonCallToActionText
                  type={"submit"}
                  customClass={"submit-button"}
                >
                  <motion.a
                    className="w-full text-sm md:text-lg"
                    href={`mailto:kevin.mrs2020@gmail.com?subject=${reason}&body=${firstname} ${lastname.toUpperCase()}%0A${mail}%0A${phone}%0A%0A${message}`}
                    variants={submitAnim}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                  >
                    Envoyer
                  </motion.a>
                </ButtonCallToActionText>
              </motion.div>
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Contact;
