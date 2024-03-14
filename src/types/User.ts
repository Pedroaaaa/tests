import { Role } from "./Role";

export type User = {
  id: number;
  registration: string;
  role: Role;
  name: string;
  lastName: string;
};
