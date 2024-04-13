export interface Launch {
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

export interface Rocket {
	name: string
	description: string
	first_flight: string
	stages: number
	height: {
		feet: number
		meters: number
	}
	diameter: {
		feet: number
		meters: number
	}
	mass: {
		kg: number
		lb: number
	}
}
