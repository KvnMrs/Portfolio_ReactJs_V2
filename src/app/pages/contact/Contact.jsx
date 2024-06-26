import React, { useRef } from "react";
import { useForm } from "react-hook-form";
// Animations
import { motion } from "framer-motion";
import { onNavigateAnim } from "../../animations/common/commonAnimations.js";
import { texteAreaAnim } from "../../animations/contactAnimation";
// Components
import ButtonCallToActionText from "../../components/common/button/ButtonCallToActionText";
// Libraries
import emailjs from "emailjs-com";
// Assets
import ContactIllustration from "../../components/contact/ContactIllustration.jsx";

const Contact = () => {
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      reason: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  });

  const sendEmail = async () => {
    await emailjs.sendForm(
      "service_an3elxs",
      "template_od75s98",
      formRef.current,
      "6mH0PNM35bHQtU6lg"
    );
    reset();
  };

  return (
    <>
      <motion.section
        variants={onNavigateAnim}
        initial="initial"
        animate="animate"
        id="contact"
        className="section-containers xl:py-0"
      >
        <form
          className="form-container lg:mb-32"
          ref={formRef}
          onSubmit={handleSubmit(() => {
            sendEmail();
          })}
        >
          <div className="form-boxes">
            <label className="form-labels" htmlFor="reason">
              Motif :
            </label>
            <select
              id="reason"
              name="reason"
              {...register("reason", { required: true })}
            >
              <option>Contact professionel</option>
              <option>Question(s)</option>
              <option>Feedback</option>
            </select>
            {errors.reason && (
              <p className="mb-4 -mt-4 text-red-500">
                Le prénom est obligatoire.
              </p>
            )}

            <label className="form-labels" htmlFor="firstname">
              Prénom :
            </label>
            <input
              id="firstname"
              name="firstname"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <p className="mb-4 -mt-4 text-red-500">
                Le prénom est obligatoire.
              </p>
            )}

            <label className="form-labels" htmlFor="lastname">
              Nom :
            </label>
            <input
              id="lastname"
              type="lastname"
              name="lastname"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && (
              <p className="mb-4 -mt-4 text-red-500">Le nom est obligatoire.</p>
            )}
            <label className="form-labels" htmlFor="email">
              Adresse Mail :
            </label>
            <input
              id="email"
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="mb-4 -mt-4 text-red-500">L'email obligatoire.</p>
            )}
          </div>
          <div
            className="form-boxes -mb-8 | md:mb-0"
            variants={texteAreaAnim}
            initial="initial"
          >
            <label className="form-labels" htmlFor="message">
              Votre message :
            </label>
            <textarea
              className="form-textarea"
              id="message"
              type="text"
              name="message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <p className="mb-4 text-red-500">Un message est obligatoire.</p>
            )}

            <ButtonCallToActionText
              type={"submit"}
              text={"Envoyer"}
              customClass={"submit-button"}
            ></ButtonCallToActionText>
          </div>
          <ContactIllustration />
        </form>
      </motion.section>
    </>
  );
};

export default Contact;
