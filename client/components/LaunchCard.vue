<template>
	<v-card class="mx-auto my-6" max-width="1300">
		<v-card-text>
			<span>Mission:</span>
			<p class="text-h4">{{ launch.mission_name }}</p>
			<p class="pt-1 text-h6">{{ formattedLaunchDate }} | ({{ getLaunchSite(launch.launch_site) }})</p>
			<div class="text--primary pt-6">
				{{ getDetails(launch.details) }}
			</div>
		</v-card-text>
		<v-card-actions>
			<span class="mx-2 text-h6">Rocket:</span>
			<NuxtLink
				class="text-decoration-none font-weight-medium text-purple-darken-1 text-h6"
				:to="`/rockets/${launch.rocket.rocket.id}`"
			>
				{{ launch.rocket.rocket_name }}
			</NuxtLink>
			<v-btn
				class="ms-auto"
				@click="
					addToFavorites({ id: launch.rocket.rocket.id, rocket_name: launch.rocket.rocket_name })
				"
			>
				<v-icon :color="favRocket ? 'purple' : 'grey'" size="x-large">mdi-heart</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script lang="ts" setup>
import { useFavorite } from '../stores/useFavorites'
import type { Launch } from '../types/missions'

const props = defineProps<{
	launch: Launch
}>()

const { addToFavorites, rockets } = useFavorite()
const favRocket = computed(() => {
	return rockets.some((rocket) => rocket.id === props.launch.rocket.rocket.id)
})

const formattedLaunchDate = computed((): string => {
	return new Date(props.launch.launch_date_local).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})
})

function getLaunchSite(site: { site_name: string }): string {
	return site?.site_name || 'Site unavailable'
}

function getDetails(details: string): string {
	return details || 'No details available'
}
</script>
