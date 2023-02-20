<template>
    <!-- 如果 error 存在，添加 class error -->
    <div class="wrapper" :class="{ error }">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
            @change="$emit('change', $event.target.value)" @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)" @blur="$emit('blur', $event.target.value)">
        <!-- $emit 参数1：事件名，参数2：传出的第一个参数，参数3：传出的第二个参数 -->
        <template v-if="error">
            <icon name="error" class="errorIcon"></icon>
            <span class="errorMessage">{{ error }}</span>
        </template>
    </div>
</template>

<script>
import Icon from "../../icon/index";
export default {
    components: { Icon },
    name: "b-input",
    props: {
        value: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        error: {
            type: String,
        },
    },
};
</script>