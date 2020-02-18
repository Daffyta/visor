var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jaunary', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Pymes registradas',
            data: [12, 19, 3, 5, 2, 3, 5],
            borderColor: [
              'rgb(255, 0, 128)'
            ],
            borderWidth: 1
        },
        {
          label: 'Pymes activas',
          data: [3, 5, 20, 4, 8, 13,15],
          borderColor: [
              'rgb(61, 162, 235)',
          ],
          borderWidth: 1
      }
    ]
  }
});