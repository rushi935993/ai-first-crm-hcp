import { useState } from "react";

import Button from "@/components/ui/Button";
import { useDeleteHCP } from "../hooks/useDeleteHCP";
import { toast } from "sonner";

interface Props {
  id: string;
  doctorName: string;
}

export default function DeleteHCPDialog({
  id,doctorName,
}: Props) {
  const [open, setOpen] = useState(false);

  const mutation = useDeleteHCP();

  const handleDelete = async () => {
  try {
    await mutation.mutateAsync(id);

    toast.success("HCP deleted successfully.");

    setOpen(false);

  } catch (error) {
    console.error(error);

    toast.error("Failed to delete HCP.");
  }
};

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => setOpen(true)}
      >
        🗑 Delete
      </Button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">

            <h2 className="text-xl font-bold mb-4">
              Delete HCP
            </h2>

            <p className="mb-6">
              Are you sure you want to delete{" "}
              <strong>{doctorName}</strong>?
            </p>

            <div className="flex justify-end gap-3">

              <Button
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                disabled={mutation.isPending}
              >
                {mutation.isPending
                  ? "Deleting..."
                  : "Delete"}
              </Button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}