// sorular için bir obje yapısı oluşturuldu.
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

// oluşturulan obje yapısı ile sorular tanımlandı.
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

// Quiz için obje yapısı oluşturuldu.
function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

// oluşturulan obje yapısı kullanılarak bir quiz hazırlandı;
const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    document.querySelector(".quiz-card").classList.add("active");
    soruGoster(quiz.soruGetir());
    console.log(quiz.soruGetir());
    quiz.soruIndex += 1;
  } else {
    console.log("Quiz Bitti!");
  }
});

const quiz_content = document.querySelector(".quiz-content");
const quiz_answer = document.querySelector(".answer");

function soruGoster(soru) {
  // soru metni
  let question_div = document.createElement("div");
  question_div.classList.add("question");
  question_div.innerText = soru.soruMetni;
  quiz_content.appendChild(question_div);

  // cevap secenekleri
  for (let cevap in soru.cevapSecenekleri) {
    console.log(cevap);
    console.log(soru.cevapSecenekleri[cevap]);
    let option_b = document.createElement("span"); // a, b, c secenekleri için span.
    option_b.classList.add("options");
    option_b.innerText = cevap; // a, b, c secenekleri span içine yazıldı.
    let option = document.createElement("span"); // seçenekler için span.
    option.innerText = soru.cevapSecenekleri[cevap]; // secenekler a, b, c yanına yazıldı.
    let options_div = document.createElement("div"); // opsiyonlar için div.
    options_div.classList.add("option");

    options_div.appendChild(option_b);
    options_div.appendChild(option);
    quiz_answer.appendChild(options_div);
  }
}
