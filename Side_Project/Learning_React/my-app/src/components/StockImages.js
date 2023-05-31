import List from "./List"
import { useMemo } from "react"
import { Context } from "../context/FirestoreContext"
import { useAuthContext } from "../context/AuthContext";
import { useFirestoreContext } from "../context/FirestoreContext";
const StockImages = () => {
    const { state } = useFirestoreContext()
    const { currentUser } = useAuthContext()

    const items = useMemo(() => {
        const filtered = state.items.filter(item => {
            const username = currentUser?.displayName.split(" ").join()
            return item.user === username?.toLowerCase()
        })
        return currentUser ? filtered : []
    }, [ state.items, currentUser])
    return(
        <>
            <h1>My StockImages</h1>
            <List items={items}/>
        </>
    )
}
export default StockImages