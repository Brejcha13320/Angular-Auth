export interface Login {
  success: boolean;
  data: Tokens;
}

export interface Tokens {
  token: string;
}

export interface Register {
  success: boolean;
  data: UserData;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  image: string;
  descripcion: string;
}

export interface Recovery {
  success: boolean;
  data: RecoveryData;
}

export interface RecoveryData {
  from: string;
  to: string;
  message: string;
}

export interface Profile {
  success: boolean;
  data: UserData;
}
