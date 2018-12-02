const Helpers = {

  /**
   *
   * @param {Number|string} number
   * @param {Number|string} total
   * @return {Number|string}
   */
  calculatePercentage(number, total) {
    if (total !== 0) {
      return ((number / total) * 100).toFixed(2);
    }
    return 0;
  },

  /**
   *
   * @param {string|Date} date
   * @return {string}
   */
  formatDate(date) {
    const newDate = new Date(date);
    if (newDate !== 'Invalid Date') {
      return newDate.toLocaleString('en-us', { day: 'numeric', month: 'short', year: 'numeric' });
    }
    return date;
  },

  /**
   * Simple Array sum reducer that returns the Sum of all `key` values in Array elements
   * @param {Array} array
   * @param {string} key
   * @return {Number|string}
   */
  reduceSum(array, key) {
    return array.reduce((acc, curr) => acc + curr[`${key}`], 0);
  }
};

export default Helpers
