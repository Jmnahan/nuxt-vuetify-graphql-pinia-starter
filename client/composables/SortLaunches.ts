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

export default function useSortAndFilterLaunches(
	launches: Launch[],
	year: Ref<number>,
	ascending: Ref<boolean>,
) {
	const sortedAndFilteredLaunches = computed(() => {
		const filteredLaunches = launches.filter(
			(launch) => new Date(launch.launch_date_local).getFullYear() === year.value,
		)
		return filteredLaunches.slice().sort((a, b) => {
			const dateA = new Date(a.launch_date_local).getTime()
			const dateB = new Date(b.launch_date_local).getTime()
			if (ascending.value) {
				return dateA - dateB
			} else {
				return dateB - dateA
			}
		})
	})

	return { sortedAndFilteredLaunches }
}
