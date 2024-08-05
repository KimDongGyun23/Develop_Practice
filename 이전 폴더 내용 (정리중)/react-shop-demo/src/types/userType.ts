import firebase from 'firebase/compat/app';

export interface UserType {
  email: string;
  lastActive: firebase.firestore.Timestamp | null;
  photoURL: string;
  displayName: string;
}
