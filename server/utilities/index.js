export const joiErrorCustomizer = (errors) =>
  errors.details.map((error) => error.message);
