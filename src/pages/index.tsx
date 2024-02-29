import React from 'react';
import Table from '../components/Table';

const Home: React.FC = () => {
  const data = [
    { car: 'Car1', next: 'Next1', reservation: 'Reservation1', status: 'Status1', rating: 4 },
    { car: 'Car2', next: 'Next2', reservation: 'Reservation2', status: 'Status2', rating: 3 },
  ];
  

  return (
    <div className="container mx-auto mt-8">
      <Table data={data} />
    </div>
  );
};

export default Home;
