<template>
  <div class="ngift">
    <div class="ngift-tie-1"></div>
    <div class="ngift-tie-2"></div>
    <div class="ngift-top"></div>
    <div class="ngift-body"></div>
  </div>
</template>

<script>
export default {
    name: 'NGift'

}
</script>

<style>
.ngift {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}

.ngift-top {
    width: 100px;
    height: 25px;
    background-color: #7aa944;
}

.ngift-body {
    width: 90px;
    height: 60px;
    background-color: #5c7e32;
}

.ngift-tie-1 {
    position: absolute;
    width: 15px;
    height: 85px;
    background-color: red;
}

.ngift-tie-2 {
    position: absolute;
    top: 40px;
    width: 90px;
    height: 15px;
    background-color: red;
}
</style>