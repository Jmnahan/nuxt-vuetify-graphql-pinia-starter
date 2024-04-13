<template>
	<v-container>
		<h2 class="text-center text-lg-h4 font-weight-bold my-2">
			<v-icon color="purple" icon="mdi-heart" />
			Favorite Rockets
		</h2>
		<v-card v-for="rocket in rockets" :key="rocket.id" class="mx-auto my-6" max-width="1300">
			<v-card-text v-if="rocket">
				<p class="text-h4">{{ rocket.rocket_name }}</p>
				<p class="pt-1 text-h6">Rocket id: {{ rocket.id }}</p>
			</v-card-text>
		</v-card>
	</v-container>
</template>
<script lang="ts" setup>
import { useFavorite } from '../stores/useFavorites'
const { rockets } = useFavorite()
</script>
