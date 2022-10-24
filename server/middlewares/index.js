import Joi from "joi";
import { joiErrorCustomizer } from "../utilities";

export const createApplication = Joi.object()
  .keys({
    name: Joi.string().required(),
    cvUrl: Joi.string().uri().required(),
  })
  .options({
    abortEarly: false,
  });

export const updateApplication = Joi.object()
  .keys({
    name: Joi.string(),
    cvUrl: Joi.string().uri(),
    status: Joi.string().valid("pending", "dropped", "passed"),
  })
  .options({
    abortEarly: false,
  });

const inputValidation = (schema) => (req, res, next) => {
  const { body } = req;
  const { error } = schema.validate(body);
  if (error) {
    return res.status(400).send({
      error: joiErrorCustomizer(error),
    });
  }
  return next();
};

export const createApplicationValidator = inputValidation(createApplication);
export const updateApplicationValidator = inputValidation(updateApplication);