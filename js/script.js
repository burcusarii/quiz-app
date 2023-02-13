const ui = new UI();
ui.btn_start.addEventListener("click", function () {
  document.querySelector(".quiz-card").classList.add("active");
  ui.soruGoster(quiz.soruGetir()); // start butonuna tıklandığında sorugetir fonksiyonu calıstırıldı. Fonksiyon içerisinde soruIndex ilk başta sıfır olarak tanımlandığı için "sorular" dizininin 0 indexi olan 1. soru ekrana yazdırılır.
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);

});



// sıradaki soruyu gösterme
ui.btn_next.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    ui.quiz_content.innerHTML = " "; // daha önce eklenen sorunun html elemanlarının silinmesi için content ve answer elemanlarının için sıfırlanır.
    ui.quiz_answer.innerHTML = " ";
    quiz.soruIndex += 1; // soruIndex'i 1 arttırılarak sorugetir fonksiyonu ile "sorular" dizini içinden bir sonraki indexteki eleman yani soru getirilmesi sağlanır.
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
  } else {
    ui.quiz_content.innerHTML = "<div class='quiz-end'>Quiz End</div>";
    ui.quiz_answer.innerHTML = " ";
    ui.btn_next.classList.remove("show");
    document.querySelector(".question_index").style.display = "none";
  }
});
