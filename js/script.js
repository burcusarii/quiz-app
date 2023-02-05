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

// Quiz için obje yapısı oluşturuldu. obje içerisine eklenen dizi ve index numarası tanımlanarak sırayla dizinin elemanlarının eklenmesi sağlandı.
function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}

//Quiz içerisinde soruGetir prototype'ı eklendi.
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

// oluşturulan quiz obje yapısı kullanılarak sorular dizisi ile birlikte bir obje oluşturuldu.
const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function () {
  document.querySelector(".quiz-card").classList.add("active");
  soruGoster(quiz.soruGetir()); // start butonuna tıklandığında sorugetir fonksiyonu calıstırıldı. Fonksiyon içerisinde soruIndex ilk başta sıfır olarak tanımlandığı için "sorular" dizininin 0 indexi olan 1. soru ekrana yazdırılır.
});

const quiz_content = document.querySelector(".quiz-content");
const quiz_answer = document.querySelector(".answer");

const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

document.querySelector(".next_btn").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz_content.innerHTML = " "; // daha önce eklenen sorunun html elemanlarının silinmesi için content ve answer elemanlarının için sıfırlanır.
    quiz_answer.innerHTML = " ";
    quiz.soruIndex += 1; // soruIndex'i 1 arttırılarak sorugetir fonksiyonu ile "sorular" dizini içinden bir sonraki indexteki eleman yani soru getirilmesi sağlanır.
    soruGoster(quiz.soruGetir());
    document.querySelector(".next_btn").classList.remove("show");
  } else {
    quiz_content.innerHTML = "<div class='quiz-end'>Quiz End</div>";
    quiz_answer.innerHTML = " ";
    document.querySelector(".next_btn").classList.remove("show");
  }
});

function soruGoster(soru) {
  // soru metni
  let question_div = document.createElement("div");
  question_div.classList.add("question");
  question_div.innerText = soru.soruMetni;
  quiz_content.appendChild(question_div);

  // cevap secenekleri
  for (let cevap in soru.cevapSecenekleri) {
    let option_b = document.createElement("span"); // a, b, c secenekleri için span.
    option_b.classList.add("option");
    option_b.innerText = cevap; // a, b, c secenekleri span içine yazıldı.
    let option = document.createElement("span"); // seçenekler için span.
    option.innerText = soru.cevapSecenekleri[cevap]; // secenekler a, b, c yanına yazıldı.
    let option_item = document.createElement("div");
    let options_div = document.createElement("div"); // opsiyonlar için div.
    options_div.classList.add("options");

    option_item.appendChild(option_b);
    option_item.appendChild(option);
    options_div.appendChild(option_item);
    quiz_answer.appendChild(options_div);
  }

  const option = quiz_answer.querySelectorAll(".options");
  for (let opt of option) {
    opt.addEventListener("click", function () {
      cevap = opt.querySelector("span").textContent;
      if (soru.cevabiKontrolEt(cevap)) {
        opt.classList.add("correct");
        opt.insertAdjacentHTML("beforeend", correctIcon);
        document.querySelector(".next_btn").classList.add("show");
      } else {
        opt.classList.add("incorrect");
        opt.insertAdjacentHTML("beforeend", incorrectIcon);
        document.querySelector(".next_btn").classList.add("show");
      }
      for (let i = 0; i < option.length; i++) {
        console.log(option);
        option[i].classList.add("disabled");
      }
    });
  }
}
