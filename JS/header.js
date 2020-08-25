// header template================================================
document.querySelector("header").innerHTML = `
        
        
        
        <a href="./index.html">
            <div class="logo"></div>
        </a>
        <div class="hamburger">
            <div class="ham ham_top"></div>
            <div class="ham ham_middle"></div>
            <div class="ham ham_bottom"></div>
        </div>
        <div class="vertical_navs">
            <div><a href="./index.html" id="vertical_nav_index">首頁</a></div>
            <hr class="vertical_navs_hr">
            <div><a href="./Service.html" id="vertical_nav_service">服務內容</a></div>
            <hr class="vertical_navs_hr">
            <div><a href="./Album.html" id="vertical_nav_album">精選作品</a></div>
            <hr class="vertical_navs_hr">
            <div><a href="./Aboutus.html" id="vertical_nav_aboutus">關於我們</a></div>
            <hr class="vertical_navs_hr">
            <div><a href="./Customer.html" id="vertical_nav_customer">訂單資訊</a></div>
        </div>
        <nav>
            <div><a href="./index.html" id="nav_index">首頁</a></div>
            <div><a href="./Service.html" id="nav_service">服務內容</a></div>
            <div><a href="./Album.html" id="nav_album">精選作品</a></div>
            <div><a href="./Aboutus.html" id="nav_aboutus">關於我們</a></div>
            <div><a href="./Customer.html" id="nav_customer">訂單資訊</a></div>
        </nav>
`;
// community_selection======================================================================
document.querySelector(".community_selection").onclick = () => {
  document
    .querySelector(".community_list")
    .classList.toggle("community_list_active");
};

// vertical_navs=================================================
document.querySelector(".hamburger").onclick = () => {
  document
    .querySelector(".vertical_navs")
    .classList.toggle("vertical_navs_active");
  document.querySelector(".hamburger").classList.toggle("active");
};

// active button=================================================
// $("nav div a").mouseup(function () {
//   $(this).addClass("activeNav");
// });
