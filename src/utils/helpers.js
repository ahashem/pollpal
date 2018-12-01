const Helpers = {

  /**
   *
   * @param {Number|String} number
   * @param {Number|String} total
   * @return {Number}
   */
  calculatePercentage(number, total) {
    if (total !== 0) {
      return ((number / total) * 100).toFixed(2);
    }
    return 0;
  },
};

export default Helpers
