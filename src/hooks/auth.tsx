import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
  idNumber?: string;
};

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, idNumber: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  isLogging: boolean;
  isReady: boolean;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

const USER_COLLECTION = "@snippetz:users";

export const AuthContext = createContext({} as AuthContextData);

// AUTH PROVIDER WITH FUNCTIONS USED IN THE HOOK
function AuthProvider({ children }: AuthProviderProps) {
  //States
  const [isReady, setIsReady] = useState(false);

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
          .then(async (profile) => {
            //Saving the profile data to user (useState)
            const { name, isAdmin } = profile.data() as User;

            if (profile.exists) {
              const userData = {
                id: account.user.uid,
                name,
                isAdmin,
                
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
        const { code } = err;
        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          return Alert.alert("Login", "Email or password incorrect");
        } else {
          return Alert.alert("Login", "Login failed");
        }
      })
      .finally(() => setIsLogging(false));
  }

//SignUp function
async function signUp(email: string, password: string, name: string, idNumber: string){
  setIsLogging(true)
  setIsReady(false)
 await auth().createUserWithEmailAndPassword(email, password).then((account) => {
   setIsReady(true)
    firestore().collection('users').doc(account.user.uid).set({
      name, 
      idNumber,
      isAdmin: false
      }
    )
  }).catch((err)=>{
    Alert.alert('Ops',err.message), setIsReady(false);
  }).finally(() =>  setIsLogging(false))
 
}

  //Load User from AsyncStorage
  async function loadUserStorageData() {
    setIsLogging(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as User;
      console.log(userData);
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

  useEffect(() => {
    loadUserStorageData();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isReady,
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
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
