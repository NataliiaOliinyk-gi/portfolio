import type { FC } from "react";

import { useTranslation } from "react-i18next";

import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";
import ContactLinks from "../../modules/ContactLinks/ContactLinks";
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
          <div className={styles.titleBox}>
            <p className={styles.lead1}>{t("lead1")}</p>
            <p className={styles.lead2}>{t("lead2")}</p>
          </div>
        </SectionLayout>

        <SectionLayout>
          <ContactLinks />
        </SectionLayout>

        <SectionLayout>
          <p className={styles.closing}>{t("closing")}</p>
          <ContactForm textBtn={t("submit")} submitForm={submitForm} />
        </SectionLayout>
      </Wrapper>
    </main>
  );
};

export default ContactPage;
