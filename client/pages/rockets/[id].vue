<template>
	<v-container>
		<h2 class="text-center text-lg-h4 font-weight-bold my-2">
			<v-icon icon="mdi-rocket" />
			Specific Rocket
		</h2>
		<div v-if="rocket">
			<RocketCard :rocket="rocket" />
		</div>
		<p v-else>Loading...</p>
	</v-container>
</template>
<script lang="ts" setup>
import type { Rocket } from '~/types/missions'

const route = useRoute()

const query = gql`
	query getRocket($rocketId: ID!) {
		rocket(id: $rocketId) {
			name
			description
			first_flight
			stages
			height {
				feet
				meters
			}
			diameter {
				feet
				meters
			}
			mass {
				kg
				lb
			}
		}
	}
`
const { data } = await useAsyncQuery<{ rocket: Rocket }>(query, {
	rocketId: route.params.id,
})

const rocket = computed(() => data.value?.rocket ?? [])
</script>
