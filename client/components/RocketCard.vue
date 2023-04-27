<template>
	<h3 class="text-center mt-16">Rocket details for {{ rocket.name }}</h3>
	<v-card class="mx-auto my-6" max-width="1300">
		<v-card-text>
			<p class="text-h4">{{ rocket.name }}</p>
			<p class="pt-1 text-h6">First flight: {{ formattedLaunchDate }}</p>
			<div class="text--primary pt-6">
				{{ rocket.description }}
			</div>
		</v-card-text>
		<v-table class="mx-4 my-4 border">
			<thead>
				<tr>
					<th class="text-center">Stages</th>
					<th class="text-center">Height</th>
					<th class="text-center">Diameter</th>
					<th class="text-center">Mass</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-center">{{ rocket.stages }}</td>
					<td class="text-center">{{ rocket.height?.feet }}ft / {{ rocket.height?.meters }}m</td>
					<td class="text-center">
						{{ rocket.diameter?.feet }}ft / {{ rocket.diameter?.meters }}m
					</td>
					<td class="text-center">
						{{ rocket.mass?.kg.toLocaleString() }} kg / {{ rocket.mass?.lb.toLocaleString() }} lb
					</td>
				</tr>
			</tbody>
		</v-table>
	</v-card>
</template>

<script lang="ts">
export default {
	props: {
		rocket: {
			type: Object,
			required: true,
		},
	},
	computed: {
		formattedLaunchDate(): string {
			return new Date(this.rocket.first_flight).toLocaleDateString('en-US', {
				month: 'short',
				day: 'numeric',
				year: 'numeric',
			})
		},
	},
}
</script>
