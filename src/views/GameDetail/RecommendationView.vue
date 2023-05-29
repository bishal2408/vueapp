<script>
    import ExampleCard from '../Presentation/Components/ExampleCard.vue';

    export default {
        components: { ExampleCard },
        props: {
            rec_games: {
                type: Array
            }
        },
    }

</script>

<template>
    <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Recommended Games</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 mt-md-0 mt-5 w-18 " v-for="item in rec_games" :key="item.id" @click="handleClick">
                <ExampleCard
                    classes="shadow-lg"
                    :title=item.name
                    :image=item.icon_path
                    route="game-detail"
                    :slugs= item.slug
                />
            </div>
      </div>
    </div>
  </section>
</template>