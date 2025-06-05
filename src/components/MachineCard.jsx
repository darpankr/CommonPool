import { useNavigate } from 'react-router';

const MachineCard = ({ item }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Handle the click event for the "Use" button
    console.log(`Using machine: ${item.id}`);
    // You can add more logic here, like updating the status or making an API call
    if (item.status === "AVAILABLE") {
      navigate(`/machine/${item.id}`);
    }
  }
  return (
    <>
      {item.status === "IN USE" ? (
        <div className='size-64 bg-neutral-800 shadow-lg border-2 flex flex-col items-center justify-between py-4 gap-4 text-white rounded'>
          <p className='font-semibold text-lg text-purple-300 text-center'>{item.status}</p>
          <h1 className='font-bold text-3xl text-blue-500'>{item.duration}</h1>
          <p className='text-xl'>{item.user}</p>
          <button className="bg-white hover:bg-purple-300 text-black text-xl font-medium px-5 py-1 rounded-md transition duration-300">
            {item.nextLabel || "Next"}
          </button>
        </div>
      ) : item.status === "AVAILABLE" ? (
        <div className='size-64 bg-neutral-800 shadow-lg border-2 flex flex-col items-center justify-between gap-4 py-4 text-white rounded'>
          <p className='font-semibold text-lg text-green-400 text-center'>{item.status}</p>
          <h1 className='font-bold text-3xl text-red-500'>{item.duration}</h1>
          <p className='text-xl'>{item.user}</p>
          <button className="bg-white hover:bg-green-500 text-black text-xl font-medium px-5 py-1 rounded-md transition duration-300"
              onClick={handleClick}>
            Use
          </button>
        </div>
      ) : (
        <div className='size-64 bg-neutral-800 shadow-lg border-2 flex flex-col items-center justify-center gap-4 text-white rounded'>
          <p className='font-semibold text-lg text-red-500 text-center'>{item.status}</p>
        </div>
      )}
    </>
  );
};

export default MachineCard;