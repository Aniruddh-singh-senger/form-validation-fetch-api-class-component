import * as Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const ContactSchema = Joi.object({
  name: Joi.string()
    .regex(/^[a-zA-Z ]*$/)
    .min(3)
    .max(30)
    .required()
    // .regex(/^[A-Za-z]+$/i)
    // .pattern(RegExp("/^[A-Za-z]+$/i"))

    .error((errors) => {
      errors.forEach((err) => {
        console.log("error", errors);

        if (err.code === "string.empty") {
          err.message = "First name is required field";
        } else if (err.code === "string.pattern.base") {
          err.message = "Please Enter a valid  Name";
        }
      });
      return errors;
    }),
  userfeedback: Joi.string()
    .regex(/^[a-zA-Z ]*$/)
    .min(3)
    .max(30)
    .required()

    .error((errors) => {
      errors.forEach((err) => {
        console.log("error", errors);

        if (err.code === "string.empty") {
          err.message = "User feedback  is required field";
        } else if (err.code === "string.pattern.base") {
          err.message = "Please Enter a valid  userfeedback";
        }
      });
      return errors;
    }),

  optionValue: Joi.string()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        console.log("error", errors);

        if (err.code === "string.empty") {
          err.message = " optionValue is required field";
        } else if (err.code === "string.pattern.base") {
          err.message = "Please Enter a valid  optionValue";
        }
      });
      return errors;
    }),
  email: Joi.string()

    .min(3)
    .max(30)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in", "co"] },
    })
    .error((errors) => {
      errors.forEach((err) => {
        if (err.code === "string.empty") {
          err.message = "Email is required field";
        } else if (err.code === "string.email") {
          err.message = "Please Enter a valid Email";
        }
      });
      return errors;
    }),
});

export const ContactRsolver = joiResolver(ContactSchema);
