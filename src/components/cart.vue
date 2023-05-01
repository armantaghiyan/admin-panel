<template>
    <div class="cart">
        <div v-if="title !== ''" class="title p-6">{{ title }}</div>

        <slot/>

    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>