import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import TopNavBar from "../components/common/TopNavBar";
import BottomNavBar from "../common/BottomNavbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootParamList } from "../../App";
import ScreenView from "../containers/ScreenView";
import { useTheme } from '@react-navigation/native';

//declaring screenprop type for the JSX category screen
type ProfileScreenProps = StackScreenProps<RootParamList, "HomeScreen">;

const HomeScreen = ({ navigation, route }: ProfileScreenProps) => {
	const { colors } = useTheme(); //accessing theme colors
	return (
		<SafeAreaView style={styles.container}>
			{/* <TopNavBar /> */}
			<ScreenView>Profile // Settings</ScreenView>
			<BottomNavBar />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#bbbbbb",
		width: "100%",
		flex: 1,
	},
});
