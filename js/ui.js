function UI() {
    this.btn_start = document.querySelector(".start_btn"),
    this.btn_next = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".replay_btn"),
    this.btn_quit = document.querySelector(".quit_btn"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
    this.quiz_content = document.querySelector(".quiz-content"),
    this.quiz_answer = document.querySelector(".answer")
}

UI.prototype.soruGoster = function(soru) {
    // soru metni
    let question_div = document.createElement("div");
    question_div.classList.add("question");
    question_div.innerText = soru.soruMetni;
    ui.quiz_content.appendChild(question_div);
  
    // cevap secenekleri
    for (let cevap in soru.cevapSecenekleri) {
      let option_b = document.createElement("span"); // a, b, c secenekleri için span.
      option_b.classList.add("option");
      option_b.innerText = cevap; // a, b, c secenekleri span içine yazıldı.
      let option_span = document.createElement("span"); // seçenekler için span.
      option_span.innerText = soru.cevapSecenekleri[cevap]; // secenekler a, b, c yanına yazıldı.
      let option_item = document.createElement("div");
      let options_div = document.createElement("div"); // opsiyonlar için div.
      options_div.classList.add("options");
  
      option_item.appendChild(option_b);
      option_item.appendChild(option_span);
      options_div.appendChild(option_item);
      ui.quiz_answer.appendChild(options_div);
    }
  
  
    // tıklanan cevabın doğruluk kontrolü
    const option = ui.quiz_answer.querySelectorAll(".options");

    for (let opt of option) {
      opt.addEventListener("click", function () {
        cevap = opt.querySelector(".option").textContent;
        if (soru.cevabiKontrolEt(cevap)) {
          quiz.dogruCevapSayisi += 1;
          opt.classList.add("correct");
          opt.insertAdjacentHTML("beforeend", ui.correctIcon);
          ui.btn_next.classList.add("show");
        } else {
          opt.classList.add("incorrect");
          opt.insertAdjacentHTML("beforeend", ui.incorrectIcon);
          ui.btn_next.classList.add("show");
        }
        for (let i = 0; i < option.length; i++) {
          option[i].classList.add("disabled");
        }
      });
    }
  }

UI.prototype.soruSayisiniGoster = function(SoruSayisi, ToplamSoru) {
    const tag = `<span class="question_index_item">${SoruSayisi}/${ToplamSoru}</span>`;
    document.querySelector(".question_index").innerHTML = tag;
  }


UI.prototype.skoruGoster = function(SoruSayisi, DogruCevap) {
  const tag = `Toplam ${SoruSayisi} sorudan ${DogruCevap} doğru cevap verdiniz.`;
  document.querySelector(".score_card .score_text").innerHTML = tag;
}