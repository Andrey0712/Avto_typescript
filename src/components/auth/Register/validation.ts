import * as yup from "yup"

export const RegisterSchema = yup.object({
  email: yup
    .string()
    .email("Введіть коректний Email")
    .required("Поле не повинне бути пустим"),
  name: yup.string().required("Поле не повинне бути пустим"),
  photo: yup.array().min(1, "Виберіть аватар").nullable(),
  phone: yup
    .string()
    .matches(
      /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/,
      "Невірний формат"
    )
    .required("Поле не повинне бути пустим"),
  password: yup
    .string()
    .min(6, "Пароль повинен містити мініму 6 символів")
    .matches(/[0-9a-zA-Z]/, "Пароль може містить латинські символи і цифри")
    .required("Поле не повинне бути пустим"),
  
});