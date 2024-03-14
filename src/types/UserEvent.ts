import { Type } from "./Type";

export type UserEvent = {
  id: number;
  userRegistration: string;
  date: Date;
  type: Type;
  description: string;
};
