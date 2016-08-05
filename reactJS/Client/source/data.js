// var COST_ID = {
//     water: 0,
//     electricity: 1,
//     other: 2
// };

var waterCostsData = [
    ["2015/03/09", 123, 120, "/"],
    ["2015/04/10", 20, 112, "/"],
    ["2015/06/11", 78, 125, 100],
    ["2015/08/12", 11, 112, 200],
    ["2015/11/13", 25, 145, "/"],
    ["2016/02/14", 0, 158, 10]
];

var electricityCostsData = [
    ["2015/04/12", 12, 80, 200],
    ["2015/06/28", 34, 182, 100],
    ["2015/10/26", 121, 160, "/"],
    ["2015/11/12", 10, 130, 50],
    ["2016/01/13", 23, 85, 100],
    ["2016/03/02", 65, 96, "/"]
];

var otherCostsData = [];


module.exports = {
    waterCostsData: waterCostsData,
    electricityCostsData: electricityCostsData,
    otherCostsData: otherCostsData
};