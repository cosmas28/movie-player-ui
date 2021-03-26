import React from "react";

import {Captiontext, VideoCaption, VideoPoster, Container} from "./styles";

type VideoCardProps = {
	posterUrl?: string;
	onClick: () => void;
	caption: string | JSX.Element;
};

export const VideoCard: React.FC<VideoCardProps> = ({
	posterUrl,
	onClick,
	caption,
}) => {
	return (
		<Container onClick={onClick}>
			<VideoPoster src={posterUrl}/>
			<VideoCaption><Captiontext>{caption}</Captiontext></VideoCaption>
		</Container>
	);
};
