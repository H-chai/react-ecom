import { useForm } from "react-hook-form";
import Message from "../message-received.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import styles from "../styles/Contact.module.css";
import { Link } from "react-router-dom";

export function Contact() {
  const [message, setMessage] = useState("");

  const schema = yup.object({
    fullName: yup
      .string()
      .min(3, "Full Name must be at least 3 characters long")
      .required("Full Name is required"),
    subject: yup
      .string()
      .min(3, "Subject must be at least 3 characters long")
      .required("Subject is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    body: yup
      .string()
      .min(3, "Message must be at least 3 characters long")
      .required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  function onSubmit() {
    setMessage("Your message has been sent successfully!");
    reset();
  }

  return (
    <div>
      <h2 className={styles.contactTitle}>Contact</h2>
      <img src={Message} alt="send message" className={styles.contactImg} />
      {message && (
        <div className={styles.messageContainer}>
          <p className={styles.successMessage}>{message}</p>
          <Link to="/" className={styles.toHome}>
            Back to Home
          </Link>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("fullName")} placeholder="Full Name" />
        <p>{errors.fullName?.message}</p>
        <input {...register("subject")} placeholder="Subject" />
        <p>{errors.subject?.message}</p>
        <input {...register("email")} placeholder="Email" type="email" />
        <p>{errors.email?.message}</p>
        <textarea {...register("body")} placeholder="Your message" rows="5" />
        <p>{errors.body?.message}</p>
        <input type="submit" value="Send" className={styles.send} />
      </form>
    </div>
  );
}
