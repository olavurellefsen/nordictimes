import stackedBar from '../data/stackedBar';

export const getChartData = (scenario, chartName, region) => {
    const allEntriesForIndicator = stackedBar.data.scenarios.find(o => o.scenario === scenario).indicators.find(o => o.indicator === chartName);
    const onlyRelevantRegions = allEntriesForIndicator.regions.filter(o => region.includes(o.region));
    const relevantEntries = onlyRelevantRegions.map(region => region.indicatorGroups);
    const flatten = relevantEntries.reduce((flat, next) => flat.concat(next) || []);
    let chartData = [];
    flatten.reduce( (res, value) => {
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
      return res;
    }, {});
    return chartData
}