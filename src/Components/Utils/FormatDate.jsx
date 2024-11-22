export const formatDate = (dateString) => {
	const date = new Date(dateString);
	const options = { year: "numeric", month: "long", day: "numeric" };
	return date.toLocaleDateString("da-DK", options);
};

export const formatDateDMY = (dateString) => {
	const date = new Date(dateString);
	// Extract day, month and year
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	// Return in d-m-year format
	return `${day}-${month}-${year}`;
};

export const formatDateShortMonth = (dateString) => {
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.toLocaleString("da-DK", { month: "short" }); // Henter forkortet månedsnavn
	const year = date.getFullYear();
	return `${day} ${month} ${year}`;
};
