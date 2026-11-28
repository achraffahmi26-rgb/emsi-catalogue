import { createContext, useContext, useState, type PropsWithChildren } from "react";
import { verifierLogin, type AuthUser } from "../data/users";

type AuthContextValue = {
  user: AuthUser | null;
  login: (login: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<AuthUser | null>(null);

  function login(login: string, password: string): boolean {
    const credentials = verifierLogin(login, password);
    if (!credentials) {
      return false;
    }

    const { id, nom, login: userLogin, fonction, role } = credentials;
    setUser({ id, nom, login: userLogin, fonction, role });
    return true;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider.");
  }
  return context;
}
