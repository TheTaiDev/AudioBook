import { ScrollView } from "react-native";
import React, { Component } from "react";
import Header from "../../compontens/Home/Header";
import Categories from "../../compontens/Home/Categories";
import Recommended from "../../compontens/Home/Recommended";
import BestSeller from "../../compontens/Home/BestSeller";
import NewReleases from "../../compontens/Home/NewReleases";
export class Home extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        {/* header */}
        <Header />
        {/* Categories */}
        <Categories />
        {/* Recommended For You */}
        <Recommended />
        {/* Best Seller */}
        <BestSeller />
        {/* New Releases */}
        <NewReleases />
      </ScrollView>
    );
  }
}

export default Home;
