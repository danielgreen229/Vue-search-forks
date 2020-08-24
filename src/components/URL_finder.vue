<template>
  <a :href="url" target="_black">{{ name }}</a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>