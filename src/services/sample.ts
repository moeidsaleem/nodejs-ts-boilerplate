import { Service, Inject } from "typedi";
import config from "../config";

import { randomBytes } from "crypto";
import { ISample, ISampleInput } from "../interfaces/ISample";

@Service()
export default class SampleService {
  constructor(@Inject("logger") private logger) {}

  public async PrintSampleInfo(): Promise<{ response: any }> {
    this.logger.silly("Calling PrintSampleInfo");

    return { response: "" };
  }
}
