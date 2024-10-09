<script setup>
import { ref } from 'vue'

const products = ref([
    {
        id: 1,
        name: 'Kaiba Corporation Deckbox',
        price: 15.99,
        description: 'A sleek, blue deckbox with the Kaiba Corporation logo.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/6/6b/SliferDeckBox.jpg'
    },
    {
        id: 2,
        name: 'Millennium Puzzle Deckbox',
        price: 12.99,
        description: 'A deckbox featuring the Millennium Puzzle from Yugi’s adventures.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/6/6b/SliferDeckBox.jpg'
    },
    {
        id: 3,
        name: 'Blue-Eyes White Dragon Deckbox',
        price: 16.99,
        description: 'Protect your deck with the power of Blue-Eyes White Dragon.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/6/6b/SliferDeckBox.jpg'
    },
    {
        id: 4,
        name: 'Dark Magician Deckbox',
        price: 14.99,
        description: 'A Dark Magician-themed deckbox for fans of Yugi’s signature card.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/2/2b/DarkMagicianDeckBox.jpg'
    },
    {
        id: 5,
        name: 'Slifer the Sky Dragon Deckbox',
        price: 17.99,
        description: 'A premium deckbox featuring Slifer the Sky Dragon.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/6/6b/SliferDeckBox.jpg'
    },
    {
        id: 6,
        name: 'Exodia the Forbidden One Deckbox',
        price: 19.99,
        description: 'The ultimate deckbox featuring Exodia the Forbidden One.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/6/6b/SliferDeckBox.jpg'
    },
    {
        id: 7,
        name: 'Obelisk the Tormentor Deckbox',
        price: 18.99,
        description: 'A sturdy deckbox featuring Obelisk the Tormentor.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/6/6b/SliferDeckBox.jpg'
    },
    {
        id: 8,
        name: 'Red-Eyes Black Dragon Deckbox',
        price: 15.49,
        description: 'Show your love for Joey Wheeler with this Red-Eyes Black Dragon deckbox.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/1/1b/RedEyesDeckBox.jpg'
    },
    {
        id: 9,
        name: 'Yu-Gi-Oh! Logo Deckbox',
        price: 13.99,
        description: 'A simple yet stylish deckbox with the Yu-Gi-Oh! logo.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/6/6b/SliferDeckBox.jpg'
    },
    {
        id: 10,
        name: 'Toon World Deckbox',
        price: 14.99,
        description: 'A fun Toon World deckbox for fans of Pegasus and his Toon monsters.',
        imageURL: 'https://static.wikia.nocookie.net/yugioh/images/0/04/ToonWorldDeckBox.jpg'
    }
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
