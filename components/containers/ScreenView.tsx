import React from "react";
import { useWindowDimensions, StyleSheet, Text, View } from "react-native";
import config from "../../config/all";


type Props = {
	children?: React.ReactNode;
	styleProp?: object | null;
};

const ScreenView = ({ children, styleProp }: Props) => {
	const { width, height } = useWindowDimensions();
	const bottomNavHeight: number = config.heights.bottomNavBar;
	const topNavHeight: number = config.heights.topNavBar;

	const styles = StyleSheet.create({
		container: {
			position: "absolute",
			top: topNavHeight,
			height: height - (topNavHeight + bottomNavHeight),
			width: "100%",
            backgroundColor:"#ce2828"
		},
	});
	return <View style={styles.container}>{children}</View>;
};

export default ScreenView;
