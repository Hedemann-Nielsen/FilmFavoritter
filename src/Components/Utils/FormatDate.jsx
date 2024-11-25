export const formatDateShortMonth = (dateString) => {
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.toLocaleString("da-DK", { month: "short" }); // Henter forkortet månedsnavn
	const year = date.getFullYear();
	return `${day} ${month} ${year}`;
};

export const formatYear = (dateString) => {
	const date = new Date(dateString);
	// Extract day, month and year

	const year = date.getFullYear();
	// Return in d-m-year format
	return `${year}`;
};
