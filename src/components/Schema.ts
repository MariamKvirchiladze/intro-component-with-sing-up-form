import * as yup from "yup";
const OnlyLatin = /^[a-zA-Z\s]*$/;

const MySchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name cannot be empty")
    .matches(OnlyLatin, "The name must contain only Latin letters"),
  lastName: yup
    .string()
    .required("First Name cannot be empty")
    .matches(OnlyLatin, "The name must contain only Latin letters"),
  email: yup
    .string()
    .email("Looks like this is not an email")
    .required("Email cannot be empty"),
  password: yup
    .string()
    .min(8)
    .max(20)
    .required()
    .matches(
      /^(?=.*[A-Z])(?=.*\W)/,
      "Password must contain at least one uppercase letter and one symbol"
    ),
});

export default MySchema;

// ვალიდაცია:
//  სახელი
//      -სავალდებულო
//      -შეიცავდეს მხოლოდ ლათინურ ასოებს
// გვარი
//      -სავალდებულო
//      -შეიცავდეს მხოლოდ ლათინურ ასოებს
// ელ.ფოსტა
//      -სავალდებულო
//      -აკმაყოფილებდეს მეილის ფორმატს
// პაროლი
//      -სავალდებულო
//      -შეიცავდეს მინიმუმ 8 სიმბოლოს
//      -შეიცავდეს მაქსიმუმ 20 სომბოლოს
