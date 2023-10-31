import HeaderTitle from "../../HeaderTitle/HeaderTitle";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router";
import { Flex } from "@chakra-ui/react";
import { componentColor } from "../../../utils/constants/colors";

export default function MainLayout() {
  return (
    <Flex flexDirection={"column"} justifyContent={"space-between"}>
      <Flex flexDirection="column" bg={componentColor} padding={"30px"}>
        <HeaderTitle />
        <Navbar />
      </Flex>

      <Outlet />

      <Footer />
    </Flex>
  );
}
