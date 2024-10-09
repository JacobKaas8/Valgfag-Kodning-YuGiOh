import {createRouter, createWebHistory} from 'vue-router';
import Forside from "@/views/Forside.vue";
import Decks from "@/views/Decks.vue";
import Butikker from "@/views/Butikker.vue";
import Sleeves from "@/views/Sleeves.vue";
import Deckboxes from "@/views/Deckboxes.vue";
import Misc from "@/views/Misc.vue";
import NewReleases from "@/views/NewReleases.vue";

import Search from "@/views/search.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "forside",
            component: Forside,
        },
        {
            path: "/decks",
            name: "decks",
            component: Decks,
        },
        {
            path: "/butikker",
            name: "butikker",
            component: Butikker,
        },
        {
            path: "/sleeves",
            name: "sleeves",
            component: Sleeves,
        },
        {
            path: "/deckboxes",
            name: "deckboxes",
            component: Deckboxes,
        },
        {
            path: "/misc",
            name: "misc",
            component: Misc,
        },
        {
            path: "/newreleases",
            name: "newreleases",
            component: NewReleases,
        },
        {
            path: "/search",
            name: "search",
            component: Search,
        },





    ]
})

export default router;