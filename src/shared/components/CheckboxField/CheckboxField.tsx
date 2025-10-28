import type { FC, ReactNode } from "react";
import type { UseFormRegister, FieldError } from "react-hook-form";
import type { IContactFormValues } from "../../../modules/ContactForm/ContactForm";

import styles from "./CheckboxField.module.css";

interface ICheckboxFieldProps {
  name: "privacyAccepted";
  register: UseFormRegister<IContactFormValues>;
  error?: FieldError;
  label: ReactNode;
  requiredMsg?: string;
}

const CheckboxField: FC<ICheckboxFieldProps> = ({
  name,
  register,
  error,
  label,
  requiredMsg,
}) => {
  const id = name;

  return (
    <div className={styles.checkboxBox}>
      <label className={styles.checkboxLabel}>
        <input
          id={id}
          type="checkbox"
          className={styles.checkbox}
          aria-invalid={!!error || undefined}
          {...register(name, {
             required: requiredMsg || true
          })}
        />
        <span className={styles.control} aria-hidden="true" />
        <span className={styles.text}>{label}</span>
      </label>
      {error && <p className={styles.checkboxError}>{error.message}</p>}
    </div>
  );
};

export default CheckboxField;
