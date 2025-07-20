import { useEffect, useState } from "react";

function Api() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUser(response.users);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl text-green-600 justify-center items-center flex mt-4 mb-2 font-bold">
          Using Get Method to Fetch Api Data :{" "}
        </h1>
      </div>
      {user.map((userdata, index) => (
        <div
          key={index}
          className="overflow-x-auto shadow-md rounded-lg w-full max-w-md mx-auto mt-6"
        >
          <table className="min-w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-200 font-semibold">
              <tr>
                <th className="px-4 py-2 border">First Name</th>
                <th className="px-4 py-2 border">Last Name</th>
                <th className="px-4 py-2 border">Age</th>
                <th className="px-4 py-2 border">Blood Group</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border">{userdata.firstName}</td>
                <td className="px-4 py-2 border">{userdata.lastName}</td>
                <td className="px-4 py-2 border">{userdata.age}</td>
                <td className="px-4 py-2 border">{userdata.bloodGroup}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}

export default Api;
