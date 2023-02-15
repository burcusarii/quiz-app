// Quiz için obje yapısı oluşturuldu. obje içerisine eklenen dizi ve index numarası tanımlanarak sırayla dizinin elemanlarının eklenmesi sağlandı.
function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
    this.dogruCevapSayisi = 0;
  }
  
  //Quiz içerisinde soruGetir prototype'ı eklendi.
  Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
  };
  
  // oluşturulan quiz obje yapısı kullanılarak sorular dizisi ile birlikte bir obje oluşturuldu.
  const quiz = new Quiz(sorular);