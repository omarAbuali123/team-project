/* استيراد عده وظائف من فير بيس    */
import {
  auth, //the same getAuth(app) but this in variable
  database, //the same getDatabase(app) but this in variable
  reference, //the same ref but this in variable
  addData, //the same set but this in variable
  retrieveData, //the same onValue but this in variable
  query,
} from "../../Firebase-config/firebase-config.js";

function getSecondMovies() {
  const moviesRefSecond = reference(database, "Movies/");/*مكان الافلام لي بلفير بيس */
  retrieveData(moviesRefSecond, (snapshot) => {  /*retrieveData لجلب البيانات  */
    if (snapshot.exists()) {/*اذا موجوده تحول object */
      const moviesDataSecond = snapshot.val();
      for (let i = 4; i <= 11; i++) {
        createMovieCardSecond(moviesDataSecond[i]);/*ينشئ كارد  */
      }
    } else {
      console.log("No data available");/*في حال لا يوجد بيانات*/
    }
  });
}
getSecondMovies();

function createMovieCardSecond(movie) {
  console.log(movie);
  let containerSecond = document.getElementById("group2");
  const cardSecond = document.createElement("div");/*انشات div */
  cardSecond.classList.add("card");/*ضفت كارد داخلو */
  /* هون بتعين محتوه html داخل العنصر  */
  cardSecond.innerHTML = ` 
        <p class="title">${movie.name}</p>
        <div class="poster" style="background-image: url('${movie.imageVertical}'); background-size: cover;
        background-position: center;>
            <div class="reaction">
                <i class="fas fa-play play"></i>
            </div>
        </div>
        <div class="info">
            <div class="clock">
                <i class="fa-solid fa-clock clock"></i>
                <p class="time">${movie.duration}</p>
            </div>
            <div class="genre">${movie.genre}</div>
        </div>
    `;
  containerSecond.appendChild(cardSecond);/*تضيف العنصر الجديد */
  cardSecond.style.backgroundImage = "movie.imageVertical";/**خلفيه العنصر */
  cardSecond.addEventListener("click", () => { /*من تضغط على تخزن اسم الفلم  */
    sessionStorage.setItem("Name-Movie", movie.name); /*تنقلك لصفحه تفاصيل الفلم */
    window.location.href = `http://127.0.0.1:5500/Pages/Movie-Details-Page/Movie-Details.html`;
  });
  return cardSecond;
}



/*  وامكانيه تعرض تفاصيل الفلمhtmlبختصار لكود يحمل بيانات لافلام من فير بيس وتعرضها ب  */