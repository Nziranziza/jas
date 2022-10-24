import { applicationService } from "../services";

export const getAll = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const applications = await applicationService.getAll({
      page,
      limit
    });
    return res.status(200).json(applications);
  } catch (error) {
    return next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const application = await applicationService.create(req.body);
    return res.status(201).json(application);
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const application = await applicationService.update(id, req.body);
    if (!application) {
      return res.status(404).json({ message: "application not found" });
    }
    return res.status(200).json(application);
  } catch (error) {
    return next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const application = await applicationService.getById(id);
    if (!application) {
      return res.status(404).json({ message: "application not found!" });
    }
    return res.status(200).json(application);
  } catch (error) {
    return next(error);
  }
};
