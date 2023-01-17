<template>
  <div class="ncontent">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'NContent'
}
</script>

<style>
    .ncontent {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }

</style>