<template>
	<FoxTemplate :fox="fox" />
</template>

<script>
import FoxTemplate from "@/components/FoxTemplate";

export default {
	components: { FoxTemplate },
	data: function () { return { name: "Arabian Red" } },
	computed: {
		fox () {
			return this.$store.getters["foxes/getFox"](this.name);
		}
	}
}
</script>
