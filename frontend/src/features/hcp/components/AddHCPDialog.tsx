import Button from "@/components/ui/Button";
import { useState } from "react";

import HCPForm from "./HCPForm";
import { useCreateHCP } from "../hooks/useCreateHCP";

import type { CreateHCPRequest } from "@/types/hcp";
export default function AddHCPDialog() {
  const [open, setOpen] = useState(false);

  const mutation = useCreateHCP();
  const handleSubmit = async (
    data: CreateHCPRequest
  ) => {
    try {
        await mutation.mutateAsync(data);

        setOpen(false);

    } catch (error) {
        console.error(error);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        + Add HCP
      </Button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Add New HCP
              </h2>

              <Button
                variant="secondary"
                onClick={() => setOpen(false)}
                >
                ×
                </Button>

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