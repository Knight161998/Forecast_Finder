const TimeAndLocation = ({
	weather: { formattedLocalTime, name, country },
}) => {
	return (
		<div>
			<div className="flex items-center justify-center my-6">
				<p className="text-xl font-extralight text-white">
					{/* Tuesday, 8 July 2024 | Local Time: 2:46 PM */}
					{formattedLocalTime}
				</p>
			</div>
			<div className="flex items-center justify-center my-3">
				<p className="text-3xl font-medium">
					{/* Noida, IN */}
					{`${name}, ${country}`}
				</p>
			</div>
		</div>
	);
};

export default TimeAndLocation;
