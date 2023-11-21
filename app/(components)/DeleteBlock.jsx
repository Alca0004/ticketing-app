'use client'
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import { BASE_URL } from "../utils/url"


const DeleteBlock = ({ id }) => {

    const router = useRouter()

    const deleteTicket = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/Tickets/${id}`, {
                method: 'DELETE'
            });
            const body = await res.json();
            console.log(body);

            return body;
        } catch (error) {
            console.log("Failed to delete ticket", error)
            return {};
        }
    };

    return (
        <FontAwesomeIcon icon={faX} className="text-red-400 hover:cursor-pointer hover:text-red-200"
            onClick={deleteTicket} />
    )
}

export default DeleteBlock