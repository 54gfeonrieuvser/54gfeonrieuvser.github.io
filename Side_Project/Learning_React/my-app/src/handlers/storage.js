import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../lib/firebase.config"
const Storage = {
    uploadFile: (media) => {
        return new Promise(async resolve => {
            try {
                const storageRef = ref(storage, `images/${media.title}`);//second augment to represent path in Cloud Storage
                uploadBytes(storageRef, media.file).then(snapshot => {
                    resolve({ path: snapshot.metadata.fullPath, name: media.title })
                });
            } catch (e) {
                console.error(e)
            }
        })
    },
    downloadFile: (media) => {
        return new Promise(async resolve => {
            try {
                const storageRef = ref(storage, media.path);
                const fileURL = await getDownloadURL(storageRef)
                resolve(fileURL)
            } catch (e) {
                console.error(e)
            }
        })
    }
}
export default Storage