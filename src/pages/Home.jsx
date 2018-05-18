import React, { Component } from "react";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

import Scroll from "../small/Scroll";
import Overview from "../section/Overview";
import Bio from "../section/Bio";
import Experience from "../section/Experience";
import Skill from "../section/Skill";
import Portofolio from "../section/Portofolio";

class Home extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div>
        <Overview />
        <Bio />
        <Experience />
        <Skill />
        <Portofolio />
        <Scroll scrollToTop={this.scrollToTop} />
      </div>
    );
  }
}

export default Home;
