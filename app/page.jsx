import TicketCard from './(components)/TicketCard';
import { BASE_URL } from './utils/url';

const getTickets = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/tickets`, {
      cache: "no-store"
    });
    const body = await res.json();
    console.log(body);

    return body;
  } catch (error) {
    console.log("Failed to get tickets", error)
    return { tickets: [] };
  }

}

const Dashboard = async () => {

  const { tickets } = await getTickets()

  const uniqueCategories = [
    ... new Set(tickets.map(({ category }) => category)),
  ]
  return (
    <div className='p-5 '>
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) =>
          <div key={categoryIndex} className='mb-4'>
            <h2>{uniqueCategory}</h2>
            <div className='lg:grid grid-cols-2 xl:grid-col-4'>
              {tickets.filter((ticket) => ticket.category == uniqueCategory).map((filteredTicket, _index) => (
                <TicketCard id={_index} key={_index} ticket={filteredTicket} />
              ))}
            </div>
          </div>)}
      </div>
    </div>
  )
};

export default Dashboard;
