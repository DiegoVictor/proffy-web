import React, {
  createContext,
} from 'react';

interface IUser {
  id: string;
  name: string;
  avatar: string;
}

interface IAuthState {
  user?: IUser;
  token?: string;
}

interface IAuthContext extends IAuthState {
  signOut: () => void;
  signIn: (email: string, password: string, remember: boolean) => Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);
