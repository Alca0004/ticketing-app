import { BASE_URL } from "@/app/utils/url"

const { default: TicketForm } = require("@/app/(components)/TicketForm")

const getTicketById = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/api/Tickets/${id}`, {
            cache: 'no-store'
        })
        const body = await res.json();
        console.log(body);

        return body;
    } catch (error) {
        console.log("Failed to get ticket", id, error)
        return {};
    }
}

const TicketPage = async ({ params }) => {
    const EDITMODE = params.id === 'new' ? false : true

    let updateTicketData = {};

    if (EDITMODE) {
        updateTicketData = await getTicketById(params.id);
        updateTicketData = updateTicketData.foundTicket
    } else {
        updateTicketData = {
            _id: 'new'
        };
    }
    return < TicketForm ticket={updateTicketData} />
};

export default TicketPage