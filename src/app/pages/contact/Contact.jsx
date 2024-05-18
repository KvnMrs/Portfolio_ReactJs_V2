import React, { useRef } from "react";
import { useForm } from "react-hook-form";
// Animations
import { texteAreaAnim } from "../../animations/contactAnimation";
// Components
import ButtonCallToActionText from "../../components/common/button/ButtonCallToActionText";
import SideBar from "../../../app/components/common/navigation/SideBar";
// Libraries
import emailjs from "emailjs-com";

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
      <SideBar />
      <section id="contact" className="section-containers">
        <article className="article-containers mt-8">
          <form
            className="form-container"
            ref={formRef}
            onSubmit={handleSubmit(() => {
              sendEmail();
            })}
          >
            <header className=" mx-auto z-30 flex justify-center "></header>
            <div className="form-boxes | md:px-8 md:py-8">
              <label htmlFor="reason">Motif :</label>
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

              <label htmlFor="firstname">Prénom :</label>
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

              <label htmlFor="lastname">Nom :</label>
              <input
                id="lastname"
                type="lastname"
                name="lastname"
                {...register("lastname", { required: true })}
              />
              {errors.lastname && (
                <p className="mb-4 -mt-4 text-red-500">
                  Le nom est obligatoire.
                </p>
              )}
              <label htmlFor="email">Adresse Mail :</label>
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
              className="form-boxes"
              variants={texteAreaAnim}
              initial="initial"
            >
              <label htmlFor="message">Votre message :</label>
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
