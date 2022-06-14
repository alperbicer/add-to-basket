export default {
  convertNumberToPrice(value) {
    const option = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    const tryLocale = Intl.NumberFormat('tr-TR', option);
    return tryLocale.format(value) + ' TL';
  },
  checkIsExistSelectedVariant(selectableVariantList, newSelectedVariantList) {
    return selectableVariantList
      .find((variant) => {
        return variant.attributes.every((attribute) => {
          return newSelectedVariantList.some((selectedVariant) => {
            return attribute.name === selectedVariant.title && attribute.value === selectedVariant.value;
          });
        });
      });
  },
};