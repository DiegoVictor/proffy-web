import React, {
  useContext,
  createContext,
  useMemo,
  PropsWithChildren,
  useState,
  useCallback,
} from 'react';
import api from '../services/api';

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

export function AuthProvider({ children }: PropsWithChildren<object>) {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('proffy:token');
    const user = localStorage.getItem('proffy:user');

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      return {
        user: JSON.parse(user),
        token,
      };
    }

    return {};
  });

  const signOut = useCallback(() => {
    localStorage.removeItem('proffy:token');
    localStorage.removeItem('proffy:user');

    delete api.defaults.headers.common.Authorization;

    setData({});
  }, []);

  const signIn = useCallback(
    async (email: string, password: string, remember: boolean) => {
      const {
        data: {
          user: { id, name, avatar },
          token,
        },
      } = await api.post('/sessions', {
        email,
        password,
      });

      if (remember) {
        localStorage.setItem('proffy:token', token);
        localStorage.setItem(
          'proffy:user',
          JSON.stringify({
            id,
            name,
            avatar,
          }),
        );
      }
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      setData({
        token,
        user: {
          id,
          name,
          avatar,
        },
      });
    },
    [],
  );

  const context = useMemo(
    () => ({
      ...data,
      signOut,
      signIn,
    }),
    [data, signOut, signIn],
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export const useAuth = (): IAuthContext => {
  return useContext(AuthContext);
};
