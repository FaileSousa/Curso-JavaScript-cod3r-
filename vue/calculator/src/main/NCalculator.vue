<template>
  <div class="ncalculator">
    <NDisplay :value="displayValue" />
    <NButton label="AC" triple @onClick="clearMemory" />
    <NButton label="/" operation @onClick="setOperation" />
    <NButton label="7" @onClick="addDigit" />
    <NButton label="8" @onClick="addDigit" />
    <NButton label="9" @onClick="addDigit" />
    <NButton label="*" operation @onClick="setOperation" />
    <NButton label="4" @onClick="addDigit" />
    <NButton label="5" @onClick="addDigit" />
    <NButton label="6" @onClick="addDigit" />
    <NButton label="-" operation @onClick="setOperation" />
    <NButton label="1" @onClick="addDigit" />
    <NButton label="2" @onClick="addDigit" />
    <NButton label="3" @onClick="addDigit" />
    <NButton label="+" operation @onClick="setOperation" />
    <NButton label="0" double @onClick="addDigit" />
    <NButton label="." @onClick="addDigit" />
    <NButton label="=" operation @onClick="setOperation" />
    
  </div>
</template>

<script>
import NButton from "../components/NButton"
import NDisplay from "../components/NDisplay"

export default {
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { NButton, NDisplay},
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    );
                    if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
                        this.clearMemory();
                        return;
                    }
                } catch (e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals 
            }
        },
        addDigit(n) {
           if (n === "." && this.displayValue.includes(".")) {
                return 
           }

           const clearDisplay = this.displayValue === "0"
                || this.clearDisplay
           const currentValue = clearDisplay ? "" : this.displayValue
           const displayValue = currentValue + n

           this.displayValue = displayValue
           this.clearDisplay = false
           this.values[this.current] = displayValue           
        }
    }

}
</script>

<style>
.ncalculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}

</style>