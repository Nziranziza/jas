import { Application } from "./models";

export default async function databaseInit(options = {}) {
  await Application.sync(options);
}
