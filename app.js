// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (
//   localStorage.getItem("color-theme") === "dark" ||
//   (!("color-theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
//   console.log("first");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
// var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// // Change the icons inside the button based on previous settings
// if (
//   localStorage.getItem("color-theme") === "dark" ||
//   (!("color-theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   themeToggleLightIcon.classList.remove("hidden");
// } else {
//   themeToggleDarkIcon.classList.remove("hidden");
// }

// var themeToggleBtn = document.getElementById("theme-toggle");

// themeToggleBtn.addEventListener("click", function () {
//   // toggle icons inside button
//   themeToggleDarkIcon.classList.toggle("hidden");
//   themeToggleLightIcon.classList.toggle("hidden");

//   // if set via local storage previously
//   if (localStorage.getItem("color-theme")) {
//     if (localStorage.getItem("color-theme") === "light") {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("color-theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("color-theme", "light");
//     }

//     // if NOT set via local storage previously
//   } else {
//     if (document.documentElement.classList.contains("dark")) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("color-theme", "light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("color-theme", "dark");
//     }
//   }
// });

// The Dashboard line chart
const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
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
    options
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
  document.getElementById("area-chart-offlineUsers") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("area-chart-offlineUsers"),
    options
  );
  chart.render();
}

// The Donut Chart

const getChartOptions = () => {
  return {
    series: [35.1, 23.5, 2.4, 5.4],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      height: 320,
      width: "100%",
      type: "donut",
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
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Unique visitors",
              fontFamily: "Inter, sans-serif",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return "$" + sum + "k";
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: function (value) {
                return value + "k";
              },
            },
          },
          size: "80%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };
};

if (
  document.getElementById("donut-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const chart = new ApexCharts(
    document.getElementById("donut-chart"),
    getChartOptions()
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
        fontFamily: "Inter, sans-serif",
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
        fontFamily: "Inter, sans-serif",
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
    fontFamily: "Inter, sans-serif",
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
        fontFamily: "Inter, sans-serif",
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
        fontFamily: "Inter, sans-serif",
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
      data: [250, 100, 250, 400, 250, 300, 500, 340, 100, 280, 650, 620],
      color: "#dc2626",
    },
    {
      name: "Designer Edition",
      data: [500, 340, 100, 280, 650, 620, 250, 100, 250, 400, 250, 300],
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
    fontFamily: "Inter, sans-serif",
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



const optionsColumnChart = {
  series: [
    {
      name: "Income",
      color: "#31C48D",
      data: ["1420", "1620", "1820", "1420", "1650", "2120"],
    },
    {
      name: "Expense",
      data: ["788", "810", "866", "788", "1100", "1200"],
      color: "#F05252",
    }
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
      borderRadius: 6,
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
      return "$" + value
    }
  },
  xaxis: {
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      },
      formatter: function(value) {
        return "$" + value
      }
    },
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
        fontFamily: "Inter, sans-serif",
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
