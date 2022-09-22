/*
Buatlah script untuk menentukan suatu nilai dengan ketentuan berikut:

Jika nilai yang dimasukkan lebih besar dan sama dengan 90 maka output yang keluar adalah A.
Jika nilai yang dimasukkan lebih besar dan sama dengan 80; dan lebih kecil dan sama dengan 89, maka output yang keluar adalah B.
Jika nilai yang dimasukkan lebih besar dan sama dengan 70; dan lebih kecil dan sama dengan 79, maka output yang keluar adalah C.
Jika nilai yang dimasukkan lebih besar dan sama dengan 60; dan lebih kecil dan sama dengan 69, maka output yang keluar adalah D.
Jika nilai yang dimasukkan lebih kecil dan sama dengan 59 maka output yang keluar adalah E.
*/

const grade = (num) => {
    if (num >= 90) {
        console.log("Input: " + num + "\nOutput: A");
    } else if (90 > num && num >= 80) {
        console.log("Input: " + num + "\nOutput: B");
    } else if (80 > num && num >= 70) {
        console.log("Input: " + num + "\nOutput: C");
    } else if (70 > num && num >= 60) {
        console.log("Input: " + num + "\nOutput: D");
    } else {
        console.log("Input: " + num + "\nOutput: E");
    }
}

grade(30);
grade(75);