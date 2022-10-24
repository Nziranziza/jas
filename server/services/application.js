import { Application } from "../db/models";

export const getAll = async ({ limit = 10, page = 1 } = {}) => {
  const offset = (page - 1) * limit;
  const data = await Application.findAll({
    limit,
    offset,
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

export const getById = async (id) => {
  return Application.findByPk(id)
}