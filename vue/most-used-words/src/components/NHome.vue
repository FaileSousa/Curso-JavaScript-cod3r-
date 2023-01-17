<template>
  <v-container fluid>
    <v-dorm>
      <v-file-input 
        label="Selecione as Legendas"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple 
        chips 
        v-model="files" 
        @click:append-outer="processSubtitles" />
      
    </v-dorm>
    <div class="npills">
      <NPill v-for="word in groupedWords" :key="word.name"
        :name="word.name" :amount="word.amount" />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from 'electron'
import NPill from './NPill'

export default {
  components: { NPill },
  data: function () {
    return {
      files: [],
      groupedWords: []
      
    }
  },
  methods: {
    precessSubtitles() {
      const paths = this.files.map(f => f.path)
      ipcRenderer.send('process-subtitles', this.files)
      ipcRenderer.on('process-subtitles', (event, resp) => {
        this.groupedWords = resp
      })
    }
  }
}
</script>

<style>
  .npills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

</style>