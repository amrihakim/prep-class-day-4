// Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.

const leapYear = (year) => {
    if (year % 400 === 0) {
        console.log("Input: " + year + "\nOutput: Kabisat");
    } else if (year % 100 === 0) {
        console.log("Input: " + year + "\nOutput: Bukan Kabisat");
    } else if (year % 4 === 0) {
        console.log("Input: " + year + "\nOutput: Kabisat");
    } else {
        console.log("Input: " + year + "\nOutput: Bukan Kabisat");
    }
}

leapYear(1900);
leapYear(2000);
leapYear(2001);
leapYear(2016);