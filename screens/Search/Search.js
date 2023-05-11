import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import Header from "../../compontens/Home/Header";
import SearchCompo from "../../compontens/Search/SearchCompo";
import RecommCate from "../../compontens/Search/RecommCate";
import LatestSearch from "../../compontens/Search/LatestSearch";
export class Search extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#FFFF",
        }}
      >
        <Header />
        <SearchCompo />
        <RecommCate />
        <LatestSearch />
      </SafeAreaView>
    );
  }
}

export default Search;
