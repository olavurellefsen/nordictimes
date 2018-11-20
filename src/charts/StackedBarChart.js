import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {VictoryChart, VictoryLabel, VictoryLegend, VictoryGroup, VictoryStack, VictoryTheme, VictoryAxis, VictoryBar, VictoryTooltip} from 'victory';
import { getChartData } from './getChartData'

const ChartHeader = styled(VictoryLabel)`
  text-anchor: start;
  fill: #000000;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
  `;

class StackedBarChart extends React.Component {

  render() {
    const scenario = this.props.selectedScenario;
    const scenario2 = this.props.selectedScenario2;
    const region = this.props.selectedRegion;
    const chartName = this.props.chartName;
    const chartTitle = this.props.chartTitle;
    const periods = ['2010', '2020', '2030', '2040', '2050'];
    let gutter, rowGutter;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      gutter=0;
      rowGutter=0;
    } else {
      gutter=-40;
      rowGutter=-5;
    }    

    let chartData = getChartData(scenario, chartName, region);
    let chartData2 = []
    if(scenario2 !== "") {
      chartData2 = getChartData(scenario2, chartName, region);
    }

    let yDomain = [0, 1];
    if(this.props.minY<0) {
      let stackedRatio = this.props.minY/this.props.maxY;
      yDomain = [stackedRatio,1];
    }

    const colors = [
      "#5cbae6", "#b6d957", "#fac364", "#8cd3ff", "#d998cb", "#f2d249", "#93b9c6", "#ccc5a8",   
      "#ffcc00", "#ff9900", "#ff6600", "#ff0000", "#990000", "#ff0099", "#cc3399",
      "#990066", "#660066", "#660099", "#3366cc", "#33ccff", "#99cc33", "#66cc00",
      "#aad199", "#45535c", "#471442", "#612e30", "#7a713c", "#09e682", "#160154", "#fc53ec",
      "#454023", "#4b7060", "#4221a6", "#f2aceb", "#ede095", "#0395f7", "#7346fa", "#82627f"
    ];

    const colors2 = [
      "#2cbae6", "#96d957", "#cac364", "#5cd3ff", "#a998cb", "#c2d249", "#63b9c6", "#9cc5a8",
      "#cfcc00", "#cf9900", "#cf6600", "#cf0000", "#690000", "#cf0099", "#9c3399",
      "#690066", "#360066", "#360099", "#0366cc", "#03ccff", "#69cc33", "#36cc00",
      "#7ad199", "#15535c", "#171442", "#312e30", "#4a713c", "#39e682", "#460154", "#cc53ec",
      "#154023", "#1b7060", "#1221a6", "#c2aceb", "#bde095", "#3395f7", "#4346fa", "#52627f"
    ];

    return (
      <div>
        <VictoryChart
          domainPadding={20}
          width={380}
          height={300}
          padding={{left: 80, right: 50, top: 50, bottom: 50}}
          theme={VictoryTheme.material}
          domain={{ y: yDomain }}
        >
          <ChartHeader x={90} y={24}
            text={chartTitle}
          />
          <VictoryAxis
            key={0}
            tickValues={periods}
            tickFormat={periods}
          />
          <VictoryAxis
            dependentAxis
            axisLabelComponent={<VictoryLabel dx={120}/>}
            key={2}
            offsetX={80}
            tickFormat={(t) => (t*this.props.maxY/this.props.divideValues)}
            tickValues={[0, 0.25, 0.5, 0.75]}
            label={this.props.label}
          />    
          <VictoryLegend x={90} y={50}
            orientation="horizontal"
            gutter={gutter}
            rowGutter={rowGutter}
            symbolSpacer={4}
            itemsPerRow={3}
            style={{
              title: {fontSize: 14, leftPadding: -10 }
            }}
            colorScale = {colors}
            data={chartData.map(
              (chartGroup, i) => (
                { name: chartGroup.indicatorGroup.concat("        ").substr(0,16), fill: colors[i] }
              )
            )}
            labelComponent={<VictoryLabel style={{fontSize: '9px'}}/>}
          />
          <VictoryGroup offset={10} style={{ data: { width: 10}}}>
            <VictoryStack>
              {              
                chartData.map(
                  (chartGroup, i) => (
                    <VictoryBar 
                      key={chartGroup.indicatorGroup}
                      data={chartGroup.indicatorGroupValues.map(
                        chartGroupValue => (
                          {...chartGroupValue, 
                            label: chartGroup.indicatorGroup + ': ' +
                            (chartGroupValue.total/this.props.divideValues).toFixed(2) }
                        )
                      )}
                      x='period'
                      y={(datum) => datum['total'] / this.props.maxY}
                      labelComponent={<VictoryTooltip/>}
                      style={{
                        data: {fill: colors[i]}
                      }}
                    />
                  )
                )
              }
            </VictoryStack>
            {scenario2 !== "" &&
              <VictoryStack>
                {              
                  chartData2.map(
                    (chartGroup, i) => (
                      <VictoryBar 
                        key={chartGroup.indicatorGroup}
                        data={chartGroup.indicatorGroupValues.map(
                          chartGroupValue => (
                            {...chartGroupValue, 
                              label: chartGroup.indicatorGroup + ': ' +
                              (chartGroupValue.total/this.props.divideValues).toFixed(2) }
                          )
                        )}
                        x='period'
                        y={(datum) => datum['total'] / this.props.maxY}
                        labelComponent={<VictoryTooltip/>}
                        style={{
                          data: {fill: colors2[i]}
                        }}
                      />
                    )
                  )
                }
              </VictoryStack>
            }
          </VictoryGroup> 
          </VictoryChart>
      </div>
    )
  }
}

StackedBarChart.defaultProps = {
  divideValues: 1,
  selectedScenario2: ''
}

StackedBarChart.propTypes = {
  selectedScenario: PropTypes.string.isRequired,
  selectedScenario2: PropTypes.string,
  selectedRegion: PropTypes.array.isRequired, 
  chartName: PropTypes.string.isRequired,
  chartTitle: PropTypes.string.isRequired,
  minY: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  divideValues: PropTypes.number,
  label2: PropTypes.string,
}

export default StackedBarChart;