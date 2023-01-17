<template>
  <div class="ndoor-area">
    <div class="ndoor-frame" :class="{ selected: selected && !open }">
        <NGift v-if="open && hasGift" />        
    </div>
    <div class="ndoor" :class="{ open }"
        @click="selected = !selected">
        <div class="number" :class="{ selected }">{{ number }}</div>
        <div class="knob" :class="{ selected }"
            @click.stop="open = true"></div>
    </div>
  </div>
  
  
</template>

<script>
import NGift from './NGift'

export default {
    name: 'NDoor',
    components: { NGift },
    props: {
        number: {},
        hasGift: { type: Boolean }
    },
    data: function() {
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style>
:root {
    --door-border: 5px solid brown;
    --selected-border: 5px solid yellow;
}

.ndoor-area {
    position: relative;
    width: 200px;
    height: 310px;
    border-bottom: 10px solid #aaa;
    margin-bottom: 20px;
    font-size: 3rem;

    display: flex;
    justify-content: center;
}

.ndoor-frame {
    position: absolute;
    height: 300px;
    width: 180px;

    border-left: var(--door-border);
    border-top: var(--door-border);
    border-right: var(--door-border);

    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.ndoor {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: chocolate;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.ndoor .knob {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: brown;
    align-self: flex-start;
    margin-top: 60px;
}

.ndoor-frame.selected {
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);
}

.ndoor > .number.selected {
    color: yellow;
}

.ndoor > knob.selected {
    background-color: yellow;
}

.ndoor.open {
    background-color: #0007;
}

.ndoor.open .knob {
    display: none;
}

.ndoor.open .number {
    display: none;
}

</style>