import { useState } from "react";

import HCPForm from "./HCPForm";
import { useCreateHCP } from "../hooks/useCreateHCP";
export default function AddHCPDialog() {
  const [open, setOpen] = useState(false);

  const mutation = useCreateHCP();
  const handleSubmit = async (data: any) => {
    console.log("Form Data:", data);

    await mutation.mutateAsync(data);

    console.log("Mutation Success");

    setOpen(false);
};

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
      >
        + Add HCP
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Add New HCP
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl"
              >
                ×
              </button>

            </div>

            <HCPForm
              onSubmit={handleSubmit}
              isLoading={mutation.isPending}
            />

          </div>

        </div>
      )}
    </>
  );
}