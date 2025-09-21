import { useSelector } from "react-redux"

function Username() {
    const username = useSelector((store) => store.user.username)

    if(!username) return null
    return (
        <div className="text-sm hidden md:block font-semibold">
            {username}
        </div>
    )
}

export default Username
