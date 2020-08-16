import firebase from "../container/firebase"

export const saveMessage = (messageText: string) => {
  // TODO 7: Push a new message to Firebase.
  const { currentUser } = firebase.auth()
  return firebase.firestore().collection('tweets').add({
    name: currentUser?.displayName,
    text: messageText,
    profilePicUrl: currentUser?.photoURL,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).catch((error) => console.error(error))
}