// sorular için bir obje yapısı oluşturuldu.
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}
// cevabıKontrolEt fonksiyonu Soru constructor'ına prototype olarak eklendi. böyleklikle her soru objesinde tekrar çağırılması engellendi.
Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

// oluşturulan obje yapısı ile birden fazla soru "sorular" dizisi içine tanımlandı.
let sorular = [
  new Soru(
    "Hangisi JavaScript Paket Yönetim Uygulamasıdır?",
    { a: "node.js", b: "Typescript", c: "npm", d: "Nuget" },
    "c"
  ),
  new Soru(
    "Hangisi .net Paket Yönetim Uygulamasıdır?",
    { a: "node.js", b: "Nuget", c: "npm" },
    "b"
  ),
  new Soru("Hangisi yenir?", { a: "elma", b: "masa", c: "telefon" }, "a"),
  new Soru("hangisi yenmez?", { a: "çilek", b: "muz", c: "telefon" }, "c"),
];