import React, { useReducer } from 'react';

import useShop from '../EmployeeContext';




const Home = () => {
  const {employees, removeEmployee, addEmployee} = useShop();

  const handleRemoveEmployee = (employeeId) => {
    removeEmployee(employeeId)
  };
  console.log(employees);

  return (
    <>

    <div className='flex flex-col'>
      <div className='flex justify-center'>
        <h1 className='text-2xl font-bold'>Employee List</h1>
      </div>
      <div className='flex justify-center'>
      {employees.length === 0 ? (
          <p>No employees data available.</p>
        ) :(<table className='table-auto'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Name</th>
              <th className='px-4 py-2'>Department</th>
            </tr>
          </thead>
          <tbody>
            { employees.map((item, index) => (
              <tr key={index}>
                <td className='border px-4 py-2'>{item.name}</td>
                <td className='border px-4 py-2'>{item.department}</td>
                <td className='border px-4 py-2'>
                  <button
                    className='bg-red-500 px-4 py-2 text-white rounded'
                    onClick={() => handleRemoveEmployee(item.id)} // Use a function to pass the employeeId
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>)}
      </div>
    </div>
    </>
  );
};

export default Home;
