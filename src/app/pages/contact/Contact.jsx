import React, { useState, useRef } from "react";
// Animations
import {
  inputsAnim,
  texteAreaAnim,
  submitAnim,
} from "../../animations/contactAnimation";
// COomponents
import ButtonCallToActionText from "../../components/common/button/ButtonCallToActionText";
import SideBar from "../../../app/components/common/navigation/SideBar";
// Libraries
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_an3elxs",
        "template_od75s98",
        formRef.current,
        "6mH0PNM35bHQtU6lg"
      )
      .then((result) => {
        console.log("E-mail sent successfully!", result.text);
      })
      .catch((error) => {
        console.error("Error sending e-mail:", error);
      });
  };

  return (
    <>
      <SideBar />
      <section id="contact" className="section-containers">
        <article className="article-containers mt-8">
          <form className="form " ref={formRef} onSubmit={sendEmail}>
            <header className=" mx-auto z-30 flex justify-center "></header>
            <div className="md:px-8 md:py-8">
              <label htmlFor="reason">Motif :</label>
              <select id="reason" name="reason">
                <option>Contact professionel</option>
                <option>Question(s)</option>
                <option>Feedback</option>
              </select>

              <label htmlFor="firstname">Prénom :</label>
              <input id="firstname" type="firstname" name="firstname" />
              <label htmlFor="lastname">Nom :</label>
              <input id="lastname" type="lastname" name="lastname" />
              <label htmlFor="email">Adresse Mail :</label>
              <input id="email" type="email" name="email" />
            </div>
            <div variants={texteAreaAnim} initial="initial">
              <label htmlFor="message">Votre message :</label>
              <textarea id="message" type="text" name="message" />
              <ButtonCallToActionText
                type={"submit"}
                customClass={"submit-button"}
              >
                Envoyer
              </ButtonCallToActionText>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default Contact;
