// import react
import React from "react";

// no need to install @types for react-player since it supports typescript out of the box
import ReactPlayer from "react-player"

import {VideoCard} from "../VideoCard";

// import styles
import {
	Container,
	MainSection,
	SectionsWrapper,
	VerticalDivider,
	Sidebar,
	VideoWrapper,
	TopRatedContainer,
	TopRatedInnerWrapper,
	TopRatedHeader,
	TopRatedHeaderTitle,
	HorizontalRule,
} from "./styles";


// For now, the componet is not going to recieve any props.
type Props = {};

/**
 * Define our Home component. Notice the name of the component matches
 * the directory name. It's a good practice to match the name of the component
 * with it's file name.
 */
export const Home: React.FC<Props> = () => {
	const [playingVideo, setPlayingVideo] = React.useState<string>("https://www.youtube.com/embed/I7m-7EEI5vo");
	const handleVideoClick = (videoUrl: string) => () => setPlayingVideo(videoUrl);

	return (
		<Container>
			<SectionsWrapper>
				<MainSection>
					<VideoWrapper>
						<ReactPlayer
							url={playingVideo}
							width="100%"
							height="500px"
							controls
						/>
					</VideoWrapper>
					<TopRatedContainer>
						<TopRatedHeader>
							<TopRatedHeaderTitle>Top Rated Movies</TopRatedHeaderTitle>
							<HorizontalRule/>
						</TopRatedHeader>
						<TopRatedInnerWrapper>
							<VideoCard
								caption="The Incredibles 2"
								posterUrl="https://vignette.wikia.nocookie.net/disney/images/b/b8/Incrediblesheader.jpg"
								onClick={handleVideoClick("https://www.youtube.com/embed/ZJDMWVZta3M")}
							/>
							<VideoCard
								caption="Pacific Rim Uprising"
								posterUrl="https://s3.amazonaws.com/WGHOF/images/398/pacific_rim_uprising_poster__newposter.jpg"
								onClick={handleVideoClick("https://www.youtube.com/embed/mqI29_cZ1NM")}
							/>
							<VideoCard
								caption="Avengers: Infinity War"
								posterUrl="https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Avengers-3-teaser-poster-1143901.jpg"
								onClick={handleVideoClick("https://www.youtube.com/embed/6ZfuNTqbHE8")}
							/>
						</TopRatedInnerWrapper>
					</TopRatedContainer>
				</MainSection>
				<VerticalDivider />
				<Sidebar>
				</Sidebar>
			</SectionsWrapper>
		</Container>
	)
}
