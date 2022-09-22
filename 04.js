/*
Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

    Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah DEWASA.
    Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah REMAJA.
    Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah BIMBINGAN ORANG TUA.
    Jika usia yang dimasukkan kurang dari 9, maka rating film adalah SEMUA USIA.
*/

const rating = (age) => {
    if (age >= 21) {
        console.log("Input: " + age + "\nOutput: DEWASA");
    } else if (age >= 13 && age < 21) {
        console.log("Input: " + age + "\nOutput: REMAJA");
    } else if (age >= 9 && age < 12) {
        console.log("Input: " + age + "\nOutput: BIMBINGAN ORANG TUA");
    } else {
        console.log("Input: " + age + "\nOutput: SEMUA USIA");
    }
} 

rating(15);
rating(32);