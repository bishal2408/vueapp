<script>
import { onMounted, ref } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";


// material-input
import setMaterialInput from "@/assets/js/material-input";
import { RouterLink, useRouter } from "vue-router";

export default {
  setup(props) {

    const isLoggedIn = ref(false)
    const user_name = ref(null)
    if(localStorage.getItem("data"))
    {
      isLoggedIn.value = true
      user_name.value = JSON.parse(localStorage.getItem("data")).name
    }

    onMounted(() => {
      setMaterialInput();
    });

    const router = useRouter();
    const play = () => {
      localStorage.getItem("data") ? router.push('/game/play/'+props.game_id) : router.push('/login-view')
    }

    return {
      play, user_name,isLoggedIn
    }
  },
  components: {
    MaterialAvatar, MaterialButton, RouterLink
  },

  props: {
    game_name: {
      type: String,
    },
    game_description: {
      type: String,
    },
    game_icon: {
      type: String,
    },
    game_id: {
      type: Number,
      default: 0
    },
    game_type: {
      type: String,
    },
    game_plays: {
      type: String,
    },
    total_players: {
      type: String,
    },
    leaderboard: {
      type: String,
    },
    leaderboard_full: {
      type: String,
    },
    rank: {
      type: Number,
    },
    high_score: {
      type: Number,
    },
    total_score: {
      type: Number,
    },
    played_time: {
      type: Number,
    },
    played_count: {
      type: Number,
    },
  },

}


</script>
<template>
  <section class="py-sm-7 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar
                size="xxl"
                class="shadow-xl position-relative z-index-2"
                :image= game_icon
                :alt=game_name
              />
            </div>
          </div>
          <div class="row py-7">
            <div
              class="col-lg-8 col-md-8 z-index-2 position-relative px-md-2 px-sm-5"
            >
              <div
                class="d-flex justify-content-between align-items-center mb-2"
              >
                <h3 class="mb-0">{{ game_name }}</h3>
                <div class="d-block">
                  <form action="" @submit.prevent="play">
                    <button class="btn btn-outline-danger btn-sm text-nowrap">
                    Play Now
                  </button></form>

                    <!-- <MaterialButton
                      class="text-nowrap mb-0"
                      variant="outline"
                      color="danger"
                      size="sm"
                      >
                      PLay Now
                    </MaterialButton> --> 
                      
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-auto">
                  <span class="h6 me-1">{{ total_players }}</span>
                  <span>Players</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">{{ game_plays }}</span>
                  <span>Game Plays</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">{{ game_type }}</span>
                  
                </div>
              </div>
              <p class="text-lg mb-0">
                {{game_description}}
                <br /><a
                  href="javascript:;"
                  class="text-success icon-move-right"
                  >More about game
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </p>
            </div>

            <div class="col-lg-4 col-md-4 z-index-2 position-relative px-md-2 px-sm-3">

              <div class="player-game-rank w-100" v-if="isLoggedIn">
                <h3 class="mb-0">Game Ranking</h3>
                <a href="#" class="w-100 display-block d-flex justify-space-between">
                  <img src="#" alt="user"> {{ user_name }}
                  <span>Rank: {{ rank }}</span>
                </a>
                <small>Total Score: {{ total_score }}</small> 
                <small>Personal High Score: {{ high_score }}</small> 
                <small>My Game Plays: {{ played_count }}</small> 
                <small>Total Gaming Time : {{ played_time }}</small> 
                <small>Total Players: ({{ total_players }})</small> 
                <small>Total Gameplays: ({{ game_plays }})</small> 
              </div>
              <div v-else><router-link to="/login-view" class="btn btn-outline-danger btn-sm">Login</router-link> to view user data</div>
              
              <div>
                <h3>Leaderboard</h3>
                <div v-html="leaderboard"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .player-game-rank a, .player-game-rank small{
    display: block !important;
    float: left;
    width: 100%;
    padding: 5px 0px;
  }
  .player-game-rank small {
    border-top: 1px solid #000;
  }

  .player-game-rank span {
    float: right;
  }
</style>