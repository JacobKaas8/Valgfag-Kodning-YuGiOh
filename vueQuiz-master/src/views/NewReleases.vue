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





    <div class="content-section">
        <div class="content-item">
            <div class="content-image">
                <img src="/billederopg/yu-gi-oh-monsters-chronicle-vol-3-figures.webp" alt="Image 1">
            </div>
            <div class="content-text">
                <h2>New figures released</h2>
                <p>Check de nyeste Yugioh figurer fra Konami.</p>
            </div>
        </div>

        <div class="content-item reverse">
            <div class="content-image">
                <img src="/billederopg/yu-gi-oh-world-championships-2023-master-duel-winner-trophy-lift.webp" alt="Image 2">
            </div>
            <div class="content-text">
                <h2>Worlds winner 2024</h2>
                <p>Der blev kronet en ny mester i yugioh tcg 2024. Læs om xxx`s bedrifter samt hans næste mål</p>
            </div>
        </div>
        <div class="content-item">
            <div class="content-image">
                <img src="/billederopg/booster_2020-20201_row.jpg" alt="Image 1">
            </div>
            <div class="content-text">
                <h2>Nye pack releases</h2>
                <p>Se hvad de nye pakker indeholder</p>
            </div>
        </div>

        <div class="content-item reverse">
            <div class="content-image">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-Q8maGolbNs" title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>

            </div>
            <div class="content-text">
                <h2>Gense Yugioh Worlds Finalen 2024</h2>
                <p>Se den dramatiske duel mellem Penaranda og Solis</p>
            </div>
        </div>
        <div class="content-item">
            <div class="content-image">
                <img src="/billederopg/WCS_2024_Thumbnail.webp" alt="Image 1">
            </div>
            <div class="content-text">
                <h2>Heading 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>
        </div>

        <div class="content-item reverse">
            <div class="content-image">
                <img src="/billederopg/newcards.jpg" alt="Image 2">
            </div>
            <div class="content-text">
                <h2>Heading 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

    </div>



</template>

<style scoped>

.content-image iframe {
    width: 100%;
    height: 300px;
}

.content-section {
    display: flex;
    flex-direction: column;
    gap: 100px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.content-item {
    display: flex;
    align-items: center;
    gap: 20px;
}

.content-item.reverse {
    flex-direction: row-reverse;
}

.content-image {
    flex: 1; /* Make sure the image container takes equal space */
    max-width: 50%; /* Image width limited to half of the container */
}

.content-image img {
    width: 100%; /* Ensure the image takes the full width of its container */
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: add some shadow to images */
}

.content-text {
    flex: 1; /* Make sure text container takes equal space */
    max-width: 50%; /* Text width limited to half of the container */
    color: #dddddd;
}

@media (max-width: 768px) {
    .content-item {
        flex-direction: column;
        text-align: center;
    }

    .content-item.reverse {
        flex-direction: column; /* columns ovenpå hinanden */
    }

    .content-image, .content-text {
        max-width: 100%; /* fuld størrelse på små skærme */
    }
}


</style>
