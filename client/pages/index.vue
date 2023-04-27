<template>
	<v-container>
		<h2 class="text-center text-lg-h4 font-weight-bold my-2">
			<v-icon icon="mdi-rocket-launch" />
			There are {{ launches?.length || 0 }} Missions!
		</h2>
		<v-container>
			<v-row class="align-center justify-center mb-4">
				<label class="text-lg-h6 px-2" for="year-input">Filter by year:</label>
				<input
					id="year-input"
					v-model="year"
					class="year-input text-lg-h6 px-4 py-2 rounded"
					type="number"
					:min="minYear"
					:max="maxYear"
				/>
				<label class="text-lg-h6 ms-lg-16 px-2" for="order-select">Order:</label>
				<select
					id="order-select"
					v-model="ascending"
					class="order-select text-lg-h6 px-4 py-2 rounded"
				>
					<option :value="true">Ascending</option>
					<option :value="false">Descending</option>
				</select>
			</v-row>
		</v-container>
		<div v-for="launch in sortedAndFilteredLaunches" :key="launch.id">
			<LaunchCard :launch="launch" />
		</div>
	</v-container>
</template>
<script lang="ts" setup>
import useSortAndFilterLaunches from '../composables/SortLaunches'

interface Launch {
	id: string
	mission_name: string
	launch_date_local: string
	details: string
	rocket: {
		rocket_name: string
		rocket: {
			id: string
		}
	}
	launch_site: {
		site_name: string
	}
}

const query = gql`
	query getLaunches {
		launches {
			id
			mission_name
			launch_date_local
			details
			rocket {
				rocket_name
				rocket {
					id
				}
			}
			launch_site {
				site_name
			}
		}
	}
`
const { data } = await useAsyncQuery<{ launches: Launch[] }>(query)
const launches = computed(() => data.value?.launches ?? [])
const year = ref(2021)
const ascending = ref(true)
const { sortedAndFilteredLaunches } = useSortAndFilterLaunches(data.value?.launches ?? [], year, ascending)

const minYear = computed(() =>
	Math.min(...launches.value.map((launch) => new Date(launch.launch_date_local).getFullYear())),
)

const maxYear = computed(() =>
	Math.max(...launches.value.map((launch) => new Date(launch.launch_date_local).getFullYear())),
)
</script>

<style>
.year-input {
	border: 1px solid #ccc;
}

.order-select {
	border: 1px solid #ccc;
}
</style>
