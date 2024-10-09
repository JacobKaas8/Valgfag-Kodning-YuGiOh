<script setup>





</script>

<template>
    <nav class="navbar fixed-top navbar-expand-lg">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand" href="#"> <img src="/billederopg/Yu-Gi-Oh!.png" alt="Logo" width="70" height="24" class="d-inline-block align-text-top"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/search" class="nav-link active" aria-current="page" href="#">Søg</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/decks" class="nav-link active" aria-current="page" href="#">Decks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/butikker" class="nav-link active" href="#">Butikker</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Merch
                        </a>
                        <ul class="dropdown-menu">
                            <li> <router-link to="/sleeves" class="dropdown-item" href="#">Sleeves</router-link></li>
                            <li><router-link to="/deckboxes" class="dropdown-item" href="#">Deckboxes</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link to="/misc" class="dropdown-item" href="#">miscellaneous</router-link></li>
                        </ul>
                    </li>

                </ul>

            </div>
        </div>
    </nav>




    <div class="container">



        <div class="col mb-4">
            <router-link to="/search"> <div class="card">
                <img src="/billederopg/man-playing-yugioh-cards.jpg" class="card-img-top special-card" alt="yugioh cards">
                <div class="card-img-bottom-overlay">
                    <h5 class="card-title">Kort søger</h5>
                    <p class="card-text">Find og læs de forskellige kort</p>
                </div>
            </div> </router-link>
        </div>







        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <router-link to="/butikker"><div class="card">
                    <img src="/billederopg/events-05.webp" class="card-img-top fixed-height-img" alt="yugioh-event" >
                    <div class="card-img-bottom-overlay">
                        <h5 class="card-title">Find locals nær dig.</h5>
                        <p class="card-text">Find turneringer og kortbutikker i dit område.</p>
                    </div>
                </div></router-link>
            </div>
            <div class="col">
                <router-link to="/Decks">
                <div class="card">
                    <img src="/billederopg/erik-mclean-czMeCTUJe58-unsplash-1024x683.jpg" class="card-img-top fixed-height-img" alt="yugioh-godcards">
                    <div class="card-img-bottom-overlay">
                        <h5 class="card-title">Er gude kortene stadig brugbare i 2024?</h5>
                        <p class="card-text">Find nye og opdaterede decks, som indeholder de ikoniske gudekort</p>
                    </div>
                </div></router-link>
            </div>
            <div class="col">
                <a href="https://www.twitch.tv/officialyugiohtcg"> <div class="card ">
                    <img src="/billederopg/maxresdefault.jpg" class="card-img-top fixed-height-img" alt="yugioh-event" >
                    <div class="card-img-bottom-overlay">
                        <h5 class="card-title">Se YGO-WCS-2024 live</h5>
                    </div>
                </div></a>
            </div>
            <div class="col">
                <router-link to="/newreleases">
                <div class="card">
                    <img src="/billederopg/yu-gi-oh-world-championships-2023-master-duel-winner-trophy-lift.webp" class="card-img-top fixed-height-img" alt="yugioh champion">
                    <div class="card-img-bottom-overlay">
                        <h5 class="card-title">2024 YGO WC</h5>
                        <p class="card-text">Læs om Yugioh 2024 mesterskabet, og se hvilke decks som nåede top 8.</p>
                    </div>
                </div> </router-link>
            </div>
        </div>



        <div id="calorieContainer" class="row row-cols-auto justify-content-center g-4"></div>

    </div>
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/billederopg/neuron_logo_550x550.png" class="d-block w-100" alt="yugiohneuron">
                <div class="carousel-caption ">
                    <h5>Download den officielle Yu-Gi-Oh TCG support app!</h5>
                    <a href="https://www.konami.com/yugioh/neuron/en/?_gl=1*15hxq3f*_ga*MTQ4MzczNjI5NS4xNzI4MjMzNDE1*_ga_DSVT4C66K4*MTcyODIzNjc5Mi4yLjEuMTcyODIzNjkxMC4wLjAuMA.."> Download her </a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/billederopg/TCG_logo_500x500.png" class="d-block w-100" alt="...">
                <div class="carousel-caption ">
                    <h5>Hold dig opdateret med den officille banlist</h5>
                    <a href="https://www.yugioh-card.com/en/limited/list_2024-09-02/"> Se Listen </a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/billederopg/MD_logo_550-cr.png" class="d-block w-100" alt="...">
                <div class="carousel-caption ">
                    <h5>Spil med online i  Master Duel!</h5>
                    <a href="https://store.steampowered.com/app/1449850/YuGiOh_Master_Duel/"> Download MasterDuel </a>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>



<div class="container mt-4">

    <div class="row row-cols-3 justify-content-center g-4">
        <div class="col">
            <div class="card h-100">
               <router-link to="/NewReleases"> <img src="/billederopg/sixsam.jpg" class="card-img-top" alt="..."> </router-link>

            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <router-link to="/NewReleases">  <img src="/billederopg/Konami-Yu-Gi-Oh-OCG-Deck-Build-Pack-Wild-Survivors-Japanese-Single-Pack-Random-3_1200x.webp" class="card-img-top" alt="..."> </router-link>

            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <router-link to="/NewReleases"> <img src="/billederopg/new%20card.jpg" class="card-img-top" alt="..."> </router-link>

            </div>
        </div>

        <div class="col">
            <div class="card h-100">
                <router-link to="/NewReleases"> <img src="/billederopg/coatl.jpg" class="card-img-top" alt="..."> </router-link>

            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <router-link to="/NewReleases">  <img src="/billederopg/chimera.jpg" class="card-img-top" alt="..."> </router-link>

            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <router-link to="/NewReleases">  <img src="/billederopg/GFaPL_wXYAEvNMB.jpg" class="card-img-top" alt="..."> </router-link>

            </div>
        </div>

    </div>

    </div>

    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>





</template>

<style scoped>

.card {
    background-color: #1b263b;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}



.page-item .page-link {
    background-color: #21303D; /* Background color for pagination links */
    color: #FFFFFF; /* Text color for pagination links */
    border: 1px solid #FFFFFF; /* Border color for pagination links */
    padding: 0.5rem 0.75rem; /* Padding for the links */
    border-radius: 4px; /* Rounded corners for the links */
}
.page-item .page-link:hover {
    background-color: #FFD700; /* Change background color on hover */
    color: #21303D; /* Change text color on hover */
    border-color: #FFD700; /* Change border color on hover */
}





</style>