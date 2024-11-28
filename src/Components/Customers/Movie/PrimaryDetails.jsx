import { useEffect, useState } from "react";
import { ProgressIndicator } from "../../Common/ProgressIndicator/ProgressIndicator";
import { formatYear } from "../../Utils/FormatDate";
import { formatRunTime } from "../../Utils/FormatRunTime";
import { FaList, FaPlay } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import { useUserDetails } from "../../Hooks/User/UserDetails";
import { useAddFavorite } from "../../Hooks/User/AddFavorite";
import { useYoutubeVideo } from "../../Hooks/Movies/YoutubeMovie";
import { Modal } from "../../Modal/Modal";
import "../../Modal/Styles.Modal.sass";

export const PrimaryDetails = ({ movieDetails }) => {
	const { userData } = useUserDetails();
	const { youtubeVideoKey, loadingYoutubeVideo, errorYoutubeVideo } =
		useYoutubeVideo(movieDetails.id);
	const [sessionId, setSessionId] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const genre = movieDetails.genres;
	const movieId = movieDetails.id;

	useEffect(() => {
		if (userData) setSessionId(userData.id);
	}, [userData]);

	const { isLiked, errorMessage, handleLikeClick } = useAddFavorite(
		sessionId,
		movieId
	);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	if (loadingYoutubeVideo) return <p>Loading Youtube Video...</p>;
	if (errorYoutubeVideo)
		return <p>Error loading youtube video: {errorYoutubeVideo}</p>;

	return (
		<>
			<section className="xs:block xl:flex justify-between items-center w-full">
				<figure className="flex h-full mt-16 mb-5 xl:mb-12 text-base">
					<img
						src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
						alt={movieDetails.title}
						className="object-cover rounded-lg w-[200px] h-[300px]"
					/>
					<figcaption className="flex-1 flex flex-col justify-end ml-4 text-base">
						<h1>{movieDetails.title}</h1>
						<div className="flex">
							{genre && (
								<ul className="flex space-x-1">
									{genre.map((g, index) => (
										<li key={g.id} className="text-title">
											<p>
												{g.name}
												{index < genre.length - 1 && ","}
											</p>
										</li>
									))}
								</ul>
							)}
							<p className="flex items-center">
								<LuDot />
								{formatRunTime(movieDetails.runtime)}
							</p>
						</div>
						<p className="text-subtleDark">
							{formatYear(movieDetails.release_date)}
						</p>
					</figcaption>
				</figure>

				{/* Action section */}
				<section className="flex justify-center items-center rounded-lg sm:w-full xl:w-fit h-fit bg-BaggroundPrim px-11 py-9">
					<div className="flex justify-center items-center w-14 h-14 m-2">
						<ProgressIndicator index={movieDetails.vote_average} />
					</div>
					<span className="flex justify-center items-center w-14 h-14 m-2 bg-hl rounded-full">
						<FaList />
					</span>
					<span className="flex justify-center items-center w-14 h-14 m-2 bg-hl rounded-full">
						<GoHeartFill
							onClick={() => handleLikeClick(movieDetails.id, sessionId)}
							className={`w-6 h-6 ${isLiked ? "text-red-500" : ""}`}
						/>
					</span>
					<button onClick={openModal} className="bg-hl m-2">
						<FaPlay /> <p className="text-BaggroundPrim pl-2">Play trailer</p>
					</button>
					{/* modal content */}
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						className="Modal"
						overlayClassName="Overlay">
						<div className="modalContent relative w-full h-full">
							{youtubeVideoKey ? (
								<iframe
									id="existing-iframe-example"
									width="fullscreen"
									height="fit-content"
									allowFullScreen
									className="absolute inset-0 w-full h-5/6 rounded-lg"
									src={`https://www.youtube.com/embed/${youtubeVideoKey}`}></iframe>
							) : (
								<p>No official trailer available</p>
							)}
						</div>
					</Modal>
				</section>
			</section>
			{errorMessage && <p className="text-red-500">{errorMessage}</p>}
		</>
	);
};
