export interface Login {
  success: boolean;
  data: Tokens;
}

export interface Tokens {
  token: string;
  refresh_token: string;
}

export interface Register {
  success: boolean;
  data: UserData;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
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
