export const formatNumberToK = (number) => {
    if (Math.abs(number) >= 1e3) {
        // Divide by 1,000 and add the "K" suffix
        return (number / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        // No need for formatting, return the original number
        return number.toString();
    }
}