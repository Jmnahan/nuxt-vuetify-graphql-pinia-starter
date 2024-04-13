export const useFavorite = defineStore('favorite', {
	state: () => ({
		rockets: [] as { id: string; rocket_name: string }[],
	}),
	actions: {
		addToFavorites(rocket: { id: string; rocket_name: string }) {
			this.rockets.push(rocket)
		},
	},
})
