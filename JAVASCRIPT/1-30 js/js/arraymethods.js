// array -> string, number, objek, function, campuran

let nilai = [
    {nama : "budi", ipa:90, bhs:70, mtk:70},
    {nama : "joni", ipa:80, bhs:90, mtk:60},
    {nama : "tejo", ipa:75, bhs:70, mtk:90},
    {nama : "siti", ipa:90, bhs:80, mtk:90},
]

let nama = ["budi", "joni", "tejo", "siti"];
// nama.push("ani", "roma");

// console.log(nama.shift());

// nama.unshift("bobi", "roki");

// console.log(nama.slice(0, 3));

let mapel = ["ipa", "bhs", "mtk"];

// console.log(nama.concat(mapel));

// console.log(nama.concat(['ips', 'pkn', 'sejarah']));

// console.log(nama.splice(5, 2));

// console.log(nama.pop());

// console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
// }

// nama.forEach(function (a) {
//     console.log(a);
// })

// nama.forEach(a => console.log(a));

// nilai.filter (function (a) {
//     if (a.ipa > 80) {
//         console.log(a);
//     }
// })

// console.log(nilai);

// nilai.filter((a) => (a.ipa > 80 && a.mtk > 80 ? 
//     console.log(a.nama) : null));

// let siswa = nilai.map(function (a) {
//     return a.nama;
// })

// let siswa = nilai.map((a) => [a.nama, a.ipa, a.bhs]);
// console.log(siswa);

// mapel.sort();
// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.ipa);
// },0 )

let hasil = nilai.reduce((a,b) => (a += b.bhs), 0);

console.log(hasil);
