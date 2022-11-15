import { Container } from "typedi";
import LoggerInstance from "./logger";
import agendaFactory from "./agenda";
import config from "../config";

export default () => {
  try {
    const agendaInstance = agendaFactory();

    Container.set("agendaInstance", agendaInstance);
    Container.set("logger", LoggerInstance);

    LoggerInstance.info("✌️ Agenda injected into container");

    return { agenda: agendaInstance };
  } catch (e) {
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
