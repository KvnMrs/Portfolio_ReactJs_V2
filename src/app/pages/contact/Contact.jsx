import React, { useState } from "react";

// Package
import { motion } from "framer-motion";

// Sub-components
import ButtonCallToActionText from "../../sub-components/buttons/ButtonCallToActionText";

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
            <motion.form
              className="form"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
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
                <ButtonCallToActionText
                  type={"submit"}
                  customClass={"submit-button"}
                >
                  <motion.a
                    className="w-full text-sm md:text-lg"
                    href={`mailto:kevin.mrs2020@gmail.com?subject=${reason}&body=${firstname} ${lastname.toUpperCase()}%0A${mail}%0A${phone}%0A%0A${message}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 360,
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    Envoyer
                  </motion.a>
                </ButtonCallToActionText>
              </div>
            </motion.form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Contact;
