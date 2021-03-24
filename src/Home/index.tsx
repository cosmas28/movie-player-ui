// import react
import React from "react";

// import styles
import {Container, MainSection, SectionsWrapper, VerticalDivider, Sidebar} from "./styles";

// For now, the componet is not going to recieve any props.
type Props = {};

/**
 * Define our Home component. Notice the name of the component matches
 * the directory name. It's a good practice to match the name of the component
 * with it's file name.
 */
export const Home: React.FC<Props> = () => {
	return (
		<Container>
			<SectionsWrapper>
				<MainSection>
				</MainSection>
				<VerticalDivider />
				<Sidebar>
				</Sidebar>
			</SectionsWrapper>
		</Container>
	)
}
