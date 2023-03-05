const ctxFront = document.getElementById('chartFront');
const ctxBack = document.getElementById('chartBack');
const ctxOthers = document.getElementById('chartOthers');


  new Chart(ctxFront, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'React'],
      datasets: [{
        label: 'Percentual de Skills',
        data: [90, 80, 75, 70],
        backgroundColor: 'rgba(67, 203, 176, 0.4)',
        hoverBackgroundColor: 'rgba(67, 203, 176, 10)',
        barThickness: 18,
        borderColor: 'rgba(87, 224, 197, 0.4)',
        borderWidth: 1
      }]
    },
    options: {
        indexAxis: 'y',
        responsive: true
    }
  });
  
  new Chart(ctxBack, {
    type: 'bar',
    data: {
      labels: ['PHP', 'Python', 'C++', 'NodeJS'],
      datasets: [{
        label: 'Percentual de Skills',
        data: [75, 90, 70, 60],
        backgroundColor: 'rgba(67, 203, 176, 0.4)',
        hoverBackgroundColor: 'rgba(67, 203, 176, 10)',
        barThickness: 18,
        borderColor: 'rgba(87, 224, 197, 0.4)',
        borderWidth: 1
      }]
    },
    options: {
        indexAxis: 'y',
        responsive: true
    }
  });

  new Chart(ctxOthers, {
    type: 'bar',
    data: {
      labels: ['MySQL', 'Figma', 'Git', 'AdobeXD'],
      datasets: [{
        label: 'Percentual de Skills',
        data: [90, 80, 90, 75],
        backgroundColor: 'rgba(67, 203, 176, 0.4)',
        hoverBackgroundColor: 'rgba(67, 203, 176, 10)',
        barThickness: 18,
        borderColor: 'rgba(87, 224, 197, 0.4)',
        borderWidth: 1
      }]
    },
    options: {
        indexAxis: 'y',
        responsive: true
    }
  });