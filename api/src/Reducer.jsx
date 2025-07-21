import { useReducer } from "react";

const emptyData = {
  Name: "",
  Password: "",
  Group: "",
  City: "",
  Address: "",
};

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};

export default function ReducerComponent() {
  const [state, dispatch] = useReducer(reducer, emptyData);

  return (
    <div className="flex justify-center mt-10 px-8">
      <form className="max-w-2xl w-full bg-gray-200">
        <div className="flex flex-wrap border shadow rounded-lg p-6 dark:bg-gray-600 bg-white">
          <h2 className="text-2xl flex justify-center text-gray-700 dark:text-gray-200 pb-4 w-full font-semibold">
            Testing Reducer :
          </h2>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-600 dark:text-gray-400">Name</label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              onChange={(event) =>
                dispatch({ val: event.target.value, type: "Name" })
              }
              placeholder="Enter Name"
            />
            <label className="text-gray-600 dark:text-gray-400">Password</label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              onChange={(event) =>
                dispatch({ val: event.target.value, type: "Password" })
              }
              placeholder="Enter Passcode"
            />
            <label className="text-gray-600 dark:text-gray-400">
              Blood Group
            </label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              onChange={(event) =>
                dispatch({ val: event.target.value, type: "Group" })
              }
              placeholder="Enter Group"
            />
            <label className="text-gray-600 dark:text-gray-400">City</label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              onChange={(event) =>
                dispatch({ val: event.target.value, type: "City" })
              }
              placeholder="Enter City"
            />
            <label className="text-gray-600 dark:text-gray-400">Address</label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              onChange={(event) =>
                dispatch({ val: event.target.value, type: "Address" })
              }
              placeholder="Enter Address"
            />

            <div className="flex justify-center">
              <button
                className="py-2 px-6 text-center bg-violet-700 border rounded-md text-white hover:bg-violet-600 transition dark:bg-violet-700 dark:hover:bg-violet-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="max-w-xl w-fit h-fit mx-auto mt-10 p-6 bg-blue-100 dark:bg-gray-800 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2">
          User Data:
        </h1>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-200">
          <li>
            <span className="font-semibold">Name:</span> {state.Name}
          </li>
          <li>
            <span className="font-semibold">Password:</span> {state.Password}
          </li>
          <li>
            <span className="font-semibold">Group:</span> {state.Group}
          </li>
          <li>
            <span className="font-semibold">City:</span> {state.City}
          </li>
          <li>
            <span className="font-semibold">Address:</span> {state.Address}
          </li>
        </ol>
      </div>
    </div>
  );
}
