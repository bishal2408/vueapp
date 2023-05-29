<script>
    import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue"
    import Header from "@/examples/Header.vue";

    // sections
    import Footer from "../LandingPages/Author/Sections/AuthorFooter.vue";
    import Profile from "../LandingPages/Author/Sections/AuthorProfile.vue";

    import Recommendation from "./RecommendationView.vue"
    import Posts from "../LandingPages/Author/Sections/AuthorPosts.vue";

    import Contact from "../LandingPages/Author/Sections/AuthorContact.vue";

    // image
    import image from "@/assets/img/city-profile.jpg";
    import { ref } from "vue";
    import { useRoute} from "vue-router";
    import axios from "axios";
    
    import { useLoginStore } from "@/store"
    export default {
        setup() {
          const loginStatus = useLoginStore()
          const route = useRoute()
          const detail = ref({
              game_name : null,
              game_icon : null,
              game_description : null,
              game_type : null,
              game_banner : null,
              game_id : null,
              total_players : null,
              game_plays : null,
              leaderboard : null,
              leaderboard_full : null,
              rank : null,
              high_score : null,
              total_score : null,
              played_time : null,
              played_count : null,
              rec_games : null,
          })
          const getGameDetail = async () => {
            const user_id = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")).id : ''

            await axios.get("http://localhost:8081/api/game-detail?slug="+route.params.slug+"&user_id="+user_id)
            .then( response => {
                if(response.data.success){
                    detail.value.game_name = response.data.game.name
                    detail.value.game_icon = response.data.game.icon_path
                    detail.value.game_description = response.data.game.description
                    detail.value.game_type = response.data.game.game_type
                    detail.value.game_banner = response.data.game.banner_path
                    detail.value.game_id = response.data.game.id
                    detail.value.total_players = response.data.game.total_players
                    detail.value.game_plays = response.data.game.game_plays
                    detail.value.leaderboard = JSON.parse(response.data.game.leaderboard)
                    detail.value.leaderboard_full = JSON.parse(response.data.game.leaderboard_full)

                    if(response.data.user_data){
                      detail.value.rank = response.data.user_data.rank
                      detail.value.high_score = response.data.user_data.high_score
                      detail.value.total_score = response.data.user_data.total_score
                      detail.value.played_time = response.data.user_data.played_time
                      detail.value.played_count = response.data.user_data.played_count
                    }

                    detail.value.rec_games = response.data.rec_games;
                }
            })
          }

          return {
            getGameDetail,detail, image
          }
        },
        async mounted() {
          this.getGameDetail()
        },

        components: {Footer, Header, DefaultNavbar, Profile, Posts, Contact, Recommendation},

        watch: {
          $route(to, from) {
            this.getGameDetail()
            window.scrollTo(0, 0)
          }
        },
    }



</script>


<template>
    <DefaultNavbar transparent />
    <Header>
      <div
        class="page-header min-height-400"
        :style="{ backgroundImage: `url(${image})` }"
        loading="lazy"
      >
        <span class="mask bg-gradient-dark opacity-8"></span>
      </div>
    </Header>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <Profile
        :game_name = detail.game_name
        :game_description = detail.game_description
        :game_icon = detail.game_icon
        :game_id = detail.game_id
        :game_plays = detail.game_plays
        :game_type = detail.game_type
        :total_players = detail.total_players
        :leaderboard = detail.leaderboard
        :leaderboard_full = detail.leaderboard_full
        :rank = detail.rank
        :high_score = detail.high_score
        :total_score = detail.total_score
        :played_time = detail.played_time
        :played_count = detail.played_count
        />
      <Recommendation
        :rec_games = detail.rec_games
      />
    </div>
    <Footer />
  </template>