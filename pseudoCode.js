function soalno1() {
  let x;
  for (x = 50; x <= 100; x++) {
    if (x <= 60) {
      document.write(`${x} KURANG, `);
    } else if (x <= 70) {
      document.write(`${x} CUKUP, `);
    } else if (x <= 80) {
      document.write(`${x} BAIK, `);
    } else if (x > 80) {
      document.write(`${x} LUAR BIASA, `);
    }
  }
}

function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

function soalno2() {
  let x;
  for (x = 1; x <= 20; x++) {
    document.write(`${fibonacci(x)}, `);
  }
}

function soalno3(i) {
  for (let y = 1; y <= i; y++) {
    for (let x = 1; x <= i; x++) {
      if (x <= y) {
        document.write("* ");
      } else {
        document.write(" ");
      }
    }
    document.write("<br>");
  }
}

function pembilang(nilai) {
  nilai = Math.abs(nilai);
  var simpanNilaiBagi = 0;
  var huruf = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
    "Sepuluh",
    "Sebelas",
  ];
  var temp = "";

  if (nilai < 12) {
    temp = " " + huruf[nilai];
  } else if (nilai < 20) {
    temp = pembilang(nilai - 10) + " Belas";
  } else if (nilai < 100) {
    simpanNilaiBagi = Math.floor(nilai / 10);
    temp = pembilang(simpanNilaiBagi) + " Puluh" + pembilang(nilai % 10);
  } else if (nilai < 200) {
    temp = " Seratus" + pembilang(nilai - 100);
  } else if (nilai < 1000) {
    simpanNilaiBagi = Math.floor(nilai / 100);
    temp = pembilang(simpanNilaiBagi) + " Ratus" + pembilang(nilai % 100);
  } else if (nilai < 2000) {
    temp = " Seribu" + pembilang(nilai - 1000);
  } else if (nilai < 1000000) {
    simpanNilaiBagi = Math.floor(nilai / 1000);
    temp = pembilang(simpanNilaiBagi) + " Ribu" + pembilang(nilai % 1000);
  } else if (nilai < 1000000000) {
    simpanNilaiBagi = Math.floor(nilai / 1000000);
    temp = pembilang(simpanNilaiBagi) + " Juta" + pembilang(nilai % 1000000);
  } else if (nilai < 1000000000000) {
    simpanNilaiBagi = Math.floor(nilai / 1000000000);
    temp =
      pembilang(simpanNilaiBagi) + " Miliar" + pembilang(nilai % 1000000000);
  } else if (nilai < 1000000000000000) {
    simpanNilaiBagi = Math.floor(nilai / 1000000000000);
    temp =
      pembilang(nilai / 1000000000000) +
      " Triliun" +
      pembilang(nilai % 1000000000000);
  }

  return temp;
}

function soalno4(x = 2000) {
  document.write(x + " ( " + pembilang(x) + " )");
}

document.write("<h1>Jawaban Soal Pseudo Code</h1>");

document.write("<h2>SOAL NO 1</h2>");

soalno1();

document.write("<h2>SOAL NO 2</h2>");

soalno2();

document.write("<h2>SOAL NO 3</h2>");

// ubah nilai 1 disini
var nilai1 = 3;

soalno3(nilai1);

document.write("<h2>SOAL NO 4</h2>");

// ubah nilai 2 disini
var nilai2 = 2234;

soalno4(nilai2);
