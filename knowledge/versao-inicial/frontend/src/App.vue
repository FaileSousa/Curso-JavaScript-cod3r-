<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
		<NHeader title="Cod3r - Base de Conhecimento" 
    :hideToggle="!user"
    :hideUserDropdown="!user" />
    <NMenu v-if="user" />
     <NLoading  /><!-- v-if="validateToken"   -->
     <NContent  /> <!-- v-else -->
    <NFooter />
	</div>
</template>

<script>
import axios from "axios"
import { baseApiUrl, userKey } from "../src/config/global"
import { mapState } from "vuex"
import NHeader from "@/components/template/NHeader"
import NMenu from "@/components/template/NMenu"
import NContent from "@/components/template/NContent"
import NFooter from "@/components/template/NFooter"
// import NLoading from "@/components/template/NLoading"

export default {
	name: "App",
  components: { NHeader, NMenu, NContent, NFooter}, //NLoading },
  computed: mapState(['isMenuVisible', 'user']),
  data: function() {
    return {
      validatingToken: true
    }
  },
  methods: {
    async validateToken() {
      this.validatingToken = true

      const json = localStorage.getItem(userKey)
      const userData = JSON.parse(json)
      this.$store.commit('setUser', null)

      if(!userData) {
        this.validatingToken = false
        this.$router.push({ name: 'auth' })
        return
      }

      const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

      if (res.data) {
        this.$store.commit('setuser', userData)
      } else {
        localStorage.removeItem(userKey)
        this.$router.push({ name: 'auth' })
      }

      this.validatingToken = false
    }
  },
  created() {
    this.validatingToken()
  }
}
</script>

<style>
  * {
    font-family: "Lato", sans-serif;
  }

  body {
    margin: 0;
  }

  #app {
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr 40px;
    grid-template-columns: 300px 1fr;
    grid-template-areas: 
      "header header"
      "menu content"
      "menu footer";
  }

  #app.hide-menu {
    grid-template-areas: 
      "header header"
      "content content"
      "footer footer";
  }

</style>