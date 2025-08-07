import type { PaginationStateInternal } from '@/hooks/usePagination';
import type { PaginationFromResponse as PaginationType } from '@/types/api.type';
import type { ColumnDef } from '@tanstack/react-table';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type { Dispatch, SetStateAction } from 'react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FaSortDown } from 'react-icons/fa';
import { uid } from 'react-uid';
import { Pagination } from './Pagination';

export type PaginationT = {
  pageIndex: number;
  pageSize: number;
  totalPages?: number;
};

export type responseQuery<T extends object> = {
  responseData: Array<T>;
  rowCount: number;
};

interface DataTableProps<T extends object> {
  columns: Array<ColumnDef<T, any>>;
  data: Array<T>;
  pagination: PaginationType;
  setPagination: Dispatch<SetStateAction<PaginationStateInternal>>;
  decrementPageIndex: () => void;
  incrementPageIndex: () => void;
}

export function AsyncTable<T extends object>({
  data,
  columns,
  pagination,
  setPagination,
  decrementPageIndex,
  incrementPageIndex,
}: DataTableProps<T>) {
  // Calcula el número total de páginas usando Math.ceil
  const { totalPages: pageCount } = pagination;
  const defaultData: Array<T> = useMemo(() => [], []);
  const table = useReactTable({
    data: data ?? defaultData,
    columns,
    manualPagination: true,
    pageCount,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
  });

  // Cerrar dropdowns al hacer clic fuera
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        const openDetails =
          containerRef.current.querySelectorAll('details[open]');
        openDetails.forEach((d) => d.removeAttribute('open'));
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  // Sticky pagination logic
  const [showStickyPagination, setShowStickyPagination] = useState(false);
  const normalPaginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handle = () => {
      if (!normalPaginationRef.current) return;
      const rect = normalPaginationRef.current.getBoundingClientRect();
      // Si la paginación normal está visible en viewport, ocultar sticky
      setShowStickyPagination(
        !(rect.bottom > 0 && rect.top < window.innerHeight),
      );
    };
    // Usar IntersectionObserver si está disponible
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window && normalPaginationRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setShowStickyPagination(!entry.isIntersecting);
        },
        { threshold: 0.1 },
      );
      observer.observe(normalPaginationRef.current);
    } else {
      window.addEventListener('scroll', handle);
      window.addEventListener('resize', handle);
    }
    // Llamar una vez al montar
    handle();
    return () => {
      if (observer && normalPaginationRef.current) observer.disconnect();
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  return (
    <div className="flex flex-col items-stretch w-full ">
      {/* Desktop/Table view */}
      <div
        ref={containerRef}
        className="hidden md:block relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-neutral">
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
                          ? 'flex items-center cursor-pointer'
                          : 'flex items-center'
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{ asc: ' 🔼', desc: ' 🔽' }[
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
                  className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
                >
                  {row.getVisibleCells().map((cell) => {
                    if (cell.column.id === 'actions') {
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
      <div className="md:hidden" ref={containerRef}>
        {table.getRowModel().rows.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <div
              key={uid(row.id)}
              className="border rounded-lg p-4 bg-white shadow-sm overflow-visible relative w-full  mt-4"
            >
              {row.getVisibleCells().map((cell) => {
                if (cell.column.id === 'actions') {
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
                    className="flex justify-between py-1 text-sm"
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

      <div
        ref={normalPaginationRef}
        className="flex flex-col items-start justify-between flex-wrap gap-2 p-4 w-full md:static md:bg-transparent"
      >
        <Pagination
          decrementPageIndex={decrementPageIndex}
          incrementPageIndex={incrementPageIndex}
          setPagination={setPagination}
          pag={pagination}
        />
        <span className="text-xs font-light text-primary">
          Total de elementos: {pagination.totalRecords}
        </span>
      </div>

      {/* Sticky pagination mobile view */}
      {showStickyPagination && (
        <div
          className="flex flex-col items-start justify-between flex-wrap gap-2 p-4 w-full fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden"
          style={{ boxShadow: '0 -2px 8px rgba(0,0,0,0.04)' }}
        >
          <Pagination
            decrementPageIndex={decrementPageIndex}
            incrementPageIndex={incrementPageIndex}
            setPagination={setPagination}
            pag={pagination}
          />
          <span className="text-xs font-light text-primary">
            Total de elementos: {pagination.totalRecords}
          </span>
        </div>
      )}
    </div>
  );
}
