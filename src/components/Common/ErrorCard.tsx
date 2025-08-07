import { FaCircleExclamation } from "react-icons/fa6";

interface ErrorCardProps {
  errorMessage?: string;
}
export function ErrorCard({ errorMessage }: ErrorCardProps) {
  return (
    <div className="card bg-red-100 border border-error p-4">
      <span
        className={
          "card-title font-black uppercase text-error inline-flex items-center gap-4 text-3xl"
        }
      >
        <FaCircleExclamation /> Error
      </span>
      <p className="text-neutral card-body">
        {errorMessage ||
          "Ocurrió un error al cargar los datos del proveedor. Por favor, inténtelo de nuevo más tarde."}
      </p>
    </div>
  );
}
