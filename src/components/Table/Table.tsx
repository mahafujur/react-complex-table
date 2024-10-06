import classNames from "./Table.module.css";
import { column, row } from "../../types/tableData";
import useTableData from "../../hooks/useTableData";

type TableProps = {
    columns: column[];
    rows: row[];
};

const Table = ({ columns, rows }: TableProps) => {
    const { sortedRows, requestSort, getSortIcon, formatCellValue } = useTableData(rows, columns);

    return (
        <table className={classNames.table}>
            <thead>
            <tr>
                {columns?.map(({ id, title }) => (
                    <th key={id} onClick={() => requestSort(id)}>
                        {title} {getSortIcon(id)}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {sortedRows.map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => (
                        <td
                            data-testid={`row-${index}-${column.id}`}
                            className={classNames[`cell-type-${column.type}`]}
                            key={column.id}
                        >
                            {formatCellValue(row[column.id]?.value, column)} {row[column.id]?.unit}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
