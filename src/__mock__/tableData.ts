
export const mockTableData = {
    columns: [
        { id: 'indicator', title: 'Indicator', type: 'number' },
        { id: 'staticReturn', title: 'Static Return', type: 'percent' },
        { id: 'expirationDate', title: 'Expiration Date', type: 'date' },
        { id: 'finalSecurityOutcome', title: 'Final Security Outcome', type: 'text' },
    ],
    rows: [
        { indicator: { value: 17712862 }, staticReturn: { value: 50 }, expirationDate: { value: '2023-02-27' }, finalSecurityOutcome: { value: null } },
        { indicator: { value: 19812862 }, staticReturn: { value: 20 }, expirationDate: { value: '2023-01-15' }, finalSecurityOutcome: { value: 'Pending' } },
        { indicator: { value: 19912862 }, staticReturn: { value: -38.921 }, expirationDate: { value: '2022-12-31' }, finalSecurityOutcome: { value: '-' } },
        { indicator: { value: 0 }, staticReturn: { value: -50 }, expirationDate: { value: null }, finalSecurityOutcome: { value: null } },
    ],
};
