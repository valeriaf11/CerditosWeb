import React from 'react';

const Table = () => {
  return (
    <div className="overflow-x-auto max-w-sm mx-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="bg-gradient-to-r from-pink-300 to-yellow-200 text-gray-800 rounded-t-xl">
          <tr>
            <th className="py-2 px-4 font-semibold">Nombre</th>
            <th className="py-2 px-4 font-semibold">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-yellow-100 transition duration-200">
            <td className="py-2 px-4 border-t">Cerdo de abeja </td>
            <td className="py-2 px-4 border-t">5</td>
          </tr>
          <tr className="hover:bg-pink-100 transition duration-200">
            <td className="py-2 px-4 border-t">Cerdo color rosa </td>
            <td className="py-2 px-4 border-t">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;