const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElemet = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];

// UI Objesinin Başlatma
const ui = new UI();
//Storage Objesi Üret
const storage = new Storage();
// Tüm Eventleri Yükleme
eventlisteners();

function eventlisteners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);

}

function addFilm(e){

    const title = titleElement.value;
    const director = directorElemet.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        ui.displayMessages("Tüm Alanları Doldurun...","danger")
    }
    else {
        // yeni film
        const newFilm = new Film(title,director,url);
        
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm); //storage film ekleme
        ui.displayMessages("Film Başarıyla Eklendi..","success" );
        }

        ui.clearInputs(titleElement,urlElement,directorElemet);
    e.preventDefault();
}

function deleteFilm(e){
    if (e.target.id = "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme İşlemi Başarılı...","success");
    }
}
console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);