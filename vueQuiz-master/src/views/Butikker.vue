<script setup>
import { ref, onMounted } from 'vue';

const userLocation = ref(null);
const stores = ref([
    { lat: 55.6761, lng: 12.5683, name: 'Yu-Gi-Oh! Store Copenhagen' },
    { lat: 55.6419, lng: 12.0878, name: 'Yu-Gi-Oh! Store Roskilde' },
    { lat: 55.4026, lng: 11.3545, name: 'Yu-Gi-Oh! Store Slagelse' },
    { lat: 56.0308, lng: 12.5921, name: 'Yu-Gi-Oh! Store Helsingør' },
    { lat: 55.2296, lng: 11.7609, name: 'Yu-Gi-Oh! Store Næstved' },
]);
const map = ref(null);

function initMap() {
    if (userLocation.value) {
        map.value = new google.maps.Map(document.getElementById('map'), {
            center: userLocation.value,
            zoom: 12,
        });

        // Custom user location icon
        const userIcon = {
            url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', // bruger url
        };

        // markør for brugeren
        new google.maps.Marker({
            position: userLocation.value,
            map: map.value,
            title: 'You are here',
            icon: userIcon, //
        });

        // yugioh butik markør
        const storeIcon = {
            url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', // URL for store icon
        };

        //
        stores.value.forEach(store => {
            new google.maps.Marker({
                position: { lat: store.lat, lng: store.lng },
                map: map.value,
                title: store.name,
                icon: storeIcon, // Set custom icon for stores
            });
        });
    }
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation.value = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                initMap();
            },
            () => {
                alert('Unable to retrieve your location.');
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function loadGoogleMapsScript() {
    return new Promise((resolve, reject) => {
        if (typeof google !== 'undefined') {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCP8kvnGO8WqE1nm53-d_10x0vMKANjGQI`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

onMounted(() => {
    loadGoogleMapsScript().then(() => {
        getUserLocation();
    });
});
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


    <div style="display: flex; justify-content: center; align-items: center;">
        <div id="map" ref="map" style="height: 89vh; width: 90%;"></div>
    </div>
</template>

<style scoped>

</style>
