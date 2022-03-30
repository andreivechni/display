import React, { useState, ReactNode } from "react";
import Heading from "../Shared/Heading/Heading";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [isContacted, setIsContacted] = useState(false);

  return (
    <div className={styles.root}>
      <Heading>Got a Question or Inquiry?</Heading>

      <div className={styles.mapContainer}>
        {/* 
          TODO: Can't use google map API since it's not letting me to create a billing account.
          Shall fix it later
        */}
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.feedback}>
            <div className={styles.heading}>Contact Form</div>
            <div className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae
              dolor ut posuere.
            </div>

            {isContacted && <p>Thanks for your feedback!</p>}

            {!isContacted && (
              <ContactForm setIsContacted={setIsContacted}></ContactForm>
            )}
          </div>

          <div className={styles.info}>
            <div className={styles.heading}>Contact Info</div>
            <div className={styles.infoRow}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit velit
              justo.
            </div>
            <div className={styles.infoRow}>
              <div>
                <span className={styles.bold}>email:</span>{" "}
                <span className={styles.email}>info@display.com</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.bold}>phone:</span>: 1.306.222.4545
              </div>
            </div>
            <div>
              <div>222 2nd Ave South</div>
              <div>Saskabush, SK S7M 1T6</div>
            </div>
          </div>

          <div className={styles.hours}>
            <div className={styles.heading}>Store Hours</div>
            <div className={styles.info}>
              <div className={styles.scheduleRow}>
                <div className={styles.scheduleCell}>Monday - Thursday</div>
                <div className={styles.scheduleCell}>8 am - 5 pm</div>
              </div>
              <div className={styles.scheduleRow}>
                <div className={styles.scheduleCell}>Friday</div>
                <div className={styles.scheduleCell}>8 am - 6 pm</div>
              </div>
              <div className={styles.scheduleRow}>
                <div className={styles.scheduleCell}>Saturday</div>
                <div className={styles.scheduleCell}>9 am - 5 pm</div>
              </div>
              <div className={styles.scheduleRow}>
                <div className={styles.scheduleCell}>Sunday</div>
                <div className={styles.scheduleCell}>Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
