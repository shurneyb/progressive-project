import React, { Component } from 'react';
import * as d3 from "d3";

import duke_drg from "../../data/duke/drg"
import unc_drg from "../../data/unc/drg"
import wakemed_drg from "../../data/wakemed/drg"

class BubbleChart extends Component {
  el = React.createRef();
  width = 800;
  height = 600;

  constructor(props) {
    super(props);

    this.dukeData = duke_drg.map((r) => r.name = "duke")
    this.uncData = unc_drg.map((r) => r.name = "unc")
    this.wakemedData = wakemed_drg.map((r) => r.name = "wakemed")

    this.data = this.dukeData.concat(this.uncData, this.wakemedData);
  }

  createSVG() {
    return d3.select(this.el).append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("style", "border: thin red solid");
  }

  drawChart(svg) {
    let hierarchicalData = this.makeHierarchy(this.data);
    let packLayout = this.pack([this.width - 5, this.height - 5]);
    const root = packLayout(hierarchicalData);

    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

    leaf
      .append("circle")
      .attr("r", d => d.r)
      .attr("fill-opacity", 0.7)
      .attr("fill", "navy");
  }

  pack(size) {
    return d3
      .pack()
      .size(size)
      .padding(3)
  }

  makeHierarchy(data) {
    return d3.hierarchy({ children: data }).sum(d => d.avg_price);
  }

  componentDidMount() {
    let svg = this.createSVG();
    this.drawChart(svg);
  }

  render() {
    return (
      <div>
        <h2>BubbleChart</h2>
        <div id="bubblechart" ref={el => (this.el = el)} />
      </div>
    );
  }
}

export default BubbleChart;