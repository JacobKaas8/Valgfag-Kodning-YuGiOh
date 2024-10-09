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
        <div class="search-bar">
            <input type="text" v-model="search" placeholder="Søg efter kort" />
        </div>
        <div class="cards-container">
            <div class="cards-grid">
                <div v-for="card in cards" :key="card.id" class="card" @click="selectCard(card)">
                    <div class="card-image">
                        <img :src="card.card_images[0].image_url" :alt="card.name" />
                    </div>
                    <div class="card-info">
                        <div class="card-name">{{ card.name }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card Details Modal -->
        <div v-if="selectedCard" class="card-details-modal">
            <div class="card-details">
                <button class="close-button" @click="closeCardDetails">X</button>
                <h2>{{ selectedCard.name }}</h2>
                <img :src="selectedCard.card_images[0].image_url" :alt="selectedCard.name" class="card-detail-image" />
                <p><strong>Type:</strong> {{ selectedCard.type }}</p>
                <p><strong>Description:</strong> {{ selectedCard.desc }}</p>
                <p v-if="selectedCard.atk !== undefined"><strong>ATK:</strong> {{ selectedCard.atk }}</p>
                <p v-if="selectedCard.def !== undefined"><strong>DEF:</strong> {{ selectedCard.def }}</p>
                <p v-if="selectedCard.level !== undefined"><strong>Level:</strong> {{ selectedCard.level }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, watch } from 'vue';

const search = ref('');
const cards = ref([]);
const selectedCard = ref(null); // Holds the selected card's details
const max = 20;

// Function to fetch cards from the API using the search term
const fetchCards = async () => {
    if (search.value.length < 2) {
        cards.value = [];
        return;
    }

    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${search.value.trim()}`;

    try {
        const response = await fetch(url);
        const json = await response.json();
        // Assigning only the matched cards (up to the max limit)
        cards.value = json.data ? json.data.slice(0, max) : [];
    } catch (error) {
        console.error('Error fetching cards:', error);
        cards.value = [];
    }
};

// Watch for changes in the search input and trigger fetching cards
watch(search, fetchCards);

// Function to select a card and show details
const selectCard = (card) => {
    selectedCard.value = card;
};

// Function to close the card details modal
const closeCardDetails = () => {
    selectedCard.value = null;
};
</script>

<style scoped>
.container {
    padding: 20px;
    background-color: #0d1b2a;
    border-radius: 5px;
}

.search-bar {
    display: flex;

}

.search-bar input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

.cards-container {
    max-height: 600px;
    overflow-y: auto;
    padding-right: 10px;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Increase the minimum size of the cards */
    gap: 20px;
}

.card {
    background-color: #1b263b;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    position: relative;
    transition: transform 0.2s;
    cursor: pointer;
}

.card:hover {
    transform: scale(1.05);
}

.card-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    max-height: 300px;
    object-fit: cover;
}

.card-info {
    margin-top: 10px;
    text-align: center;
}

.card-name {
    font-size: 20px;
    font-weight: bold;
}

/* Modal Styles */
.card-details-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
    overflow: hidden; /* stopper scrolling */
    padding: 20px;
}

.card-details {
    background: #1b263b;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    max-width: 500px;
    width: 100%;
    max-height: 80vh; /* begrænse højde */
    overflow-y: auto; /* internal scrol hvis der kommer for meget tekst */
    text-align: center;
    position: relative;
    box-sizing: border-box;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1100; /* lukke knap i top */
}

.card-detail-image {
    width: 100%;
    height: auto;
    max-height: 300px;
    margin-bottom: 20px;
    object-fit: contain;
}
</style>
