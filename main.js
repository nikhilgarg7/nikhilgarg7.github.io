
const slideshowData = [
  { title: "Average Horsepower for Each Manufacturer", content: "This narrative visualization will show patterns in car production during the year 1985. This first slide contains a bar chart showing the average horsepower for cars produced by manufacturers in 1985. With this graph, readers will notice that manufacturers that are considered more expensive or high end tend to have more horsepower, while brands that are usually considered to be cheaper brands tend to produce cars with lower horsepower." },
  { title: "Horsepower v. Price", content: "This slide shows the relationship between horsepower and price. In addition, each point also indicates whether it is a gas or diesel powered car. Following the conclusions drawn from the previous slide, it is clear that there is a positive relationship between price and horsepower, meaning that more expensive cars tend to be more powerful. By looking at the color of the dots, it is also apparent that gas powered cars generally have more power than diesel powered cars." },
  { title: "Cars by Type", content: "This slide contains a pie chart depicting the number of each type of car in the dataset and their proportions on the pie chart. By looking at the pie chart, it is clear that sedans and hatchbacks were the most commonly produced cars in 1985." },
  { title: "Fuel Efficiency", content: "This final slide shows the relationship between city fuel efficiency and highway fuel efficiency. This slide is also interactive as you can filter by any manufacturer to see how efficient their cars are. Through this, it is possible to determine which manufacturers are more focused more on fuel economy, and if any of them are more focused on city fuel efficiency or highway fuel efficiency."}
];

let currentSlideIndex = 0;

function createSlideshow(data) {
  const slideshowContainer = d3.select("#slideshow");

  const slides = slideshowContainer
    .selectAll(".slide")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "slide")
    .style("display", (d, i) => (i === 0 ? "block" : "none"));

  slides.append("h2").text((d) => d.title);
  slides.append("p").text((d) => d.content);

  window.slides = slides;
}

function handleButtonClick() {
  currentSlideIndex = (currentSlideIndex + 1) % slideshowData.length;

  showSlide(currentSlideIndex);

  if (currentSlideIndex === slideshowData.length - 1) {
    d3.select("#changeSlideBtn").style("display", "none");

    showInteractiveContent();
  }
}

d3.select("#changeSlideBtn").on("click", handleButtonClick);

function showInteractiveContent() {
    removeGraph();


    const margin = { top: 20, right: 20, bottom: 75, left: 60 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
        .select("#slideshow")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    d3.csv('https://raw.githubusercontent.com/Opensourcefordatascience/Data-sets/master/automotive_data.csv', d3.autoType).then(function (data) {
        data = data.filter(function(d) {
            if(isNaN(d['city-mpg']) || isNaN(d['highway-mpg'])) {
                return false;
            }
            return true;
        });
        function updatePlot(newMake) {
            const filterData = data.filter((d) => d.make === newMake);
            x.domain([0, d3.max(data, (d) => d['city-mpg'])]);
            y.domain([0, d3.max(data, (d) => d['highway-mpg'])]);

            const circles = svg.selectAll("circle").data(filterData);
            circles.exit().remove();

            circles
                .enter()
                .append("circle")
                .attr("cx", (d) => x(d['city-mpg']))
                .attr("cy", (d) => y(d['highway-mpg']))
                .attr("r", 2);

            circles
                .attr("cx", (d) => x(d['city-mpg']))
                .attr("cy", (d) => y(d['highway-mpg']));
        }

        const makes = Array.from(new Set(data.map((d) => d.make)));
        const dropdown = d3.select("#slideshow")
            .append("select")
            .on("change", function () {
                const newCat = d3.select(this).property("value");
                updatePlot(newCat);
            });
        
        dropdown
            .selectAll("option")
            .data(makes)
            .enter()
            .append("option")
            .attr("value", (d) => d)
            .text((d) => d);

        updatePlot(makes[0]);

        svg
            .append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("g").call(d3.axisLeft(y));

        svg.append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("y", -35)
            .attr("x", -20)
            .text("Highway Fuel Efficiency (MPG)");

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("y", 350)
            .attr("x", 300)
            .text("City Fuel Efficiency (MPG)");
    });

    d3.select("#slideshow").style("background-color", "#f0f0f0");
}

createSlideshow(slideshowData);

function handleButtonClick() {
    removeGraph();

    currentSlideIndex = (currentSlideIndex + 1) % slideshowData.length;

    showSlide(currentSlideIndex);

    if (currentSlideIndex === slideshowData.length - 1) {
        d3.select("#changeSlideBtn").style("display", "none");
    } else {
        d3.select('#changeSlideBtn').style("display", "block");
    }
}
  
function removeGraph() {
    d3.select("#slideshow").selectAll("svg").remove();
}

function showSlide(index) {
// Access the "slides" variable from the global scope
    const slides = window.slides;
    slides.style("display", (d, i) => (i === index ? "block" : "none"));

    if (index === 0) {
        createBarChart();
    } else if (index === 1) {
        createScatterPlot();
    } else if (index === 2) {
        createPieChart();
    } else if (index === 3) {
        showInteractiveContent();
    }
}

function createBarChart() {
    const margin = { top: 20, right: 20, bottom: 100, left: 50 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    const svg = d3
        .select("#slideshow")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    d3.csv('https://raw.githubusercontent.com/Opensourcefordatascience/Data-sets/master/automotive_data.csv', d3.autoType).then(function (data) {
        console.log(data);
        data = data.filter(function(d) {
            if(isNaN(d.horsepower)) {
                return false;
            }
            return true;
        });

        x.domain(data.map((d) => d.make));
        y.domain([0, d3.max(data, (d) => d.horsepower)]);


        svg
            .selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", (d) => x(d.make))
            .attr("width", x.bandwidth())
            .attr("y", (d) => y(d.horsepower))
            .attr("height", (d) => height - y(d.horsepower))
            .attr("fill", "#13294bff");

        svg
            .append("g")
            .attr("transform", "translate(0," + height + ")")
            // .attr("transform", "rotate(-65)")
            .call(d3.axisBottom(x))
            .selectAll("text")  
                .style("text-anchor", "end")
                .attr("dx", "-1em")
                .attr("dy", "-0.5em")
                .attr("transform", "rotate(-65)");

        svg.append("g").call(d3.axisLeft(y));

        svg.append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("y", -35)
            .attr("x", -margin.top - 50)
            .text("Average Horsepower (HP)");

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("y", 375)
            .attr("x", 300)
            .text("Manufacturer");
    });
}

createBarChart();
  
function createScatterPlot() {
    const margin = { top: 20, right: 20, bottom: 75, left: 60 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
        .select("#slideshow")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);
    const color = d3.scaleOrdinal()
        .domain(["gas", "diesel"])
        .range(["#13294bff", "#E84A27FF"]);

    d3.csv('https://raw.githubusercontent.com/Opensourcefordatascience/Data-sets/master/automotive_data.csv', d3.autoType).then(function (data) {
        x.domain([0, d3.max(data, (d) =>d.price)]);
        y.domain([0, d3.max(data, (d) => d.horsepower)]);
        data = data.filter(function(d) {
            if(isNaN(d.horsepower) || isNaN(d.price)) {
                return false;
            }
            return true;
        });

        svg
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", (d) => x(d.price))
            .attr("cy", (d) => y(d.horsepower))
            .attr("r", 2)
            .attr("fill", (d) => color(d['fuel-type']));

        svg
            .append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("g").call(d3.axisLeft(y));

        svg.append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("y", -35)
            .attr("x", -margin.top - 50)
            .text("Horsepower (HP)");

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("y", 350)
            .attr("x", 300)
            .text("Price ($)");
        
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("y", 220)
            .attr("x", 450)
            .text("Navy Blue represents gas powered cars");
        
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("y", 240)
            .attr("x", 450)
            .text("Orange represents diesel powered cars");
    });

}

function createPieChart() {
    const width = 700;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 30;



    const svg = d3
        .select("#slideshow")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const color = d3.scaleOrdinal(d3.schemeCategory10);


    d3.csv('https://raw.githubusercontent.com/Opensourcefordatascience/Data-sets/master/automotive_data.csv', d3.autoType).then(function (data) {

        const counts = {};
        data.forEach((row) => {
            console.log(row);
            const category = row['body-style'];
            counts[category] = (counts[category] || 0) + 1;
        });
        console.log(data);
        const newData = Object.keys(counts).map((category) => ({
            category,
            value: counts[category],
        }));

        console.log(newData);
        const arc = d3.arc().outerRadius(radius - 10).innerRadius(0);
        const pie = d3.pie().value((d) => d.value);
        const arcs = svg.selectAll(".arc").data(pie(newData)).enter().append("g").attr("class", "arc");

        arcs
            .append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => color(i))
            .attr("stroke", "#fff");

        arcs
            .append("text")
            .attr("transform", (d) => {
                var center = arc.centroid(d);
                return "translate(" + center[0] * 2.3 + "," + center[1] * 2.3 + ")";})
            .attr("dy", "0.01em")
            .text((d) => d.data.category + " (" + d.data.value + ")");
    });
}
