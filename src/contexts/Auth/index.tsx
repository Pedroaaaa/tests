import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AuthContextData } from "../../types/AuthContextData";
import { User } from "../../types/User";
import { Role } from "../../types/Role";
import { api } from "../../services/api";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const admins = [Role.ADMIN];
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  const signOut = () => {
    localStorage.clear();
    setUser(null);
    setRole(null);
  };

  const loadUser = async () => {
    const { data } = await api.get("/users/me");
    if (!data) {
      throw new Error("No user");
    }
    setUser(data);
    localStorage.setItem("@Tests:user", JSON.stringify(data));
    localStorage.setItem("@Tests:role", data.role);
  };

  const signIn = async (credentials: {
    registration: string;
    password: string;
  }) => {
    const { data } = await api.post("/auth", credentials);
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    localStorage.setItem("@Tests:token", data.token);
    await loadUser();
  };

  useEffect(() => {
    async function loadStoragedData() {
      const storagedToken = localStorage.getItem("@Tests:token");
      const storagedUser = localStorage.getItem("@Tests:user");
      const storagedRole = localStorage.getItem("@Tests:role") as Role | null;

      const valid = storagedUser && storagedToken && storagedRole;

      if (valid) {
        setUser(JSON.parse(storagedUser));
        setRole(storagedRole);
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      } else {
        signOut();
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        role,
        admin: role && admins.includes(role) ? true : false,
        loading,
        signIn,
        signOut,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
