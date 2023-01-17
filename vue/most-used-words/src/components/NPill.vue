<template>
    <div class="npill">
        <span class="name">{{ name }}</span>
        <span class="amount">{{ amount }}</span>
    </div>
</template>

<script>
export default {
    props: ['name', 'amount']
}
</script>

<style scoped>
    .npill {
        margin: 10px;
        height: 55px;
        border-radius: 30px;

        background-color: crimson;
        color: #fff;
        font-size: 1.3rem;
        font-weight: bold;

        display: flex;
        align-items: center;
    }

    .npill .name {
        margin-left: 15px;
    }

    .npill .amount {
        margin: 10px;
        padding: 5px;
        height: 35px;
        width: 35px;
        border-radius: 18px;

        background-color: #fff;
        color: crimson;

        font-size: 14px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>