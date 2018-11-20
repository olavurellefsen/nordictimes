import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {VictoryChart, VictoryLabel, VictoryLegend, VictoryGroup, VictoryStack, VictoryTheme, VictoryAxis, VictoryArea, VictoryLine, VictoryTooltip} from 'victory';
import stackedBar from '../data/stackedBar';
import line from '../data/line';

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
    const region = this.props.selectedRegion;
    const chartName = this.props.chartName;
    const chartTitle = this.props.chartTitle;
    const combinedChart = this.props.combinedChart;
    const periods = ['2010', '2020', '2030', '2040', '2050'];
    if(this.props.showPotential) {
      periods.push('potential');
    }
    let gutter, rowGutter;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      gutter=0;
      rowGutter=0;
    } else {
      gutter=-40;
      rowGutter=-5;
    }        

    const allEntriesForIndicator = stackedBar.data.scenarios.find(o => o.scenario === scenario).indicators.find(o => o.indicator === chartName);
    const onlyRelevantRegions = allEntriesForIndicator.regions.filter(o => region.includes(o.region));
    const relevantEntries = onlyRelevantRegions.map(region => region.indicatorGroups);
    const flatten = relevantEntries.reduce((flat, next) => flat.concat(next) || []);
    var chartData = [];
    flatten.reduce( (res, value) => {
      if(!res[value.indicatorGroup]) {
        if(this.props.showPotential) {
          res[value.indicatorGroup] = {
            indicatorGroup: value.indicatorGroup,
            indicatorGroupValues: [
              {period: "2010", total: 0},
              {period: "2020", total: 0},
              {period: "2030", total: 0},
              {period: "2040", total: 0},
              {period: "2050", total: 0},
              {period: "Potential", total: 0},
            ]
          };
        } else {
          res[value.indicatorGroup] = {
            indicatorGroup: value.indicatorGroup,
            indicatorGroupValues: [
              {period: "2010", total: 0},
              {period: "2020", total: 0},
              {period: "2030", total: 0},
              {period: "2040", total: 0},
              {period: "2050", total: 0}
            ]
          };          
        }
        chartData.push(res[value.indicatorGroup]);
      }
      res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2010")[0].total +=
        value.indicatorGroupValues.filter(entry => entry.period==="2010")[0].total;
      res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2020")[0].total +=
        value.indicatorGroupValues.filter(entry => entry.period==="2020")[0].total;
      res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2030")[0].total +=
        value.indicatorGroupValues.filter(entry => entry.period==="2030")[0].total;
      res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2040")[0].total +=
        value.indicatorGroupValues.filter(entry => entry.period==="2040")[0].total;
      res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2050")[0].total +=
        value.indicatorGroupValues.filter(entry => entry.period==="2050")[0].total;
      if(this.props.showPotential) {
        res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="Potential")[0].total +=
          value.indicatorGroupValues.filter(entry => entry.period==="Potential")[0].total;        
      }     
      return res;
    }, {});

    if(combinedChart===true) {
      const allEntriesForIndicatorLine = line.data.scenarios.find(o => o.scenario === scenario).indicators.find(o => o.indicator === chartName);
      const onlyRelevantRegionsLine = allEntriesForIndicatorLine.regions.filter(o => region.includes(o.region));
      const relevantEntriesLine = onlyRelevantRegionsLine.map(region => region.indicatorGroups);
      const flattenLine = relevantEntriesLine.reduce((flat, next) => flat.concat(next) || []);
      var chartDataLine = [];
      flattenLine.reduce( (res, value) => {
        if(!res[value.indicatorGroup]) {
          res[value.indicatorGroup] = {
            indicatorGroup: value.indicatorGroup,
            indicatorGroupValues: [
              {period: "2010", total: 0},
              {period: "2020", total: 0},
              {period: "2030", total: 0},
              {period: "2040", total: 0},
              {period: "2050", total: 0}
            ]
          };
          chartDataLine.push(res[value.indicatorGroup]);
        }
        res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2010")[0].total +=
          value.indicatorGroupValues.filter(entry => entry.period==="2010")[0].total;
        res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2020")[0].total +=
          value.indicatorGroupValues.filter(entry => entry.period==="2020")[0].total;
        res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2030")[0].total +=
          value.indicatorGroupValues.filter(entry => entry.period==="2030")[0].total;
        res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2040")[0].total +=
          value.indicatorGroupValues.filter(entry => entry.period==="2040")[0].total;
        res[value.indicatorGroup].indicatorGroupValues.filter(entry => entry.period==="2050")[0].total +=
          value.indicatorGroupValues.filter(entry => entry.period==="2050")[0].total;
        return res;
      }, {});    
    }

    let maxY2 = 1;
    let minY2 = 0;
    if(combinedChart===true) {
      maxY2 = this.props.maxY2;
      minY2 = this.props.minY2;
    }

    let yDomain = [0, 1];
    if(this.props.minY<0 || minY2<0) {
      let stackedRatio = this.props.minY/this.props.maxY;
      let lineRatio = minY2/maxY2;
      yDomain = stackedRatio<lineRatio ? [stackedRatio,1] : [lineRatio,1];
    }

    const colors = [
      "#5cbae6", "#b6d957", "#fac364", "#8cd3ff", "#d998cb", "#f2d249", "#93b9c6", "#ccc5a8",   
      "#ffcc00", "#ff9900", "#ff6600", "#ff0000", "#990000", "#ff0099", "#cc3399",
      "#990066", "#660066", "#660099", "#3366cc", "#33ccff", "#99cc33", "#66cc00",
      "#aad199", "#45535c", "#471442", "#612e30", "#7a713c", "#09e682", "#160154", "#fc53ec",
      "#454023", "#4b7060", "#4221a6", "#f2aceb", "#ede095", "#0395f7", "#7346fa", "#82627f"
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
          {combinedChart===true &&
            <VictoryAxis
              dependentAxis
              key={3}
              offsetX={330}
              label={this.props.label2}
              style={{
                axis: { stroke: 'gray' },
                axisLabel: { fill: 'gray', padding: -50},
                ticks: { padding: -25 },
                tickLabels: { fill: 'gray', textAnchor: 'start', fontSize: '8px' }
              }}              
              tickFormat={(t) => `${this.props.Y2Percentage===false ? (t*maxY2) : (t*maxY2*100)+'%'}`}
              tickValues={[0, 0.25, 0.5, 0.75, 1.0]}
            />
          }          
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
          <VictoryGroup offset={20} style={{ data: { width: 10}}}>
            <VictoryStack>
              {              
                chartData.map(
                  (chartGroup, i) => (
                    <VictoryArea 
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
          </VictoryGroup> 
          {(combinedChart===true) &&
            <VictoryGroup>
              <VictoryLine
                data={
                  chartDataLine[0].indicatorGroupValues.map(
                    entry => (
                      {...entry}
                    )                    
                  )
                }
                x='period'
                style={{ data: { stroke: 'red' }, labels: {fontSize: '8px'} }}
                y={(datum) => datum['total'] / maxY2}
                animate={{ duration: 500 }}
              />
            </VictoryGroup>
          }
          </VictoryChart>
      </div>
    )
  }
}

StackedBarChart.defaultProps = {
  divideValues: 1,
  showPotential: false
}

StackedBarChart.propTypes = {
  selectedScenario: PropTypes.string.isRequired,
  selectedRegion: PropTypes.array.isRequired, 
  chartName: PropTypes.string.isRequired,
  chartTitle: PropTypes.string.isRequired,
  combinedChart: PropTypes.bool.isRequired,
  minY: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired,
  minY2: PropTypes.number,
  maxY2: PropTypes.number,  
  label: PropTypes.string.isRequired,
  divideValues: PropTypes.number,
  label2: PropTypes.string,
  Y2Percentage: PropTypes.bool,
  showPotential: PropTypes.bool
}

export default StackedBarChart;