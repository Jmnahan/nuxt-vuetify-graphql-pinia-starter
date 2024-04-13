<template>
	<v-app>
		<v-main>
			<v-toolbar height="100" class="bg-purple-lighten-3 d-flex">
				<NuxtLink
					class="ps-8 ps-lg-16 text-decoration-none font-weight-bold text-lg-h5 text-h6"
					to="/"
					exact-active-class="active"
				>
					<v-icon icon="mdi-rocket" />
					Space X Missions
				</NuxtLink>
				<NuxtLink
					class="pe-4 pe-lg-8 ms-auto text-decoration-none font-weight-medium text-lg-h6"
					to="/"
					exact-active-class="active"
				>
					Home
				</NuxtLink>
				<NuxtLink
					class="pe-8 pe-lg-16 text-decoration-none font-weight-medium text-lg-h6"
					to="/favorites"
					exact-active-class="active"
				>
					Favorites
				</NuxtLink>
			</v-toolbar>
			<slot />
		</v-main>
		<v-footer absolute inset app height="50" class="footer bg-purple-lighten-3 py-6">
			<v-row class="justify-center">
				<strong class="pl-2">
					{{ new Date().getFullYear() }} — Nuxt 3 / Vuetify / Graphql / Pinia
				</strong>
			</v-row>
		</v-footer>
	</v-app>
</template>
<style>
.footer {
	bottom: 0;
	width: 100%;
	position: absolute;
}
</style>

<style scoped>
.active {
	color: white;
}
</style>
