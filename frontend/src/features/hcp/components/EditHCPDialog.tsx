import { useState } from "react";

import Button from "@/components/ui/Button";
import HCPForm from "./HCPForm";

import { useUpdateHCP } from "../hooks/useUpdateHCP";

import type { HCP, CreateHCPRequest } from "@/types/hcp";
interface Props {
  hcp: HCP;
}

export default function EditHCPDialog({
  hcp,
}: Props) {
  const [open, setOpen] = useState(false);

  const mutation = useUpdateHCP();

  const handleSubmit = async (
    data: CreateHCPRequest
  ) => {
    try {
      await mutation.mutateAsync({
        id: hcp.id,
        payload: data,
      });

      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => setOpen(true)}
      >
        ✏ Edit
      </Button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Edit HCP
              </h2>

              <Button
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                ✕
              </Button>

            </div>

            <HCPForm
              initialValues={{
                doctor_name: hcp.doctor_name,
                specialty: hcp.specialty,
                hospital: hcp.hospital,
                city: hcp.city,
                state: hcp.state,
                email: hcp.email,
                phone: hcp.phone,
                territory: hcp.territory,
              }}
              submitLabel="Update HCP"
              onSubmit={handleSubmit}
              isLoading={mutation.isPending}
            />

          </div>

        </div>
      )}
    </>
  );
}