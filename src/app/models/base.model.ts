import { IModel } from "../interfaces/imodel.interface";

export abstract class BaseModel implements IModel {
  public id: number;
  constructor() {}
  public get(): String {
    return this.constructor.name.toString();
  }
}
