interface Props {
  message: string;
}

export default function ErrorState({
  message,
}: Props) {
  return (
    <div className="rounded-lg bg-red-50 border border-red-200 p-6 text-red-700">
      {message}
    </div>
  );
}