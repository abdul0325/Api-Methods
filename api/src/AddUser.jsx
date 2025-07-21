import { useActionState } from "react";

export default function AddUser() {
  const handleError = async (prev, formData) => {
    let NameA = formData.get("Fname");
    let NameB = formData.get("Lname");
    let PersonAge = formData.get("Age");
    let PersonGroup = formData.get("Group");
    let AgeRegex = /^[0-9]+$/;
    const BloodRegex = /^(A|B|AB|O)[+-]$/;

    if (!NameA || NameA.length > 5) {
      return {
        error: "First Name should not Exceed five Character",
        NameA,
        NameB,
        PersonAge,
        PersonGroup,
      };
    } else if (!NameB || NameB.length > 5) {
      return {
        error: "Last Name should not Exceed five Character",
        NameA,
        NameB,
        PersonAge,
        PersonGroup,
      };
    } else if (!AgeRegex.test(PersonAge)) {
      return {
        error: "Invalid Age (only numeric allowed)",
        NameA,
        NameB,
        PersonAge,
        PersonGroup,
      };
    } else if (!BloodRegex.test(PersonGroup)) {
      return {
        error: "Invalid Blood Group",
        NameA,
        NameB,
        PersonAge,
        PersonGroup,
      };
    }
    const url = "http://localhost:3001/users";

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: NameA,
        lastName: NameB,
        age: PersonAge,
        bloodGroup: PersonGroup,
      }),
    });
    response = await response.json();
    alert("User successfully created", response);

    return {
      message: "Submit the Form ",
      NameA,
      NameB,
      PersonAge,
      PersonGroup,
    };
  };

  const [data, action, pending] = useActionState(handleError, {
    NameA: "",
    NameB: "",
    PersonAge: "",
    PersonGroup: "",
    error: null,
    message: null,
  });

  return (
    <div className="flex justify-center mt-10 px-8">
      <form action={action} className="max-w-2xl w-full bg-gray-200">
        <div className="flex flex-wrap border shadow rounded-lg p-6 dark:bg-gray-600 bg-white">
          <h2 className="text-2xl flex justify-center text-gray-700 dark:text-gray-200 pb-4 w-full font-semibold">
            Add New User:
          </h2>

          {data?.message && (
            <span className="text-green-600">{data.message}</span>
          )}
          {data?.error && <span className="text-red-600">{data.error}</span>}

          <div className="flex flex-col gap-4 w-full">
            <label className="text-gray-600 dark:text-gray-400">
              First Name
            </label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              name="Fname"
              defaultValue={data?.NameA}
              placeholder="Enter first name"
            />
            <label className="text-gray-600 dark:text-gray-400">
              Last Name
            </label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              name="Lname"
              defaultValue={data?.NameB}
              placeholder="Enter last name"
            />
            <label className="text-gray-600 dark:text-gray-400">Age</label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              name="Age"
              defaultValue={data?.PersonAge}
              placeholder="Enter age"
            />
            <label className="text-gray-600 dark:text-gray-400">
              Blood Group
            </label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              name="Group"
              defaultValue={data?.PersonGroup}
              placeholder="Enter Group"
            />

            <div className="flex justify-center">
              <button
                className="py-2 px-6 text-center bg-violet-700 border rounded-md text-white hover:bg-violet-600 transition dark:bg-violet-700 dark:hover:bg-violet-600"
                type="submit"
              >
                {pending ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
