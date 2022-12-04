import { useMemo } from "react";

const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

export const usePagination = ({totalCount,pageSize,siblingCount = 1,currentPage}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5;  // Pages count = siblingCount + firstPage + lastPage + currentPage + both sets of dots
        if (totalPageNumbers >= totalPageCount) {   // If number of pages is less than total page numbers to display
            return range(1,totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {   // No left dots to show.
            let leftItemCount = 3 + (2 * siblingCount);
            let leftRange = range(1,leftItemCount);
            return [...leftRange, DOTS, totalPageCount];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {   // No right dots to show.
            let rightItemCount = 3 + (2 * siblingCount);
            let rightRange = range(totalPageCount - rightItemCount + 1,totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {   // Both left and right dots to show.
            let middleRange = range(leftSiblingIndex,rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }
    }, [totalCount,pageSize,siblingCount,currentPage]);
    return paginationRange;
}

