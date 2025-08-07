import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { uid } from "react-uid";
import type { ColumnDef } from "@tanstack/react-table";
import { type PaginationT } from "@/types/response.type";
import { Pagination } from "./Pagination";

export type responseQuery<T extends object> = {
  responseData: Array<T>;
};

interface DataTableProps<T extends object> {
  columns: Array<ColumnDef<T, any>>;
  ResponseQuery: responseQuery<T>;
}

export function DataTable<T extends object>({
  ResponseQuery,
  columns,
}: DataTableProps<T>) {
  const [pagination, setPagination] = useState<PaginationT>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Calcula el número total de páginas correctamente usando Math.ceil
  const pageCount = useMemo(
    () => Math.ceil(ResponseQuery.responseData.length / pagination.pageSize),
    [ResponseQuery.responseData.length, pagination.pageSize],
  );

  const defaultData: Array<T> = useMemo(() => [], []);
  const table = useReactTable({
    data: ResponseQuery.responseData ?? defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: false,
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: ResponseQuery.responseData.length,
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        const openDetails =
          containerRef.current.querySelectorAll("details[open]");
        openDetails.forEach((d) => d.removeAttribute("open"));
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="flex flex-col items-stretch w-full mt-5">
      {/* Desktop/Table view */}
      <div
        ref={containerRef}
        className="hidden md:block relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-accent uppercase bg-neutral">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={uid(headerGroup.id)}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={uid(header.id)}
                    colSpan={header.colSpan}
                    className="px-4 py-2 text-left text-xs font-medium text-accent uppercase tracking-wider"
                  >
                    <div
                      className={
                        header.column.getCanSort()
                          ? "flex items-center cursor-pointer"
                          : "flex items-center"
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{ asc: " 🔼", desc: " 🔽" }[
                        header.column.getIsSorted() as string
                      ] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={uid(row.id)}
                  className="odd:bg-white even:bg-gray-50 bg-white border-b border-gray-200 hover:bg-gray-50"
                >
                  {row.getVisibleCells().map((cell) => {
                    if (cell.column.id === "actions") {
                      return (
                        <td
                          key={uid(cell)}
                          className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 overflow-visible relative"
                        >
                          <details className="relative">
                            <summary className="flex items-center cursor-pointer">
                              <FaSortDown />
                            </summary>
                            <ul className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded shadow-lg z-50 overflow-visible">
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </ul>
                          </details>
                        </td>
                      );
                    }

                    return (
                      <td
                        key={uid(cell)}
                        className="px-4 py-2 whitespace-nowrap text-sm text-gray-700"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No hay datos para mostrar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile/Card view */}
      <div className="md:hidden space-y-4" ref={containerRef}>
        {table.getRowModel().rows.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <div
              key={uid(row.id)}
              className="border rounded-lg p-4 bg-white shadow-sm overflow-visible relative w-full"
            >
              {row.getVisibleCells().map((cell) => {
                if (cell.column.id === "actions") {
                  return (
                    <div key={uid(cell)} className="mt-2">
                      <details className="relative">
                        <summary className="flex items-center cursor-pointer text-sm font-medium">
                          Acciones
                        </summary>
                        <ul className="absolute left-0 mt-1 w-36 bg-white border border-gray-200 rounded shadow-lg z-50 overflow-visible">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </ul>
                      </details>
                    </div>
                  );
                }
                return (
                  <div
                    key={uid(cell)}
                    className="flex justify-between py-1 text-sm gap-2 w-full"
                  >
                    <span className="font-semibold text-gray-700">
                      {cell.column.columnDef.header as React.ReactNode}
                    </span>
                    <span className="text-gray-600">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-6">
            No hay datos para mostrar
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-col justify-items-start items-start gap-2 p-4 w-full">
        <Pagination
          pageCount={pageCount}
          rowCount={ResponseQuery.responseData.length}
          setPagination={setPagination}
          pag={pagination}
        />
        <span className="text-xs font-light text-primary">
          Total de elementos: {ResponseQuery.responseData.length}
        </span>
      </div>
    </div>
  );
}
