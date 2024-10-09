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
            <input type="text" v-model="searchQuery" placeholder="Søg efter kort/decks" />
        </div>
        <div class="cards-grid">
            <div v-for="card in filteredCards" :key="card.id" class="card">
                <div class="card-image">
                    <img :src="card.image" :alt="card.name" />
                </div>
                <div class="card-info">
                    <div class="card-tier" v-if="card.tier">Tier {{ card.tier }}</div>
                    <div class="card-name">{{ card.name }}</div>
                    <div class="card-new" v-if="card.isNew">NY</div>
                    <div class="card-count">{{ card.count }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            cards: [
                { id: 1, name: 'YUBEL', image: 'https://ms.yugipedia.com//0/05/Yubel-MADU-EN-VG-artwork.png', tier: 'S', count: 51, isNew: true },
                { id: 2, name: 'VOICESLESS VOICE', image: 'https://yugi.wiki/assets/card-arts/10774240.jpg', tier: 'A', count: 48, isNew: true },
                { id: 3, name: 'CENTUR-ION', image: 'https://ms.yugipedia.com//5/55/StandUpCenturIon-MADU-EN-VG-artwork.png', tier: 'A', count: 32, isNew: false },
                { id: 3, name: 'UMI', image: 'https://ms.yugipedia.com//b/bd/Umi-G002-JP-VG-artwork.png', tier: 'B', count: 20, isNew: false },
                { id: 3, name: 'UNCHAINED', image: 'https://images.ygoprodeck.com/images/cards_cropped/93084621.jpg', tier: 'B', count: 30, isNew: false },
                { id: 3, name: 'DARK MAGICIAN', image: 'https://i.pinimg.com/736x/f4/13/5b/f4135befc260d18ec66c5ac3c8666fc4.jpg', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'BLUE EYES', image: 'https://s1.zerochan.net/Blue-Eyes.White.Dragon.600.3967923.jpg', tier: 'D', count: 7, isNew: true },
                { id: 3, name: 'HERO', image: 'https://static.zerochan.net/Elemental.HERO.Flame.Wingman.1024.3137463.webp', tier: 'D', count: 5, isNew: false },
                { id: 3, name: 'CUBIC', image: 'https://static.zerochan.net/Vijam.the.Cubic.Seed.1024.2070058.webp', tier: 'D', count: 3, isNew: true },
                { id: 3, name: 'GOD SLIFER', image: 'https://static.zerochan.net/Slifer.the.Sky.Dragon.1024.2066732.webp', tier: 'D', count: 2, isNew: true },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: true },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: true },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: true },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: true },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: false },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: true },
                { id: 3, name: 'FILLER', image: 'https://static.wikia.nocookie.net/yugioh/images/7/7c/Umi-TF04-JP-VG.jpg/revision/latest?cb=20120622231658', tier: 'D', count: 10, isNew: true },

            ],
        };
    },
    computed: {
        filteredCards() {
            return this.cards.filter(card =>
                card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
};
</script>

<style scoped>
.container {
    padding: 20px;
    background-color: #0d1b2a;

}

.search-bar {
    display: flex;
    margin-bottom: 20px;

}

.search-bar input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
}

.card {
    background-color: #1b263b;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    color: #fff;
    position: relative;
}

.card-image {

    flex-shrink: 0;


}

.card-image img {
    width: 60px;
    height: 60px;
    border-radius: 5px;

}

.card-info {
    text-align: center; /* Center the text inside the info section */

}

.card-tier {
    background-color: #3e497a;
    color: #fff;
    padding: 2px 8px;
    border-radius: 3px;
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 12px;
    text-align: center;
    width: 80px;
    margin-left: auto; /* Centers the tier horizontally */
    margin-right: auto; /* Centers the tier horizontally */
}


.card-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.card-new {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #41A270;
    color: #fff;
    padding: 2px 8px;
    font-size: 12px;
    border-radius: 3px;
}

.card-count {
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
}
</style>
