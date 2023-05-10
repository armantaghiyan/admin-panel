<template>
    <div>
        <div class="relative w-full">

            <label  v-if="label !== ''"
                    @click="clickLabel()"
                    class="absolute mx-3 bg-cart px-1 duration-150 cursor-pointer"
                    :class="{'top-[-7px] text-xs': isActive, 'top-2 text-base': !isActive, 'text-primary':isFocus, 'text-gray-3': !isFocus}">
                    {{ label }}
            </label>

            <input :type="type"
                   @blur="inpBlur()"
                   @focus="inpFocus()"
                   ref="inpRef"
                   v-model="localVal"
                   dir="auto"
                   class="w-full h-10 focus:outline-none rounded-md border border-gray-4 hover:border-gray-2 focus:border-2 focus:border-primary cursor-pointer text-gray-2 px-4 duration-150">

        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text',
        },
        label: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            localVal: '',
            isActive: false,
            isFocus: false,
        }
    },
    watch: {
        localVal(newValue) {
            this.$emit('update:modelValue', newValue)
        }
    },
    methods: {
        inpFocus() {
            this.isFocus = true
            this.isActive = true
        },
        inpBlur() {
            this.isFocus = false
            if (this.localVal === '') {
                this.isActive = false
            }
        },
        clickLabel() {
            this.$refs.inpRef.focus()
        }
    },
    mounted() {
        if (this.modelValue !== '') {
            this.isActive = true
        }
        this.localVal = this.modelValue
    }
}
</script>