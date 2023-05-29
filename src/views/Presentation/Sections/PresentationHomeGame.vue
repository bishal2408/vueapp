<script>
    import axios from "axios";
    import ExampleCard from "../Components/ExampleCard.vue";

    export default {
        name: 'PresentationHomeGame',

        data() {    
            return {
                list : [],
            }
        },

        async mounted() {
            let result = await axios.get("https://ramailogames.com/api/vendor/1666161571/game-list")
            this.list = result.data
        },

        components: { ExampleCard },

    }
</script>

<template>
    <div v-for="item in list.slice(0,8)" :key="item.id" class="col-md-3 mt-md-0 mt-5 w-18">
        <ExampleCard
            classes="shadow-lg"
            :title=item.name
            :image=item.logo
            route="game-detail"
            :slugs= item.slug
        />
    </div>
</template>