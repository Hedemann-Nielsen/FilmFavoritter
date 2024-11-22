import { BiSolidCameraMovie } from "react-icons/bi";
import { FaPlay } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

export const KeyFeatures = () => {
	return (
		<section className="flex items-center text-center justify-around w-4/5 h-80 my-24 px-10 bg-BaggroundPrim rounded-lg">
			<div className="w-48 ">
				<BiSolidCameraMovie className="w-full text-6xl text-title " />
				<h3>Alle de nyeste film og serier</h3>
			</div>
			<div className="w-48 ">
				<FaPlay className="w-full text-6xl text-title mb-2" />
				<h3>Se trailer direkte på siden</h3>
			</div>
			<div className="w-48 ">
				<GoHeartFill className="w-full text-6xl text-title mb-2" />
				<h3>Log ind og gem dine favoritter</h3>
			</div>
		</section>
	);
};
