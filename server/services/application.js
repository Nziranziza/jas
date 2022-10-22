import { Application } from "../db/models";

export const getAll = async ({ limit = 10 } = {}) => {
  const data = await Application.findAll({
    limit,
    order: [["name", "ASC"]],
  });
  return data;
};

export const create = async (payload) => {
  return Application.create(payload);
};

export const update = async (id, payload) => {
  const application = await Application.findByPk(id);
  if(!application) {
    return null
  }
  return application.update(payload);
};
