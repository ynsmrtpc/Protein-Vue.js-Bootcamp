export const toast = (message = "Default Message", options = {}) => {
	const { background = '#212121', position = 'top-right', icon = "mood", duration = 10000, barActive = true, barBackground = "white", color = "#fafafa" } = options;
	const toast = {
		id: new Date().getTime(),
		description: message,
		show: true,
		duration,
		icon,
		barActive,
		class: {
			barBackground,
			position,
			background,
		},
		type: (description, options = {}) => {
			const { position, icon, duration, background, barBackground, barActive, color } = options;
			toast.description = description;
			toast.icon = icon;
			toast.duration = duration;
			toast.barActive = barActive
			toast.class.position = position;
			toast.class.background = background;
			toast.class.barBackground = barBackground
			toast.class.color = color

		},
		success: (description = 'Success Notification !', options = {}) => {
			const { position = 'top-right', icon = "check_circle", duration = 10000,
				background = '#4caf50', barBackground = "#c9f0cb", barActive = true } = options;
			toast.type(description, { position, icon, duration, background, barBackground, barActive });
			return toast;
		},
		error: (description = 'Error Notification !', options = {}) => {
			const { position = 'top-right', icon = "priority_high", duration = 10000,
				background = '#f44336', barBackground = "#faa19b", barActive = true } = options;
			toast.type(description, { position, icon, duration, background, barBackground, barActive });
			return toast;
		},
		warning: (description = 'Warning Notification !', options = {}) => {
			const { position = 'top-right', icon = "warning", duration = 10000,
				background = '#ff9800', barBackground = "#f7cc8d", barActive = true } = options;
			toast.type(description, { position, icon, duration, background, barBackground, barActive });
			return toast;
		},
		info: (description = 'Info Notification !', options = {}) => {
			const { position = 'top-right', icon = "info", duration = 10000,
				background = '#2196f3', barBackground = "#a3d6ff", barActive = true } = options;
			toast.type(description, { position, icon, duration, background, barBackground, barActive });
			return toast;
		},
	};
	return toast;
}
