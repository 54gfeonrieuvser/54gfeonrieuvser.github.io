import Navbar from "./Navbar"
import UploadForm from "./UploadForm"
function Layout({ children, state, onChange, onSubmit, toggle }) {
    return(
    <>
    <Navbar />
        <div className="container  mt-5">
        <button className="btn btn-success float-end" onClick={() => toggle(!state.isCollapsed)}>{state.isCollapsed ? 'Close' : '+ Add'}</button>
        <div className="clearfix mb-4"></div>
        <UploadForm 
            inputs={state.inputs}
            isVisible={state.isCollapsed}
            onChange={onChange}
            onSubmit={onSubmit}
        />
        {children}
        </div>
      </>)
}
export default Layout