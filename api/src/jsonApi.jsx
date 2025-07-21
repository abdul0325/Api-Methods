import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function JsonApi() {
  const [jsonData, setjsonData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getJsonApi();
  }, []);

  async function getJsonApi() {
    const url = "http://localhost:3001/users";
    let response = await fetch(url);
    response = await response.json();
    setjsonData(response);
  }

  async function deleteApi(id) {
    const url = `http://localhost:3001/users/${id}`;
    let response = await fetch(url, {
      method: "DELETE",
    });
    setjsonData((prevData) => prevData.filter((user) => user.id !== id));
    alert("Record Deleted!", response);
  }

  async function editApi(id) {
    navigate(`/edit/${id}`);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl text-green-600 justify-center items-center flex mt-4 mb-2 font-bold">
          Own Created Json Data :
        </h1>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg w-full max-w-4xl mx-auto mt-6">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-200 font-semibold">
            <tr>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Age</th>
              <th className="px-4 py-2 border">Blood Group</th>
              <th className="px-4 py-2 border">Delete</th>
              <th className="px-4 py-2 border">Edit</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((data, index) => (
              <tr className="bg-white" key={index}>
                <td className="px-4 py-2 border">{data.firstName}</td>
                <td className="px-4 py-2 border">{data.lastName}</td>
                <td className="px-4 py-2 border">{data.age}</td>
                <td className="px-4 py-2 border">{data.bloodGroup}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => deleteApi(data.id)}
                    className="font-bold text-red-500 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => editApi(data.id)}
                    className="font-bold text-red-500 text-sm hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
