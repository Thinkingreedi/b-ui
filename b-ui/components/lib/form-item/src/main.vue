<template>
    <div class="b-form-item">
        <label class="b-form-item__label" :style="labelStyle">
            {{ label }}
        </label>
        <div class="b-form-item__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'b-form-item',
    data() {
        return {}
    },
    inject: ['Form'],
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    computed: {
        labelStyle() {
            return { width: this.Form.labelWidth }
        }
    }
}
</script>