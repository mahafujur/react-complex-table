import dayjs from "dayjs";

export const formatDate = (value: any, format: string = "DD MMM YYYY") => {
    const date = dayjs(value);
    return date.isValid() ? date.format(format) : "-";
};

export const formatNumber = (value: any, decimalDigits: number) => {
    return value !== undefined && !isNaN(value)
        ? new Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalDigits,
            maximumFractionDigits: decimalDigits,
        }).format(Number(value))
        : "-";
};

export const formatPercent = (value: any, decimalDigits: number) => {
    return value !== undefined && !isNaN(value)
        ? `${new Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalDigits,
            maximumFractionDigits: decimalDigits,
        }).format(Number(value) * 100)}%`
        : "-";
};
