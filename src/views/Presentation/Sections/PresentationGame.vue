<script>
    import ExampleCard from "../Components/ExampleCard.vue";
    import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
    import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
    import axios from 'axios';
    import bg0 from "@/assets/img/bg9.jpg";

    import Typed from "typed.js";
    const body = document.getElementsByTagName("body")[0];
    export default {

        name: 'PresentationGame',

        data() {
            return {
                list:[],
            }
        },
        components: {
            ExampleCard, DefaultNavbar, DefaultFooter
        },

        async mounted() {
          let result = await axios.get("http://localhost:8081/api/game-list")
          this.list = result.data
          if (document.getElementById("typed")) {
              // eslint-disable-next-line no-unused-vars
              var typed = new Typed("#typed", {
              stringsElement: "#typed-strings",
              typeSpeed: 90,
              backSpeed: 90,
              backDelay: 200,
              startDelay: 500,
              loop: true,
              });
          }
          body.classList.add("bg-gray-200");
        },

        computed: {
            bg0() {
                return bg0
            },
        },
    };
</script>

<template>
      <DefaultNavbar
      :action="{
        route: 'javascript:;',
        label: 'Buy Now',
        color: 'btn-white',
      }"
      transparent
    />

    <header class="bg-gradient-dark">
      <div
        class="page-header min-vh-75"
        :style="{ backgroundImage: `url(${bg0})` }"
      >
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center mx-auto my-auto">
              <h1 class="text-white">
                Play <span class="text-white" id="typed"></span> Games
              </h1>
              <div id="typed-strings">
                <h1>Casual</h1>
                <h1>Puzzle</h1>
                <h1>Arcade</h1>
              </div>
              <p class="lead mb-4 text-white opacity-8">
                We're constantly trying to express ourselves and actualize our
                dreams. If you have the opportunity to play this game
              </p>

              <h6 class="text-white mb-2 mt-5">Find us on</h6>
              <div class="d-flex justify-content-center">
                <a href="javascript:;"
                  ><i class="fab fa-facebook text-lg text-white me-4"></i
                ></a>
                <a href="javascript:;"
                  ><i class="fab fa-instagram text-lg text-white me-4"></i
                ></a>
                <a href="javascript:;"
                  ><i class="fab fa-twitter text-lg text-white me-4"></i
                ></a>
                <a href="javascript:;"
                  ><i class="fab fa-google-plus text-lg text-white"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
      <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
          <div class="row w-75 m-auto">
              <h3 class="mb-3">Our Games</h3>
              <div class="col-md-3 mt-md-0 mt-5 w-18 " v-for="item in list" :key="item.id">
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
      <DefaultFooter />
</template>