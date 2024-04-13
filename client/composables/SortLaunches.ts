import type { Launch } from '../types/missions'

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
