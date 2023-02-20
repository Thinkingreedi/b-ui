<template>
    <label class="b-radio">
        <span class="b-radio--outer">
            <span class="b-radio--inner" :class="{ 'is-checked': isChecked }"></span>
            <input class="b-radio-native" type="radio" :value="label" v-model="radioValue">
        </span>
        <span class="b-radio--label">
            {{ label }}
        </span>
    </label>
</template>

<script>
export default {
    name: "b-radio",
    inject: {
        RadioGroup: {
            default: ""
        }
    },
    props: {
        value: {
            type: [String, Number]
        },
        label: {
            type: [String, Number]
        }
    },
    computed: {
        isGroup() {
            return this.RadioGroup;
        },
        radioValue: {
            get() {
                return this.isGroup ? this.RadioGroup.value : this.value;
            },
            set(value) {
                if (this.isGroup) {
                    this.RadioGroup.$emit("input", value);
                } else {
                    this.$emit("input", value);
                }
            }
        },
        isChecked() {
            return this.radioValue === this.label;
        }
    }
};
</script>