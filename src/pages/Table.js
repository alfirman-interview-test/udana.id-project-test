import { useEffect, useState } from "react";

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold oswald border-green-300 border-b-4 py-4 uppercase text-gray-800">
        table
      </h1>
      <div className="overflow-auto">
        <div className="w-[640px] sm:w-full">
          <table className="w-full mt-4">
            <thead className="text-left font-bold oswald text-lg sm:text-2xl tracking-wide">
              <tr className="border-b-2 border-gray-600">
                <th className="p-3">Name</th>
                <th className="p-3">City</th>
                <th className="p-3">State</th>
                <th className="p-3">Postal Code</th>
                <th className="p-3">Country</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base">
              {data.map((el, i) => (
                <tr key={i} className="odd:bg-gray-100">
                  <td className="p-3">{el.name}</td>
                  <td className="p-3 ">{el.city}</td>
                  <td className="p-3">{el.state}</td>
                  <td className="p-3">{el.postal_code}</td>
                  <td className="p-3">{el.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
