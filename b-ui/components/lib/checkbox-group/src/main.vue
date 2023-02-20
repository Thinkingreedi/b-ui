<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "b-checkbox-group",
    props: {
        value: {
            type: Array
        }
    },
    provide() {
        return {
            CKGroup: this
        };
    }
};
</script>