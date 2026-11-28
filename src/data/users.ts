export type UserRole = "admin" | "etudiant";

export interface UserCredential {
  id: number;
  nom: string;
  login: string;
  fonction: string;
  role: UserRole;
  password: string;
}

export type AuthUser = Omit<UserCredential, "password">;

export const users: UserCredential[] = [
  {
    id: 1,
    nom: "Enseignant",
    login: "admin",
    fonction: "Superviseur",
    role: "admin",
    password: "1234",
  },
  {
    id: 2,
    nom: "Etudiant EMSI",
    login: "emsi",
    fonction: "Normal",
    role: "etudiant",
    password: "2026",
  },
];

export function verifierLogin(
  login: string,
  password: string,
): UserCredential | null {
  return users.find(
    (user) => user.login === login.trim() && user.password === password,
  ) ?? null;
}
