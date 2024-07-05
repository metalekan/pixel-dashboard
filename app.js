
const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#147860",
      gradientToColors: ["#147860"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
    strokeDashArray: 2,
    padding: {
      left: 2,
      right: 2,
      top: 0,
    },
  },
  series: [
    {
      name: "New users",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#147860",
    },
  ],
  xaxis: {
    categories: [
      "01 February",
      "02 February",
      "03 February",
      "04 February",
      "05 February",
      "06 February",
      "07 February",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

const optionsRegistered = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#581c87",
      gradientToColors: ["#581c87"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0,
    },
  },
  series: [
    {
      name: "New users",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#581c87",
    },
  ],
  xaxis: {
    categories: [
      "01 February",
      "02 February",
      "03 February",
      "04 February",
      "05 February",
      "06 February",
      "07 February",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

const optionsOfflineUsers = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#991b1b",
      gradientToColors: ["#991b1b"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0,
    },
  },
  series: [
    {
      name: "New users",
      data: [6500, 5418, 4456, 3526, 4356, 1456],
      color: "#991b1b",
    },
  ],
  xaxis: {
    categories: [
      "01 February",
      "02 February",
      "03 February",
      "04 February",
      "05 February",
      "06 February",
      "07 February",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};


const optionsBettingAmount = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "line",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
  },
  grid: {
    show: false,
    strokeDashArray: 2,
    padding: {
      left: 2,
      right: 2,
      top: -26
    },
  },
  series: [
    {
      name: "Betting Amount",
      data: [1500, 2418, 3456, 4526, 5356, 6456, 7500, 8418, 9456, 11526, 12356, 13456],
      color: "#a16207",
    }
  ],
  legend: {
    show: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: true,
      style: {
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
}

const getChartOptions = () => {
  return {
    series: [60, 40],
    labels: ["Direct", "Winnings",],
    colors: ["#eff6ff", "#78350f"],
    chart: {
      height: "100%",
      width: "100%",
      type: "donut",
      borderRadius: '35px',
    },
    stroke: {
      colors: ["transparent"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Wins",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return b;
                }, 0);
                return sum + "%";
              },
            },
            value: {
              show: true,
              offsetY: -20,
              formatter: function (value) {
                return value + "k";
              },
            },
          },
          size: "85%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
    },
    // yaxis: {
    //   labels: {
    //     formatter: function (value) {
    //       return value + "k";
    //     },
    //   },
    // },
    // xaxis: {
    //   labels: {
    //     formatter: function (value) {
    //       return value + "k";
    //     },
    //   },
    //   axisTicks: {
    //     show: false,
    //   },
    //   axisBorder: {
    //     show: true,
    //   },
    // },
  };
  
};

const optionsOverview = {
  // set the labels option to true to show the labels on the X and Y axis
  xaxis: {
    show: true,
    categories: [
      "10/04/2024",
      "11/04/2024",
      "12/04/2024",
      "13/04/2024",
      "14/04/2024",
      "15/04/2024",
      "16/04/2024",
    
    ],
    labels: {
      show: true,
      style: {
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      formatter: function (value) {
        return value;
      },
    },
  },
  series: [
    {
      name: "Developer Edition",
      data: [2500000, 1000000, 3500000, 4000000, 2500000, 3000000],
      color: "#dc2626",
    },
    {
      name: "Designer Edition",
      data: [5000000, 3400000, 2100000, 2800000, 3500000, 6200000],
      color: "#166534",
    },
  ],
  chart: {
    sparkline: {
      enabled: false,
    },
    height: "100%",
    width: "100%",
    type: "area",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#dc2626",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
};

const optionsOverall = {
  // set the labels option to true to show the labels on the X and Y axis
  xaxis: {
    show: true,
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: true,
      style: {
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      formatter: function (value) {
        return value;
      },
    },
  },
  series: [
    {
      name: "Developer Edition",
      data: [250, 100, 250, 400, 250, 300, 500, 340, 100, 280, 650, 1620],
      color: "#be123c",
    },
    {
      name: "Designer Edition",
      data: [500, 340, 100, 280, 950, 620, 250, 100, 850, 400, 250, 300],
      color: "#15803d",
    },
  ],
  chart: {
    sparkline: {
      enabled: false,
    },
    height: "400px",
    width: "100%",
    type: "area",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#dc2626",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  legend: {
    show: false,
  },
grid: {
  show: true,
  strokeDashArray: 1,
  padding: {
    left: 2,
    right: 2,
    top: -46,
  },
},
};

const optionsOverallAnalytics = {
  // set the labels option to true to show the labels on the X and Y axis
  xaxis: {
    show: true,
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: true,
      style: {
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
      formatter: function (value) {
        return value;
      },
    },
  },
  series: [
    {
      name: "Active Users",
      data: [250, 100, 250, 400, 250, 300, 370, 340, 400, 420, 450, 460,],
      color: "#d8b4fe",
    }
  ],
  chart: {
    sparkline: {
      enabled: false,
    },
    height: "400px",
    width: "100%",
    type: "area",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#d8b4fe",
      gradientToColors: ["#d8b4fe"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  legend: {
    show: false,
  },
grid: {
  show: true,
  strokeDashArray: 1,
  padding: {
    left: 2,
    right: 2,
    top: -46,
  },
},
};


// Line Chart
if (document.getElementById("line-chart-ludo") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("line-chart-ludo"), optionsBettingAmount);
  chart.render();
}

if (document.getElementById("line-chart-soccer") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("line-chart-soccer"), optionsBettingAmount);
  chart.render();
}

if (document.getElementById("line-chart-spin") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("line-chart-spin"), optionsBettingAmount);
  chart.render();
}

if (document.getElementById("line-chart-fish") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("line-chart-fish"), optionsBettingAmount);
  chart.render();
}


// Area Chart
if (
  document.getElementById("area-chart-totalRecharge") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-totalRecharge"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-totalRegistered") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-totalRegistered"),
    optionsRegistered
  );
  chart.render();
}

if (
  document.getElementById("area-chart-totalProjects") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-totalProjects"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-totalProjectsLudo") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-totalProjectsLudo"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-totalProjectsSoccer") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-totalProjectsSoccer"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-users") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-users"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-activeUsers") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-activeUsers"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-activeUsersLudo") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-activeUsersLudo"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-activeUsersSoccer") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-activeUsersSoccer"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-activeUsersSpin") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-activeUsersSpin"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-activeUsersFish") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-activeUsersFish"),
    options
  );
  chart.render();
}

if (
  document.getElementById("area-chart-offlineUsers") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-offlineUsers"),
    optionsOfflineUsers
  );
  chart.render();
}

// The Donut Chart

if (
  document.getElementById("donut-chartLudo") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("donut-chartLudo"),
    getChartOptions(),
  );
  chart.render();

  // Get all the checkboxes by their class name
  const checkboxes = document.querySelectorAll(
    '#devices input[type="checkbox"]'
  );

  // Function to handle the checkbox change event
  function handleCheckboxChange(event, chart) {
    const checkbox = event.target;
    if (checkbox.checked) {
      switch (checkbox.value) {
        case "desktop":
          chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
          break;
        case "tablet":
          chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
          break;
        case "mobile":
          chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
          break;
        default:
          chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
      }
    } else {
      chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
    }
  }

  // Attach the event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) =>
      handleCheckboxChange(event, chart)
    );
  });
}

if (
  document.getElementById("donut-chartSoccer") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("donut-chartSoccer"),
    getChartOptions(),
  );
  chart.render();

  // Get all the checkboxes by their class name
  const checkboxes = document.querySelectorAll(
    '#devices input[type="checkbox"]'
  );

  // Function to handle the checkbox change event
  function handleCheckboxChange(event, chart) {
    const checkbox = event.target;
    if (checkbox.checked) {
      switch (checkbox.value) {
        case "desktop":
          chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
          break;
        case "tablet":
          chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
          break;
        case "mobile":
          chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
          break;
        default:
          chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
      }
    } else {
      chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
    }
  }

  // Attach the event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) =>
      handleCheckboxChange(event, chart)
    );
  });
}

if (
  document.getElementById("donut-chartSpin") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("donut-chartSpin"),
    getChartOptions(),
  );
  chart.render();

  // Get all the checkboxes by their class name
  const checkboxes = document.querySelectorAll(
    '#devices input[type="checkbox"]'
  );

  // Function to handle the checkbox change event
  function handleCheckboxChange(event, chart) {
    const checkbox = event.target;
    if (checkbox.checked) {
      switch (checkbox.value) {
        case "desktop":
          chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
          break;
        case "tablet":
          chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
          break;
        case "mobile":
          chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
          break;
        default:
          chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
      }
    } else {
      chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
    }
  }

  // Attach the event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) =>
      handleCheckboxChange(event, chart)
    );
  });
}

if (
  document.getElementById("donut-chartFish") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("donut-chartFish"),
    getChartOptions(),
  );
  chart.render();

  // Get all the checkboxes by their class name
  const checkboxes = document.querySelectorAll(
    '#devices input[type="checkbox"]'
  );

  // Function to handle the checkbox change event
  function handleCheckboxChange(event, chart) {
    const checkbox = event.target;
    if (checkbox.checked) {
      switch (checkbox.value) {
        case "desktop":
          chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
          break;
        case "tablet":
          chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
          break;
        case "mobile":
          chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
          break;
        default:
          chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
      }
    } else {
      chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
    }
  }

  // Attach the event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) =>
      handleCheckboxChange(event, chart)
    );
  });
}


// Graph

if (
  document.getElementById("labels-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("labels-chart"),
    optionsOverview
  );
  chart.render();
}


if (
  document.getElementById("labels-chart-dashboard") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("labels-chart-dashboard"),
    optionsOverall
  );
  chart.render();
}

if (
  document.getElementById("labels-chart-analytics") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("labels-chart-analytics"),
    optionsOverallAnalytics
  );
  chart.render();
}



const optionsColumnChart = {
  series: [
    {
      name: "Fraud Cases",
      color: "#d8b4fe",
      data: ["1420", "1620", "1820", "1420", "1650", "2120", "1420", "1620", "1820", "1420", "1650", "2120"],
    },
    // {
    //   name: "Expense",
    //   data: ["788", "810", "866", "788", "1100", "1200"],
    //   color: "#F05252",
    // }
  ],
  chart: {
    sparkline: {
      enabled: false,
    },
    type: "bar",
    width: "100%",
    height: 400,
    toolbar: {
      show: false,
    }
  },
  fill: {
    opacity: 1,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "100%",
      borderRadiusApplication: "end",
      borderRadius: 8,
      dataLabels: {
        position: "top",
      },
    },
  },
  legend: {
    show: true,
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
    formatter: function (value) {
      return value
    }
  },
  xaxis: {
    labels: {
      show: true,
      style: {
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      },
      formatter: function(value) {
        return value
      }
    },
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    }
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -20
    },
  },
  fill: {
    opacity: 1,
  }
}

if(document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("bar-chart"), optionsColumnChart);
  chart.render();
}

document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Fruit Consumption'
      },
      xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },
      series: [{
          name: 'Jane',
          data: [1, 0, 4]
      }, {
          name: 'John',
          data: [5, 7, 3]
      }]
  });
});
