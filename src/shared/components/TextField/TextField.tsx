import type {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import type { IContactFormValues, FieldKeys } from "../../../modules/ContactForm/ContactForm";

import styles from "./TextField.module.css";

type BaseProps<K extends FieldKeys> = {
  name: K;
  label: string;
  register: UseFormRegister<IContactFormValues>;
  rules: RegisterOptions<IContactFormValues, K>;
  error?: FieldError;
  placeholder?: string;
};

type InputProps<K extends FieldKeys> = BaseProps<K> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "placeholder"> & {
    as?: "input";
  };

type TextareaProps<K extends FieldKeys> = BaseProps<K> &
  Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "name" | "placeholder"
  > & {
    as: "textarea";
  };

const TextField = <K extends FieldKeys>(
  props: InputProps<K> | TextareaProps<K>
) => {
const { name, label, register, rules, error, placeholder } = props;

const id = String(name);

  return (
    <div className={styles.inputBox}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
            {"as" in props && props.as === "textarea" ? (
        <textarea
          id={id}
          {...register(name, rules)}
          placeholder={placeholder}
          rows={5}
          className={styles.textField}
          {...props}
        />
      ) : (
        <input
          id={id}
          {...register(name, rules)}
          placeholder={placeholder}
          className={styles.textField}
          {...props}
        />
      )}
      {error && <p className={styles.textFieldError}>{error.message}</p>}
    </div>
  );
};

export default TextField;
