import type { FC } from "react";
import type { FieldError } from "react-hook-form";

import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import TextField from "../../shared/components/TextField/TextField";
import CheckboxField from "../../shared/components/CheckboxField/CheckboxField";
import { getFields } from "./fields";

import styles from "./ContactForm.module.css";

export interface IContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  regard: string;
  message: string;
  privacyAccepted: boolean;
}

export type FieldKeys = Exclude<keyof IContactFormValues, "privacyAccepted">;

interface IContactFormProps {
  textBtn?: string;
  submitForm: (values: IContactFormValues) => void;
}

const ContactForm: FC<IContactFormProps> = ({
  textBtn,
  submitForm,
}: IContactFormProps) => {
  const { t } = useTranslation("contact");
  const fields = getFields(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactFormValues>({
    defaultValues: { privacyAccepted: false },
    mode: "onTouched",
  });

  const onSubmit = (values: IContactFormValues) => {
    submitForm(values);
    reset();
  };

  const entries = Object.entries(fields) as [
    FieldKeys,
    (typeof fields)[FieldKeys]
  ][];

  const elements = entries.map(([name, field]) => (
    <TextField
      key={name}
      as={field.type === "textarea" ? "textarea" : "input"}
      name={name}
      label={field.label}
      placeholder={field.placeholder}
      register={register}
      rules={field.rules}
      error={errors[name] as FieldError}
      type={field.type === "textarea" ? undefined : field.type}
    />
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.textFieldsBox}>{elements}</div>

      <div>
        <h3 className={styles.privacyTitle}>{t("privacy.title")}</h3>

        <CheckboxField
          name="privacyAccepted"
          register={register}
          error={errors.privacyAccepted}
          requiredMsg={t("privacy.required")}
          label={
            <>
              {t("privacy.label").replace(t("privacy.linkText"), "").trim()}{" "}
              <a
                href={t("privacy.linkHref")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.textLink}
              >
                {t("privacy.linkText")}
              </a>
            </>
          }
        />
      </div>

      <div className={styles.btnBox}>
        <button type="submit" className={styles.btn}>
          {textBtn}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
