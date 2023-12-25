const Verified = () => {
  const VerifiedArray = [
    {
      name: "John Doe",
      service: "Plumbing",
      documents: "CTEVT Plumbing Certification"
    }
  ];
  const VerifiedTableBody = VerifiedArray.map((item, index) => {
    return (
      <tr key={index}>
        <td className="border border-gray-400 px-4 py-2">{item.name}</td>
        <td className="border border-gray-400 px-4 py-2">{item.service}</td>
        <td className="border border-gray-400 px-4 py-2">{item.documents}</td>
        <td className="border border-gray-400 px-4 py-2">
          <button className="px-4 py-2 bg-red-500">Remove</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-6">
      <p className="text-4xl">Verified List</p>
      <div>
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Service</th>
              <th className="border border-gray-400 px-4 py-2">Documents</th>
              <th className="border border-gray-400 px-4 py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {VerifiedTableBody}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Verified