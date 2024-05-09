import { useContext} from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export function useProvideAuth() {
  const user = useContext(AuthContext);
  return user;
}
