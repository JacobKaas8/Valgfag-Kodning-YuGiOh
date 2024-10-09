<script setup>
import { ref } from 'vue'

const products = ref([
    {
        id: 1,
        name: 'Yu-Gi-Oh! Duel Disk Replica',
        price: 49.99,
        description: 'A high-quality replica of the iconic Duel Disk used by Yugi and Kaiba.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
    {
        id: 2,
        name: 'Millennium Puzzle Necklace',
        price: 19.99,
        description: 'Wear the Millennium Puzzle like Yugi with this stylish necklace.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
    {
        id: 3,
        name: 'Blue-Eyes White Dragon Statue',
        price: 129.99,
        description: 'A detailed statue of Kaiba’s favorite monster, the Blue-Eyes White Dragon.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
    {
        id: 4,
        name: 'Dark Magician Girl Figure',
        price: 79.99,
        description: 'A collector’s figure of Dark Magician Girl, perfect for fans of the series.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
    {
        id: 5,
        name: 'Slifer the Sky Dragon Playmat',
        price: 24.99,
        description: 'A premium playmat featuring Slifer the Sky Dragon for serious duelists.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
    {
        id: 6,
        name: 'Yu-Gi-Oh! Kaiba Corporation Hoodie',
        price: 39.99,
        description: 'A comfortable hoodie featuring the Kaiba Corporation logo.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
    {
        id: 7,
        name: 'Exodia the Forbidden One Keychain',
        price: 9.99,
        description: 'Carry the power of Exodia with you everywhere with this keychain.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
    {
        id: 8,
        name: 'Kuriboh Plush',
        price: 14.99,
        description: 'An adorable plush of the fan-favorite monster, Kuriboh.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
    {
        id: 9,
        name: 'Yu-Gi-Oh! Card Binder',
        price: 29.99,
        description: 'A binder for storing and protecting your Yu-Gi-Oh! cards in style.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
    {
        id: 10,
        name: 'Obelisk the Tormentor T-shirt',
        price: 19.99,
        description: 'Show your love for Obelisk the Tormentor with this awesome T-shirt.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/c/ca/SliferPlaymat.png'
    },
])
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









    <div class="container my-5">
        <div class="row custom-row">
            <div v-for="product in products" :key="product.id" class="custom-col mb-4">
                <div class="card h-100 d-flex flex-column">
                    <img :src="product.imageURL" class="card-img-top" alt="Product Image">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ product.description }}</p>
                        <div class="mt-auto"> <!-- Pushes the price to the bottom -->
                            <p class="price-text">Price: ${{ product.price }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<style scoped>
.custom-row {
    display: flex;
    flex-wrap: wrap;
}

.custom-col {
    width: 20%; /* 1/5th of the row for 5 products */
    padding: 15px;
}

.card {
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: contain; /* Ensures the image fits inside the card without being cut off */
    border-bottom: 1px solid #ddd;
}

.card-body {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Ensures the content grows as needed */
    background-color: #f8f9fa; /* Light gray background for contrast */
    border-radius: 0 0 10px 10px; /* Rounds the bottom corners */
}

h5.card-title {

    margin-bottom: 10px;
    color: black; /* Custom color for the product name */



}

.card-text {
    font-size: 0.95rem; /* Smaller description */
    color: #333; /* Darker text */
    margin-bottom: 10px; /* Margin between description and price */
    flex-grow: 1; /* Allow the description to grow */
}

.price-text {
    font-size: 1.1rem; /* Slightly larger font for the price */
    font-weight: bold;
    color: black; /* Price in red */
    margin-top: auto; /* Ensures the price is pushed to the bottom */
}


</style>

