import { useState } from "react";

export default function AddUser() {
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [Age, setAge] = useState("");
  const [Group, setGroup] = useState("");

  async function create(event) {
    event.preventDefault();
    const url = "http://localhost:3001/users";

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: Fname,
        lastName: Lname,
        age: Age,
        bloodGroup: Group,
      }),
    });

    response = await response.json();
    alert("User successfully created", response);
  }

  return (
    <>
      <div className="flex justify-center mt-20 px-8">
        <form className="max-w-2xl w-full bg-gray-200">
          <div className="flex flex-wrap  border shadow rounded-lg p-6 dark:bg-gray-600 bg-white">
            <h2 className="text-2xl flex justify-center text-gray-700 dark:text-gray-200 pb-4 w-full font-semibold">
              Add New User:
            </h2>

            <div className="flex flex-col gap-4 w-full">
              <div>
                <label className="text-gray-600 dark:text-gray-400">
                  First Name
                </label>
                <input
                  onChange={(event) => setFName(event.target.value)}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                  type="text"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label className="text-gray-600 dark:text-gray-400">
                  Last Name
                </label>
                <input
                  onChange={(event) => setLName(event.target.value)}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                  type="text"
                  placeholder="Enter last name"
                />
              </div>

              <div>
                <label className="text-gray-600 dark:text-gray-400">Age</label>
                <input
                  onChange={(event) => setAge(event.target.value)}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                  type="number"
                  placeholder="Enter age"
                />
              </div>

              <div>
                <label className="text-gray-600 dark:text-gray-400">
                  Blood Group
                </label>
                <input
                  onChange={(event) => setGroup(event.target.value)}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                  type="text"
                  placeholder="Enter Group"
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={create}
                  className="py-2 px-6 text-center bg-violet-700 border rounded-md text-white hover:bg-violet-600 transition dark:bg-violet-700 dark:hover:bg-violet-600"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
