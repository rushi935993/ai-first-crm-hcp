import { useForm } from "react-hook-form";
import type { CreateHCPRequest } from "@/types/hcp";

type Props = {
  onSubmit: (data: CreateHCPRequest) => void;
  isLoading: boolean;
  initialValues?: CreateHCPRequest;
  submitLabel?: string;
};

export default function HCPForm({
  onSubmit,
  isLoading,
  initialValues,
  submitLabel = "Save HCP",
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    } = useForm<CreateHCPRequest>({
    defaultValues: initialValues,
});

  const submitForm = (data: CreateHCPRequest) => {
    onSubmit(data);

    if (!initialValues) {
        reset();
    }
    };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">
          Doctor Name
        </label>

        <input
          {...register("doctor_name", {
            required: true,
          })}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Specialty
        </label>

        <input
          {...register("specialty")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Hospital
        </label>

        <input
          {...register("hospital")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          City
        </label>

        <input
          {...register("city")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          State
        </label>

        <input
          {...register("state")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Email
        </label>

        <input
          type="email"
          {...register("email")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Phone
        </label>

        <input
          {...register("phone")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Territory
        </label>

        <input
          {...register("territory")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold"
      >
        {isLoading ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}