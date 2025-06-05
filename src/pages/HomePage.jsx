import React from 'react'
import MachineCard from '../components/MachineCard'
import { MACHINE_STATUS } from '../config/app.config'

const HomePage = () => {
  const data = MACHINE_STATUS;

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-300 to-purple-300 flex flex-col gap-8 items-center justify-center'>
      <h1 className='text-white font-medium text-5xl text-center'>{data.poolName}</h1>
      <p className='text-white text-center'>{data.instructions}</p>
      <div className='flex flex-wrap gap-8 justify-center'>
        {data.machines.map((item) => (
          <MachineCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
