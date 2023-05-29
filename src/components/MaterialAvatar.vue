<script setup>
defineProps({
  image: {
    type: String,
   
  },
  alt: {
    type: String,

  },
  size: {
    type: String,
    default: "xxl",
  },
  borderRadius: {
    type: String,
    default: "",
  },
});
function getClasses(size, borderRadius) {
  let sizeValue = size && `avatar-${size}`;
  let borderRadiusValue = borderRadius && `border-radius-${borderRadius}`;

  return `${sizeValue} ${borderRadiusValue}`;
}
</script>
<template>
  <img
    class="avatar"
    :src="image"
    :class="getClasses(size, borderRadius)"
    :alt="alt"
  />
</template>
