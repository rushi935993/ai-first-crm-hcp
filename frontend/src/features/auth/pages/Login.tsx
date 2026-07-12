import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const navigate = useNavigate();

  const mutation = useLogin();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const result =
        await mutation.mutateAsync({
          email,
          password,
        });

      localStorage.setItem(
        "token",
        result.access_token
      );

      toast.success("Login successful.");

      navigate("/");

    } catch {
      toast.error(
        "Invalid email or password."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <Card className="w-full max-w-md p-8">

        <h1 className="text-3xl font-bold mb-6 text-center">
          AI First CRM
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <Input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending
              ? "Logging in..."
              : "Login"}
          </Button>

        </form>

      </Card>

    </div>
  );
}