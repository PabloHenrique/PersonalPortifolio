const ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'React'],
      datasets: [{
        label: 'Percentual de Skills',
        data: [90, 80, 75, 70],
        backgroundColor: 'rgba(67, 203, 176, 0.4)',
        hoverBackgroundColor: 'rgba(67, 203, 176, 10)',
        barThickness: 25,
        borderColor: 'rgba(87, 224, 197, 0.4)',
        borderWidth: 1
      }]
    },
    options: {
        indexAxis: 'y'
    }
  });