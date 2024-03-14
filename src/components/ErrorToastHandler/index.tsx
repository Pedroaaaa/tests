import axios from "axios";
import { toast } from "react-toastify";

export default function ErrorToastHandler(
  error: unknown,
  notFoundMessage = "Nenhum dado encontrado",
  errorMessage = "Falha ao carregar os dados"
) {
  if (axios.isAxiosError(error) && error.response?.status === 404) {
    return toast.warning(notFoundMessage);
  }
  return toast.error(errorMessage);
}
