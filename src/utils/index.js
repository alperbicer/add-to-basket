export default {
  convertNumberToPrice(value) {
    const tryLocale = Intl.NumberFormat('tr-TR');
    return tryLocale.format(value) + ' TL';
  },
};