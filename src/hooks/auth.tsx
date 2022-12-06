import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";

type User = {
  id: string;
  name: string;
  idNumber?: string;
  avatarUrl?: string;
};

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    idNumber: string,
    name: string
  ) => Promise<boolean>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

const USER_COLLECTION = "@snippetz:users";

export const AuthContext = createContext({} as AuthContextData);

// AUTH PROVIDER WITH FUNCTIONS USED IN THE HOOK
/**
 * The AuthProvider function is a React component that provides the AuthContext to all of its children.
 * @param {AuthProviderProps}  - AuthProviderProps {
 * @returns The AuthProvider is returning the AuthContext.Provider.
 */
function AuthProvider({ children }: AuthProviderProps) {
  //States

  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  //SignIn function set isLogging to true when processing and
  /**
   * If the user is not found or the password is incorrect, then alert the user that the email or
   * password is incorrect. Otherwise, alert the user that the login failed.
   * @param {string} email - string, password: string
   * @param {string} password - string
   * @returns The user data is being returned.
   */
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
          .then(async (profile) => {
            //Saving the profile data to user (useState)
            const { name, avatarUrl } = profile.data() as User;

            if (profile.exists) {
              const userData = {
                id: account.user.uid,
                name,
                avatarUrl
                
              };
              await AsyncStorage.setItem(
                USER_COLLECTION,
                JSON.stringify(userData)
              );
              setUser(userData);
            }
          })
          .catch((err) => Alert.alert("Login", err.message));
      })
      .catch((err) => {
        if (
          err.code === "auth/user-not-found" ||
          err.code === "auth/wrong-password"
        ) {
          return Alert.alert("Login", "Email or password incorrect");
        } else {
          return Alert.alert("Login", "Login failed");
        }
      })
      .finally(() => setIsLogging(false));
  }

  //SignUp function
  async function signUp(
    email: string,
    password: string,
    name: string,
    idNumber: string
  ) {
    setIsLogging(true);

    try {
      const account = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      await firestore().collection("users").doc(account.user.uid).set({
        name,
        idNumber,
        
      });

      return true;
    } catch (error) {
      Alert.alert("Ops", error.message);
      return false;
    } finally {
      setIsLogging(false);
    }
  }

  //Load User from AsyncStorage
/**
 * If there is a stored user, set the user state to the stored user.
 */
  async function loadUserStorageData() {
    setIsLogging(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as User;
      setUser(userData);
    }
    setIsLogging(false);
  }

  async function signOut() {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }

  async function forgotPassword(email: string) {
    if (!email) {
      return Alert.alert("Forgot Password", "Please enter your email");
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          "Forgot Password",
          "An email to reset your password has been sent to your account."
        )
      )
      .catch(() =>
        Alert.alert(
          "Forgot Password",
          "It was not possible to reset your password. Please try again later."
        )
      );
  }

/* Loading the user data from the AsyncStorage. */
  useEffect(() => {
    loadUserStorageData();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLogging,
        signIn,
        signUp,
        signOut,
        forgotPassword,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

//THE HOOK IS HERE
/**
 * UseAuth() is a function that returns the context of the AuthContext.
 * @returns The context object.
 */
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
