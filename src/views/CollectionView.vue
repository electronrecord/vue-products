<template>
	<section class="collection-view">
    <router-link to="/">Home</router-link>
    <h1>Select product from collection</h1>

    <ul>
      <li v-for="product in products">
        <router-link :to="`/product/${product.id}`">
          {{ product.name }}
        </router-link>
      </li>
    </ul>

	</section>
</template>

<script>
	export default {
		name: 'Collection',
    computed: {
      products () {
        const collectionName = this.$router.currentRoute.params.id
        const products = this.$store.state.products.products
        return products.filter(obj => obj.collectionName === collectionName) // []
      }
    }
	}
</script>

<style lang="scss">
	.collection-view {
	}
</style>
