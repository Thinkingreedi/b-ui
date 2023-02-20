<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "b-radio-group",
    props: {
        value: {
            type: [String, Number]
        }
    },
    provide() {
        return {
            RadioGroup: this
        };
    }
};
</script>