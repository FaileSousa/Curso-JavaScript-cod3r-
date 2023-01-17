<template>
  <button class="nbutton"
    @click="$emit('onClick', label)"
    :class="{double, triple, operation }">
    {{ label }}
  </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: {type: Boolean },
        double: {type: Boolean },
        triple: {type: Boolean }
    }

}
</script>

<style>
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888
}

.nbutton {
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
}

.nbutton:active {
    background-color: #ccc;
}

.nbutton.double {
    grid-column: span 2;
}

.nbutton.triple {
    grid-column: span 3;
}

.nbutton.operation {
    background-color: #fa8231;
    color: #fff;
}

.nbutton.operation:active {
    background-color: #fa8231cc;
}

</style>