 
        
        
         
         

         $(document).ready(function() {
        
            var data = getTestData(); 
            createDataListHtml(data);
        
            const cards = document.querySelectorAll('.card');
         cards.forEach(card => {
             card.addEventListener('click', () => {
                 const formElements = card.querySelectorAll('.form-control');
                 let cardInfo = '';
                 formElements.forEach(element => {
                     cardInfo += `${element.previousElementSibling.innerText}: ${element.value}\n`;
                 });
                 alert("Şimdilik Detay Yok !");
             });
         });

        });
        
        function goToDetails(date){
            var data = getTestData();
            var filteredData;
            for(let i = 0 ; i< data.length ; i++){
            if(data[i].Date == date){
                filteredData = data[i];
                break; 
            }
        }
    
                
        }
        function getTestData(){
            var data = [
                {
                    Date: "20.08.2023",
                    Lesson: [
                        { Saat_1: "13:30", Saat_2: "14:45", Ders: "Matematik", Konu: "Temel Sayılar" },
                        { Saat_1: "15:30", Saat_2: "15:45", Ders: "Türkçe", Konu: "Ses Bilgisi" }
                    ]
                },
                {
                    Date: "21.08.2023",
                    Lesson: [
                        { Saat_1: "8:45", Saat_2: "10:00", Ders: "Fizik", Konu: "Olasılık" },
                        { Saat_1: "10:15", Saat_2: "11:00", Ders: "Matematik", Konu: "Ses Bilgisi" }
                    ]
                },
                {
                    Date: "22.08.2023",
                    Lesson: [
                        { Saat_1: "9:00", Saat_2: "10:15", Ders: "Kimya", Konu: "Maddenin Yapısı" },
                        { Saat_1: "11:30", Saat_2: "12:45", Ders: "Biyoloji", Konu: "Hücre Bölünmesi" },
                        { Saat_1: "14:00", Saat_2: "15:30", Ders: "Tarih", Konu: "Osmanlı İmparatorluğu" }
                    ]
                },
                {
                    Date: "23.08.2023",
                    Lesson: [
                        { Saat_1: "14:00", Saat_2: "15:30", Ders: "Edebiyat", Konu: "Divan Şiiri" },
                        { Saat_1: "16:00", Saat_2: "17:15", Ders: "Coğrafya", Konu: "İklim Tipleri" },
                        { Saat_1: "18:30", Saat_2: "19:45", Ders: "İngilizce", Konu: "Grammar" }
                    ]
                },
                {
                    Date: "24.08.2023",
                    Lesson: [
                        { Saat_1: "10:00", Saat_2: "11:15", Ders: "Matematik", Konu: "Üslü Sayılar" }
                    ]
                },
                {
                    Date: "25.08.2023",
                    Lesson: [
                        { Saat_1: "12:00", Saat_2: "13:15", Ders: "Kimya", Konu: "Kimyasal Tepkimeler" },
                        { Saat_1: "14:30", Saat_2: "15:45", Ders: "Fizik", Konu: "Elektrik Devreleri" },
                        { Saat_1: "16:30", Saat_2: "17:45", Ders: "Türkçe", Konu: "Dil Bilgisi" }
                    ]
                },
                {
                    Date: "26.08.2023",
                    Lesson: [
                        { Saat_1: "9:30", Saat_2: "10:45", Ders: "Biyoloji", Konu: "Genetik" }
                    ]
                },
                {
                    Date: "27.08.2023",
                    Lesson: [
                        { Saat_1: "11:00", Saat_2: "12:15", Ders: "Tarih", Konu: "İlkçağ Uygarlıkları" },
                        { Saat_1: "13:30", Saat_2: "14:45", Ders: "Edebiyat", Konu: "Roman Tahlili" },
                        { Saat_1: "15:30", Saat_2: "16:45", Ders: "Coğrafya", Konu: "Nüfus ve Göç" }
                    ]
                },
                {
                    Date: "28.08.2023",
                    Lesson: [
                        { Saat_1: "10:30", Saat_2: "11:45", Ders: "Fizik", Konu: "Kuvvet ve Hareket" },
                        { Saat_1: "13:00", Saat_2: "14:15", Ders: "Matematik", Konu: "Denklem Çözme" },
                        { Saat_1: "15:30", Saat_2: "16:45", Ders: "İngilizce", Konu: "Reading Skills" },
                        { Saat_1: "17:00", Saat_2: "18:15", Ders: "Türkçe", Konu: "Paragraf Analizi" }
                    ]
                },
                {
                    Date: "29.08.2023",
                    Lesson: [
                        { Saat_1: "9:00", Saat_2: "10:15", Ders: "Kimya", Konu: "Periyodik Cetvel" }
                    ]
                }
            ];
            return data;
        }
        
        function getCardTemplate(){
            var template = " <div class='card'>"
            +"       <div class='card-header'>                     "
            +"           @tarih                     "
            +"       </div>                                        "
            +"       <div class='card-body'>                       "
            +"               @lessons                                      "
            +"                                            "
            +"          <div style=\"float: left;color: #ff7e0b;padding-left: 20px;padding-top: 10px;\">Toplam 50 Soru</div>"
            +"          <button class=\"btn btn-primary\" style='float:right' onclick=\"goToDetails('@tarih')\">Detayları Gör</button>"  
            +"       </div>                                        "
            +"   </div>                                            "  ;

            return template;
        }

        function getLessonTemplate(){
            var template =  "           <div class='lesson'>                      "
                +"               <p><strong>@hour1 - @hour2</strong></p> "
                +"               <p>@lesson - @subject</p>       "
                +"           </div>                                    ";

                return template;
        }
        function createCard(data){
        
        // data = {Date : "20.08.2023" , Data : 
        // [{ Saat_1 : "13:30" , Saat_2 : "14:45" , Ders : "TYTMAT" , Konu : "Temel Sayılar" } , 
        // { Saat_1 : "15:30" , Saat_2 : "15:45" , Ders : "TYTTUR" , Konu : "Ses Bilgisi" }]};
        
        var lessons = "";
        var lessonTemplate = getLessonTemplate();
        var cardTemplate = getCardTemplate();
        for(let i = 0 ; i< data.Lesson.length ; i++){
            var les = lessonTemplate.replace(/@hour1/g, data.Lesson[i].Saat_1);
            les = les.replace(/@hour2/g, data.Lesson[i].Saat_2);
            les = les.replace(/@lesson/g, (data.Lesson[i].Ders));
            les = les.replace(/@subject/g, (data.Lesson[i].Konu));

            lessons += les;
        }

        var card = cardTemplate.replace(/@tarih/g, data.Date);
        card = card.replace(/@lessons/g,lessons);
        // console.log(card);
        return card;
        }
        
        function createDataListHtml(data){
            var str = "";
        for(let i = 0 ; i< data.length ; i++){
            str += createCard(data[i]);

            if(i-1 <data.length){
                str += "<div class='separator'></div>";
            }
        }
        
        var mainContent = document.getElementById("mainContent");
        mainContent.innerHTML += str;
        }


       