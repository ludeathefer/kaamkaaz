import { useEffect, useState } from "react";
import {fetchUsers} from "../api"
const Waiting = () => {
  const [serviceUser, setServiceUser] = useState([])
  useEffect(()=>{
    const secret= localStorage.getItem('secret');
    fetchUsers(secret)
  }, [])


  const waitingTableBody = waitingArray.map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-gray-400 px-4 py-2">{item.name}</td>
        <td className="border border-gray-400 px-4 py-2">{item.service}</td>
        <td className="border border-gray-400 px-4 py-2">{item.documents}</td>
        <td className="border border-gray-400 px-4 py-2">
          <button className="px-4 py-2 bg-green-500">Verify</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-6">
      <p className="text-4xl">Waiting List</p>
      <div>
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Service</th>
              <th className="border border-gray-400 px-4 py-2">Documents</th>
              <th className="border border-gray-400 px-4 py-2">Verify </th>
            </tr>
          </thead>
          <tbody>
            {waitingTableBody}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Waiting;