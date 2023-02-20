<template>
    <svg class="icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
import "./svg.js";
export default {
    name: "b-icon",
    props: ["name"],
};
</script>