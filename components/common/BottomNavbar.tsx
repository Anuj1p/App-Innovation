//main sticky BOTTOM navbar on almost every page 
import React from "react";
import {
	useWindowDimensions,
	Image,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import config from "../../config/all";
import ScreenView from "../containers/ScreenView";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../../App";
import { useTheme } from '@react-navigation/native';

const BottomNavBar = () => {
	//accessing theme colors
	const { colors } = useTheme();
	const navigation =
		useNavigation<StackNavigationProp<RootParamList, "BottomNavBar">>();
	const route = useRoute<RouteProp<RootParamList, "BottomNavBar">>(); //might need for changing colour if selected
	const { width, height } = useWindowDimensions();
	const navHeight = config.heights.bottomNavBar;
	const styles = StyleSheet.create({
		nav: {
			backgroundColor: colors.background,
			position: "absolute",
			bottom: 0,
			alignSelf: "stretch",
			right: 0,
			left: 0,
			width: "100%",
			height: navHeight,
		},
		navButtons: {
			flex: 1,
			flexDirection: "row",
			justifyContent: "space-evenly",
			alignItems: "center",
		},
		Icons: {
			width: 32,
			height: 26,
		},
	});
	return (
		<View style={styles.nav}>
			<View style={styles.navButtons}>
				<TouchableOpacity
					onPress={() => {
						navigation.push("HomeScreen");
					}}
				>
					<Image
						style={styles.Icons}
						source={require("../../assets/home.png")}
					/>
				</TouchableOpacity>
				{/* <TouchableOpacity
					onPress={() => {
						navigation.push("CategoriesScreen");
					}}
				>
					<Image
						style={styles.Icons}
						source={require("../../assets/burgerIcon.png")}
					/>
				</TouchableOpacity> */}
				{/* <TouchableOpacity
					onPress={() => {
						navigation.push("DiscoveryScreen");
					}}
				>
					<Image
						style={styles.Icons}
						source={require("../../assets/discoveryIcon.png")}
					/>
				</TouchableOpacity> */}
				{/* <TouchableOpacity
					onPress={() => {
						navigation.push("ProfileScreen");
					}}
				>
					<Image
						style={styles.Icons}
						source={require("../../assets/profileIcon.png")}
					/>
				</TouchableOpacity> */}
			</View>
		</View>
	);
};

export default BottomNavBar;
