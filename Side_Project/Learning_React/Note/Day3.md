# Learning React.js Day 3

## Cloud Storage

To learn how to implement Storage (provided by Google Firebase) in your React.js app, follow these steps:

### Step 1: Go to Storage page, set up, and choose stored location

### Step 2:
```javascript
const storage = getStorage(app);
uploadFile: (media) => {
  return new Promise(async resolve => {
    try {
      const storageRef = ref(storage, `images/${media.title}`); 
      // Second argument represents the path in Cloud Storage
      uploadBytes(storageRef, media.file /* Use inputs.file to upload */).then(snapshot => {
        resolve({ path: snapshot.metadata.fullPath, name: media.title });
      });
    } catch (e) {
      console.error(e);
    }
  });
}
downloadFile: (media) => {
  return new Promise(async resolve => {
    try {
      const storageRef = ref(storage, media.path);
      const fileURL = await getDownloadURL(storageRef); // Get URL from the same ref
      resolve(fileURL);
    } catch (e) {
      console.error(e);
    }
  });
}
```
### Step 3:
```javascript
uploadFile(state.inputs)
  .then(downloadFile)
  .then(url => {
    writeDoc({ ...inputs, path: url }, "stocks").then(() => {
      dispatch({ type: 'setItem' })
      dispatch({ type: 'collapse', payload: { bool: false } })
    });
  });` 
```
Update from local temporary store to cloud storage, overwrite the path with the URL sent back from the upload/download process.
### Timestamp
We use `setDoc(docRef, {...inputs, createdAt: serverTimestamp()});` to trace update timing. In local variables, we can use:
const timestamp =  
1. `${new Date(createdAt.seconds*1000)}`  Fri May 26 2023 16:03:49 GMT+0800 (台北標準時間)
2. const date = `${new Date(createdAt.seconds * 1000)}`.split(" ")
`${date[1]} ${date[2]} ${date[3]}`  May 26 2023

Use `{timestamp}` in the component to represent date.

## Authentication

### Example: Google Sign-in

#### Step 1.

-   Enable authentication in the Firebase console. Google will automatically set up the Web SDK for the user.
-   Alternatively, go to the Google Cloud Platform, link your project, and manually add credentials. Make sure to add the Authorized JavaScript origins and Authorized redirect URIs.

#### Step 2.

Implement the following snippet:
```javascript
export const auth = getAuth(app);
signIn: () => {
    return new Promise(resolve => {
        signInWithPopup(auth, provider).then(response => {
            resolve(response.user);
        }).catch(console.error);
    });
}
signOut: () => {
    return new Promise(resolve => {
        signOut(auth).then(() => {
            console.log("User logged out");
            resolve();
        }).catch(console.error);
    });
}
```

Add these methods with `currentUser` to keep track on the top level (`Context.Provider`):
```javascript
import FirebaseAuth from "../handlers/auth";
const { signIn, signOut } = FirebaseAuth;
const [currentUser, setCurrentUser] = useState(null);
const login = () => signIn().then(res => setCurrentUser(res));
const logout = () => signOut().then(() => setCurrentUser(null));
```
#### Step 3.

Access `currentUser` and apply the login/logout function in the target component:

```javascript
// Login button
const LogIn = () => {
  const { login, currentUser } = useAuthContext();
  return (
    <button type="button" className="btn" onClick={login}>
      Login
    </button>
  );
}; 
```
#### Bonus

```javascript
getCurrentUser: () => {
  return new Promise(resolve => {
    return auth.onAuthStateChanged(resolve);
  });
};
const authenticate = () => getCurrentUser().then(setCurrentUser); 
```
Call the `authenticate` function to remember the login status.