import type { RegisterOptions } from "react-hook-form";
import type { TFunction } from "i18next";
import type { IContactFormValues, FieldKeys } from "./ContactForm";

interface IFieldsItem<K extends FieldKeys> {
  type: "text" | "email" | "textarea";
  placeholder: string;
  name: K;
  label: string;
  rules: RegisterOptions<IContactFormValues, K>;
}

export type IFields = {
  [K in FieldKeys]: IFieldsItem<K>;
};

export const getFields = (t: TFunction<"contact">): IFields => ({
  firstName: {
    type: "text",
    placeholder: t("fields.firstName.placeholder"),
    name: "firstName",
    label: t("fields.firstName.label"),
    rules: {
      minLength: { value: 2, message: t("errors.firstName.min") },
      maxLength: { value: 50, message: t("errors.firstName.max") },
    },
  },
  lastName: {
    type: "text",
    placeholder: t("fields.lastName.placeholder"),
    name: "lastName",
    label: t("fields.lastName.label"),
    rules: {
      required: t("errors.lastName.required"),
      minLength: { value: 2, message: t("errors.lastName.min") },
      maxLength: { value: 50, message: t("errors.lastName.max") },
    },
  },
  email: {
    type: "email",
    placeholder: t("fields.email.placeholder"),
    name: "email",
    label: t("fields.email.label"),
    rules: {
      required: t("errors.email.required"),
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: t("errors.email.pattern"),
      },
    },
  },
  regard: {
    type: "text",
    placeholder: t("fields.regard.placeholder"),
    name: "regard",
    label: t("fields.regard.label"),
    rules: {
      minLength: { value: 2, message: t("errors.regard.min") },
      maxLength: { value: 50, message: t("errors.regard.max") },
    },
  },
  message: {
    type: "textarea",
    placeholder: t("fields.message.placeholder"),
    name: "message",
    label: t("fields.message.label"),
    rules: {
      required: t("errors.message.required"),
      minLength: { value: 20, message: t("errors.message.min") },
      maxLength: { value: 1000, message: t("errors.message.max") },
    },
  },
});
