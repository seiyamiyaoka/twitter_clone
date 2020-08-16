import firebase from "../container/firebase"

export const saveMessage = (messageText: string) => {
  // TODO 7: Push a new message to Firebase.
  const { currentUser } = firebase.auth()
  return firebase.firestore()
                 .collection('tweets')
                 .add({
                    name: currentUser?.displayName,
                    text: messageText,
                    profilePicUrl: currentUser?.photoURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                  }).catch((error) => console.error(error))
}

export const loadMessages = async () => {
  // TODO 8: Load and listens for new messages.
  // 読み取り用のlistnerを登録しておいて変更を検知して表示させる
  const MeesageLimitSize = 12
  const query = await firebase.firestore()
                        .collection('tweets')
                        .orderBy('timestamp', 'desc')
                        .limit(MeesageLimitSize)
                        .get()
  return query
}

export type documentType = firebase.firestore.DocumentData