$(document).ready(function() {

    // Backend Order
    $('#orderSupportSelect').click(function(){
      if ( $('#orderSupportFormContainer').css('display') == 'none' ) {
        $('#orderSupportFormContainer').css('display','block');
        $('#supportTypeSelect').css('display','none'); 
      }
      else {
        $('#orderSupportFormContainer').css('display','none');
        $('#supportTypeSelect').css('display','block');
      }
    });

    $('#cancelOrderSupportButton').click(function(){
      if ( $('#orderSupportFormContainer').css('display') == 'block' ) {
        $('#orderSupportFormContainer').css('display','none');
        $('#supportTypeSelect').css('display','block'); 
      }
      else {
        $('#orderSupportFormContainer').css('display','block');
        $('#supportTypeSelect').css('display','none');
      }
    });

    // Public Sales
    $('#publicSalesSelect').click(function(){
      if ( $('#publicSalesFormContainer').css('display') == 'none' ) {
        $('#publicSalesFormContainer').css('display','block');
        $('#publicSupportTypeSelect').css('display','none'); 
      }
      else {
        $('#publicSalesFormContainer').css('display','none');
        $('#publicSupportTypeSelect').css('display','block');
      }
    });

    $('#cancelSalesSupportButton').click(function(){
      if ( $('#publicSalesFormContainer').css('display') == 'block' ) {
        $('#publicSalesFormContainer').css('display','none');
        $('#publicSupportTypeSelect').css('display','block'); 
      }
      else {
        $('#publicSalesFormContainer').css('display','block');
        $('#publicSupportTypeSelect').css('display','none');
      }
    });

    // public Support
    $('#publicSupportSelect').click(function(){
      if ( $('#publicSupportFormContainer').css('display') == 'none' ) {
        $('#publicSupportFormContainer').css('display','block');
        $('#publicSupportTypeSelect').css('display','none'); 
      }
      else {
        $('#publicSupportFormContainer').css('display','none');
        $('#publicSupportTypeSelect').css('display','block');
      }
    });

    $('#cancelPublicSupportButton').click(function(){
      if ( $('#publicSupportFormContainer').css('display') == 'block' ) {
        $('#publicSupportFormContainer').css('display','none');
        $('#publicSupportTypeSelect').css('display','block'); 
      }
      else {
        $('#publicSupportFormContainer').css('display','block');
        $('#publicSupportTypeSelect').css('display','none');
      }
    });

    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');

    $('.nav-tabs a').click(function (e) {
      $(this).tab('show');
      var scrollmem = $('body').scrollTop() || $('html').scrollTop();
      window.location.hash = this.hash;
      $('html,body').scrollTop(scrollmem);
    });

  // Defaults
  Chart.defaults.global.defaultFontFamily = "Roboto";
  // Keywords by Position
  keywordsByPosition = document.getElementById('keywordsByPosition').getContext('2d');
  keywordsByPosition.height = 200;

  easyWinsByPosition = document.getElementById('easyWinsByPosition').getContext('2d');

  keywordPositionAndTraffic = document.getElementById('keywordPositionAndTraffic').getContext('2d');
  
  var chart = new Chart(keywordsByPosition, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["1", "2 - 5", "6 - 10", "11 - 20", "21 - 50", "50+"],
        datasets: [{
            label: "Keywords",
            backgroundColor: '#A8F3B5',
            data: [0, 10, 5, 2, 20, 30, 45],
        }],
    },

    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
          ticks: {
            fontStyle: 'bold',
            color: '#646464',
          }
        }],
        yAxes: [{
          gridLines: {
            color: '#D9D9D9',
          },
        }],
        ticks: [{
          fontColor: '#9B9B9B',
        }],
      },
    }
  });

  var chart = new Chart(easyWinsByPosition, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["1 - 3", "4 - 10", "11 - 30", "30+"],
        datasets: [{
            label: "Keywords",
            backgroundColor: '#A8F3B5',
            data: [0, 10, 5, 2],
        }],
    },

    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
          ticks: {
            fontStyle: 'bold',
            color: '#646464',
          }
        }],
        yAxes: [{
          gridLines: {
            color: '#D9D9D9',
          },
        }],
        ticks: [{
          fontColor: '#9B9B9B',
        }],
      },
    }
  });

  // Keyword by position and traffic chart


  var x = {
    datasets: [{
      label: '1 - 3',
      backgroundColor: 'red',
      data: [
        3,
        5,
        20,
        15
      ]
    },
    {
      label: '4 - 10',
      backgroundColor: 'blue',
      data: [
        1,
        4,
        2,
        9
      ]

    },
    {
      label: '11 - 30',
      backgroundColor: 'green',
      data: [
        1,
        4,
        2,
        9
      ]

    },
    {
      label: '30+',
      backgroundColor: 'purple',
      data: [
        1,
        4,
        2,
        9
      ]
    }]
  };

  var chart = new Chart(keywordPositionAndTraffic, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["1 - 3", "4 - 10", "11 - 30", "30+"],
        datasets: [{
            label: "Keywords",
            backgroundColor: '#A8F3B5',
            data: x,
          },
          {
          label: 'Line Dataset',
          data: [50, 50, 50, 50],

          // Changes this dataset to become a line
          type: 'line'
        }],
    },

    options: {
      legend: {
        display: false,
      },
      responsive: true,
      scales: {
        xAxes: [{
          stracked: true,
          gridLines: {
            display: false,
          },
          ticks: {
            fontStyle: 'bold',
            color: '#646464',
          }
        }],
        yAxes: [{
          stacked: true,
          gridLines: {
            color: '#D9D9D9',
          },
        }],
        ticks: [{
          fontColor: '#9B9B9B',
        }],
      },
    }
  });

  
  
});

