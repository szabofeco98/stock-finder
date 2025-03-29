export const getCurrencyFormatter = (currency: string): Intl.NumberFormat | undefined => {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return;
  }
};

export const getCurrentCurrencySymbol = (currency: string): string => {
  const formatter = getCurrencyFormatter(currency);
  if (!formatter) return '';

  const parts = formatter.formatToParts(0);
  const currencySymbol = parts.find((part) => part.type === 'currency')?.value;
  return currencySymbol || '';
};
