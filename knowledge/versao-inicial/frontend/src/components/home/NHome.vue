<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard"
        sub="Base de Conhecimento" />
      <div class="stats">
        <NStat title="Categorias" :value="stat.categories"
          icon="fa fa-folder" color="#d5d4d50" />
        <NStat title="Artigos" :value="stat.articles"
          icon="fa fa-file" color="#3bc480" />
        <NStat title="Usuários" :value="stat.users"
          icon="fa fa-user" color="#3282cd" />
      </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import NStat from './NStat'
import axios from 'axios'
import { baseApiUrl } from '../../config/global'

export default {
    name: 'NHome',
    components: { PageTitle, NStat },
    data: function() {
      return {
        stat: {}
      }
    },
    methods: {
      getStats() {
        axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
      }
    },
    mounted() {
      this.getStats()
    }
}
</script>

<style>
  .stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

</style>