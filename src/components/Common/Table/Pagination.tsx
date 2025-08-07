import type { PaginationFromResponse } from '@/types/api.type';
import type { PaginationState } from '@tanstack/react-table';
import React, { Fragment, useMemo } from 'react';

interface PaginationProps {
  pag: PaginationFromResponse;
  setPagination: React.Dispatch<React.SetStateAction<PaginationState>>;
  decrementPageIndex: () => void;
  incrementPageIndex: () => void;
  maxVisiblePages?: number;
}

export function Pagination({
  pag,
  setPagination,
  maxVisiblePages = 5,
  decrementPageIndex,
  incrementPageIndex,
}: PaginationProps) {
  const indexMemo = useMemo(() => {
    const arr: Array<{
      index: number;
      label: number;
    }> = [];
    for (let i = 1; i <= pag.totalRecords; i++) {
      arr.push({
        index: i,
        label: i,
      });
    }
    return arr;
  }, [pag.totalRecords, pag.pageSize]);
  const visiblePages = useMemo(() => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(0, pag.pageIndex - half);
    let end = start + maxVisiblePages;
    if (end > pag.totalPages) {
      end = pag.totalPages;
      start = Math.max(end - maxVisiblePages, 0);
    }
    const pages: number[] = [];
    for (let i = start; i < end; i++) {
      pages.push(i);
    }
    return {
      pages,
      hasLeft: start > 0,
      hasRight: end < pag.totalPages,
    };
  }, [pag.pageIndex, pag.totalPages, maxVisiblePages, pag.pageSize]);
  const changePaginationIndex = (nuevoIndex: number) => {
    setPagination({ pageSize: pag.pageSize, pageIndex: nuevoIndex });
  };
  return (
    <Fragment>
      <div className="join">
        <button
          onClick={() => changePaginationIndex(0)}
          className={`join-item btn btn-sm btn-primary `}
          disabled={pag.pageIndex == 0}
        >
          {'<<'}
        </button>
        <button
          disabled={pag.pageIndex == 0}
          onClick={() => {
            decrementPageIndex();
          }}
          className="join-item btn btn-sm btn-secondary"
        >
          {'<'}
        </button>
        {visiblePages.pages.map((page) => {
          return (
            <button
              key={`pagButton-${page}`}
              onClick={() => changePaginationIndex(page)}
              className={` join-item btn btn-sm ${pag.pageIndex == page ? ' btn-accent ' : ''} ${
                page == pag.pageIndex ? 'cursor-not-allowed' : ''
              }`}
            >
              {page + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            incrementPageIndex();
          }}
          className="join-item btn btn-sm btn-secondary"
          disabled={pag.pageIndex == pag.totalPages - 1}
        >
          {'>'}
        </button>
        <button
          onClick={() =>
            setPagination((prev) => ({
              ...prev,
              pageIndex: pag.totalPages - 1,
            }))
          }
          className={`join-item btn btn-sm btn-primary`}
          disabled={pag.pageIndex == pag.totalPages - 1}
        >
          {'>>'}
        </button>
      </div>
    </Fragment>
  );
}
