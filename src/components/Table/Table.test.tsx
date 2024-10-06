import { render, screen, fireEvent } from '@testing-library/react';
import Table from './Table';
import { mockTableData } from '../../__mock__/tableData';

describe('Table Component', () => {
    test('renders table with correct columns and rows', () => {
        render(<Table columns={mockTableData.columns} rows={mockTableData.rows} />);

        const headers = screen.getAllByRole('columnheader');
        expect(headers).toHaveLength(mockTableData.columns.length);
        mockTableData.columns.forEach((column) => {
            expect(screen.getByText(column.title)).toBeInTheDocument();
        });

        const rows = screen.getAllByRole('row').slice(1);
        expect(rows).toHaveLength(mockTableData.rows.length);
    });

    test('sorts table by indicator ascending', () => {
        render(<Table columns={mockTableData.columns} rows={mockTableData.rows} />);

        fireEvent.click(screen.getByText('Indicator'));

        const sortedRows = screen.getAllByRole('row').slice(1);
        const values = sortedRows.map((row) => (row as HTMLTableRowElement)?.cells[0]?.textContent?.trim());
        expect(values).toEqual(['0', '17,712,862', '19,812,862', '19,912,862']);
    });

    test('displays formatted date correctly', () => {
        render(<Table columns={mockTableData.columns} rows={mockTableData.rows} />);

        const expirationDateCell = screen.getByTestId('row-0-expirationDate');
        expect(expirationDateCell).toHaveTextContent('27 Feb 2023'); // Ensure proper date handling in your component
    });

    test('handles null indicator value', () => {
        render(<Table columns={mockTableData.columns} rows={mockTableData.rows} />);

        const nullIndicatorCell = screen.getByTestId('row-3-indicator');
        expect(nullIndicatorCell).toHaveTextContent('0'); // Adjusted expected value
    });

    test('handles empty final security outcome correctly', () => {
        render(<Table columns={mockTableData.columns} rows={mockTableData.rows} />);

        const emptyOutcomeCell = screen.getByTestId('row-3-finalSecurityOutcome');
        expect(emptyOutcomeCell).toHaveTextContent('-'); // Make sure your component returns '-' for empty values
    });
});
