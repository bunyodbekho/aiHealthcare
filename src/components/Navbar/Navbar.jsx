import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Tabs colorScheme="blue" bg={"#fff"}>
      <TabList>
        <Link to="/">
          <Tab>Home</Tab>
        </Link>
        <Link to="/about">
          <Tab>About</Tab>
        </Link>
        <Link to="/program-overview">
          <Tab>Program Overview</Tab>
        </Link>
        <Link to="/join-us">
          <Tab>Join Us</Tab>
        </Link>
      </TabList>
    </Tabs>
  );
}
