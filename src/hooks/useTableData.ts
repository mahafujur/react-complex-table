import { useMemo, useState } from "react";
import { column, OrderDirection, row } from "../types/tableData";
import { formatDate, formatNumber, formatPercent } from "../utils/helper";

const useTableData = (rows: row[], columns: column[]) => {
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: OrderDirection } | null>(null);

    const getDefaultFallback = (key: string) => {
        const columnDef = columns.find(col => col.id === key);
        if (!columnDef) return '';

        switch (columnDef.type) {
            case 'number':
            case 'percent':
                return 0;
            case 'date':
                return new Date(0).getTime();
            default:
                return '';
        }
    };

    const sortedRows = useMemo(() => {
        let sortableItems = [...rows];
        if (sortConfig !== null) {
            const { key, direction } = sortConfig;
            const order = direction === OrderDirection.Ascending ? 1 : -1;

            sortableItems.sort((a, b) => {
                const aValue = a[key]?.value ?? getDefaultFallback(key);
                const bValue = b[key]?.value ?? getDefaultFallback(key);
                return (aValue < bValue ? -1 : 1) * order;
            });
        }
        return sortableItems;
    }, [rows, sortConfig, columns]);

    const requestSort = (key: string) => {
        let direction: OrderDirection = OrderDirection.Ascending;
        if (sortConfig && sortConfig.key === key && sortConfig.direction === OrderDirection.Ascending) {
            direction = OrderDirection.Descending;
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key: string) => {
        if (!sortConfig || sortConfig.key !== key) return null;
        return sortConfig.direction === OrderDirection.Ascending ? "▲" : "▼";
    };

    const formatCellValue = (value: any, column: column) => {
        const { type, decimalDigits } = column;

        const safeValue = value !== undefined && value !== null ? value : 0;

        switch (type) {
            case "number":
                return formatNumber(safeValue, decimalDigits as number);
            case "percent":
                return formatPercent(safeValue, decimalDigits as number);
            case "date":
                return formatDate(safeValue);
            default:
                return value || "-";
        }
    };

    return {
        sortedRows,
        requestSort,
        getSortIcon,
        formatCellValue,
    };
};

export default useTableData;
