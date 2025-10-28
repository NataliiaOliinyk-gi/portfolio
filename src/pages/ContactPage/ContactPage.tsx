import type { FC } from "react";

import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import ContactForm from "../../modules/ContactForm/ContactForm";

import type { IContactFormValues } from "../../modules/ContactForm/ContactForm";

import styles from "./ContactPage.module.css";

const ContactPage: FC = () => {
  const { t } = useTranslation("contact");

  const submitForm = (values: IContactFormValues) => {
    console.log(values);
  };

  return (
    <main>
      <Wrapper>
        <SectionLayout title={t("title")}>
          <p>
            Have a project or just want to connect? Feel free to drop a message
          </p>
          <p>
            Ich freue mich, dich kennenzulernen! Ich bin immer offen für neue
            Kontakte & Austausch.
          </p>
          <button className={styles.btn}>{t("ctaButtons.email")}</button>
        </SectionLayout>

        <SectionLayout>
          <ContactForm textBtn={t("submit")} submitForm={submitForm} />
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default ContactPage;
