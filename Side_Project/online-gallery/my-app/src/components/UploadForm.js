import { useMemo, useContext } from "react"
import { Context } from "../context/FirestoreContext"
import FireStore from "../handlers/firestore"
import Storage from "../handlers/storage"
import { useAuthContext } from "../context/AuthContext"

const { uploadFile, downloadFile } = Storage
const { writeDoc } = FireStore

const Preview = () => {
  const { state } = useContext(Context)
  const { currentUser} = useAuthContext()
  const { inputs } = state
  return (
    inputs.path && <div
      className="rounded p-1 m-5"
      style={{
        width: "30%",
        height: "300px",
        backgroundImage: `url(${inputs.path}`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

const UploadForm = () => {
  const { currentUser} = useAuthContext()
  const { state, dispatch, toggle, read } = useContext(Context)
  const { inputs } = state
  const username = useMemo(()=> {
    return  currentUser?.displayName.split(" ").join()
  }, [currentUser])
  const handleOnChange = (e) => {
    dispatch({ type: 'setInputs', payload: { value: e } })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    uploadFile(state.inputs)
      .then(downloadFile)
      .then(url => {
        writeDoc({...inputs, path: url, user: username.toLowerCase()}, "stocks")
          .then(() => {
            read()
            dispatch({ type: 'collapse', payload: { bool: false } })
          });
      });
  }

  const isDisabled = useMemo(() => {
    return !!Object.values(inputs).some(input => !input)
  }, [inputs])

  return state.isCollapsed && (
    <>
      <p className="display-6 text-center mb-3">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        <Preview />
        <form className="mb-2" style={{ textAlign: "left" }} onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              aria-describedby="text"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" name="file" onChange={handleOnChange} />
          </div>
          <button
            type="submit"
            className="btn btn-success float-end"
            disabled={isDisabled}
          >
            Save changes
          </button>
        </form>
      </div>
    </>
  );
};
export default UploadForm;