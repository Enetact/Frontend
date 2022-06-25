const numberFormatterCache: Record<string, Intl.NumberFormat> = {};

export const getVanillaFormatter = (
  decimalCount: string | number = 2,
  decimal = '.',
  thousands = ',',
) => {
  const format = (amount: number | string) => {
    try {
      decimalCount = Math.abs(decimalCount as number);
      decimalCount = Number.isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? '-' : '';

      // eslint-disable-next-line radix
      amount = Math.abs(Number(amount) || 0).toFixed(decimalCount);
      const i = parseInt(amount, 10).toString();
      const j = i.length > 3 ? i.length % 3 : 0;

      return `$${
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
        (decimalCount
          ? decimal +
            Math.abs(Number(amount) - Number(i))
              .toFixed(decimalCount)
              .slice(2)
          : '')
      }`;
    } catch (e) {
      return 0;
    }
  };

  return { format };
};

export const getNumberFormatter = (fractionDigits: number | string) => {
  const instance = numberFormatterCache[fractionDigits];

  if (instance) {
    return instance;
  }

  let newInstance;

  // not cached, let's create and cache a suitable formatter
  if (!window.Intl || !window.Intl.NumberFormat) {
    // older safari
    newInstance = getVanillaFormatter(fractionDigits) as Intl.NumberFormat;
  } else {
    // every normal browser
    newInstance = new window.Intl.NumberFormat('en-US', {
      currency: 'USD',
      maximumFractionDigits: fractionDigits as number,
      minimumFractionDigits: fractionDigits as number,
      style: 'currency',
    });
  }

  numberFormatterCache[fractionDigits] = newInstance;

  return newInstance;
};

export const toUSD = (value: number | string, fractionDigits: number | string = 'auto') => {
  let decimalDigits: number | string = 2;

  // By default, set decimalDigits based on wether value is divisible by 1
  if (fractionDigits === 'auto') {
    if ((value as number) % 1 === 0) {
      decimalDigits = 0;
    }
  } else {
    decimalDigits = fractionDigits;
  }

  // return zero if value cannot be converted to a number
  if (!Number.isFinite(value)) {
    return 0;
  }

  const formatter = getNumberFormatter(decimalDigits);

  return formatter.format(value as number);
};
