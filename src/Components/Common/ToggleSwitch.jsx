import { useState } from "react";

export const ToggleSwitch = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className="flex items-center">
			{/* Hidden Checkbox */}
			<input
				type="checkbox"
				id="toggle"
				className="hidden"
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
			/>

			{/* Toggle Container */}
			<label
				htmlFor="toggle"
				className="relative grid grid-cols-2 w-fit cursor-pointer items-center border-[3px] border-hl rounded-full bg-BaggroundPrim text-title font-bold my-9 ">
				{/* Sliding Indicator */}
				<div
					className={`absolute top-0 h-full w-1/2 bg-hl rounded-full transition-all duration-300 ${
						isChecked ? "translate-x-full" : ""
					}`}></div>

				{/* Toggle Options */}
				<div className="z-10 w-full text-center py-2 px-3">Film</div>
				<div className="z-10 w-full text-center py-2 px-3">Serier</div>
			</label>
		</div>
	);
};
