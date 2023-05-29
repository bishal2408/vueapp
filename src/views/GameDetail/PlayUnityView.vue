<template>
    <div>
      <iframe
        :src="`${unityUrl}/play-game.blade.php?game_id=${$route.params.id}&user_id=${user_id}`"
        scrolling="no"
        >
      </iframe>
    </div>
</template>


<script>
import { useRouter } from 'vue-router';
import { onMounted, toHandlers } from 'vue';
export default {
  computed: {
    unityUrl() {
      return 'http://localhost:8081/asset';
    },
  },

  data() {
    return {
        user_id : this.user_id
    }
  }
};
</script>

<style>
    iframe {
        width: 100%;
        height: 100vh;
    }
</style>
