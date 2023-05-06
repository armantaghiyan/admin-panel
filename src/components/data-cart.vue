<template>
    <div class="cart flex p-6">
        <div class="grow">
            <span v-if="title !== ''" class="text-gray-2">{{title}}</span>
            <div>
                <slot/>
            </div>
            <span v-if="description !== ''" class="text-gray-2">{{description}}</span>
        </div>
        <div>
            <div class="flex items-center justify-center rounded-md w-10 h-10" :class="`bg-${type}-light text-${type}`">
                a
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    }
}
</script>