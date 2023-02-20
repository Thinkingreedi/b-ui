<template>
    <div class="b-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'b-form',
    provide() {
        return {
            Form: this
        }
    },
    data() {
        return {}
    },
    methods: {},
    components: {},
    props: {
        model: {
            type: Object,
            required: true
        },
        labelWidth: {
            type: String,
            default: '80px'
        }
    },
    created() { },
    mounted() { },
    computed: {},
    watched: {}
}
</script>