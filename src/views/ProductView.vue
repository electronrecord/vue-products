<template>
	<section class="product-view">
    <router-link to="/">Home</router-link>
    <h1>Name: {{ product.name }}</h1>
    <span>Collection: {{ product.collectionName }}</span>
    <p>{{ product.description }}</p>
	</section>
</template>

<script>
	export default {
		name: 'Product',
    computed: {
      product () {
        const id = this.$router.currentRoute.params.id
        const products = this.$store.state.products.products
        const product = products.filter(obj => obj.id.toString() === id)[0]
        return product
      }
    }
	}
</script>

<style lang="scss">
	.product-view {
	}
</style>
