import { User } from "./User";
import { Role } from "./Role";

export type AuthContextData = {
  signed: boolean;
  user: User | null;
  role: Role | null;
  admin: boolean;
  loading: boolean;
  signIn: (credentials: {
    registration: string;
    password: string;
  }) => Promise<void>;
  signOut: () => void;
  loadUser: () => Promise<void>;
};
