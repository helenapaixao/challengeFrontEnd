import React from 'react';

interface TableProps {
  data: Array<{ car: string; next: string; reservation: string; status: string; rating: number }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 font-sans">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left font-sans">Car</th>
            <th className="px-6 py-3 bg-gray-100 text-left">Next</th>
            <th className="px-6 py-3 bg-gray-100 text-left">Reservation</th>
            <th className="px-6 py-3 bg-gray-100 text-left">Status</th>
            <th className="px-6 py-3 bg-gray-100 text-left">Rating</th>
            <th className="px-6 py-3 bg-gray-100 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4">{item.car}</td>
              <td className="px-6 py-4">{item.next}</td>
              <td className="px-6 py-4">{item.reservation}</td>
              <td className="px-6 py-4">{item.status}</td>
              <td className="px-6 py-4">
                {/* Add logic to display stars based on the rating */}
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500">&#9733;</span>
                ))}
              </td>
              <td className="px-6 py-4"> {/* Add your action buttons here */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
