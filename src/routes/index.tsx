import { useAuth } from "../contexts/Auth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function AppRouter() {
  const { signed, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <>{signed ? <AppRoutes /> : <AuthRoutes />}</>;
}
