import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Children,
} from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

// AUTHPROVIDER WITH FUNCTIONS USED IN THE HOOK
function AuthProvider({ children }: AuthProviderProps) {
  //States
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  //SignIn function set isLogging to true when processing and
  // returns errors if the login is invalid
  async function signIn(email: string, password: string) {
    if (!email || !password) {
      return Alert.alert(
        "Login Failed",
        "Please enter your email and password"
      );
    }
    setIsLogging(true);
    //SignInWithEmailAndPassword
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        firestore()
          .collection("users")
          .doc(account.user.uid)
          .get()
          .then((profile) => {
            //Saving the profile to user (useState)
            const { name, isAdmin } = profile.data() as User;

            if (profile.exists) {
              const userData = {
                id: account.user.uid,
                name,
                isAdmin,
              };
              setUser(userData);
            }
          })
          .catch((err) => Alert.alert("Login", err.message));
      })
      .catch((err) => {
        const { code } = err;
        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          return Alert.alert("Login", "Email or password incorrect");
        } else {
          return Alert.alert("Login", "Login failed");
        }
      })
      .finally(() => setIsLogging(false));
  }

  return (
    <AuthContext.Provider
      value={{
        isLogging,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

//THE HOOK IS HERE
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
