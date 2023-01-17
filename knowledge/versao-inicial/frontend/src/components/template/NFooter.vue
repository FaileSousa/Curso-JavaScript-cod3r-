<template>
  <footer class="nfooter">
        <span>Copyright <strong>Cod3r </strong>aluno - <strong>Faile </strong> © 2022-2023 </span>
  </footer>
</template>

<script>
export default {
    name: 'NFooter'
}
</script>

<style>
    .nfooter {
        grid-area: footer;
        background-color: #ddd;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }

</style>