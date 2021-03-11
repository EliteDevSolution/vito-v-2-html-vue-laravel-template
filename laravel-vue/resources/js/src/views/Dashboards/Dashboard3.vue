<template>
  <!-- Page Content  -->
  <b-container fluid>
    <b-row>
      <b-col lg="3">
        <iq-card>
          <template v-slot:body>
            <img src="../../assets/images/page-img/41.png" class="img-fluid iq-image-full w-100">
            <TimeLine :items="timelineItems" />
            <iq-card>
              <template v-slot:headerTitle>
                <h5>Country</h5>
              </template>
            <template v-slot:body>
            <div class="iq-details">
              <span class="title">United States</span>
              <div class="percentage float-right text-primary">95 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <Progressbar :value="95" />
              </div>
            </div>
            <div class="iq-details mt-3">
              <span class="title">India</span>
              <div class="percentage float-right text-success">75 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <Progressbar :value="80" color="success" />
              </div>
            </div>
            <div class="iq-details mt-3">
              <span class="title">Australia</span>
              <div class="percentage float-right text-info">72 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                  <Progressbar :value="72" color="info" />
              </div>
            </div>
            </template>
           </iq-card>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="9">
        <b-row>
          <b-col xl="9">
            <b-row>
              <b-col sm="12">
                <iq-card >
                  <template v-slot:body>
                    <b-row>
                      <b-col md="6" lg="3">
                        <div class="d-flex align-items-center mb-3 mb-lg-0">
                          <div class="rounded-circle iq-card-icon iq-bg-primary mr-3"> <i class="ri-mail-open-line"></i></div>
                          <div class="text-left">
                            <h4>425</h4>
                            <p class="mb-0">Mails</p>
                          </div>
                        </div>
                      </b-col>
                      <b-col md="6"  lg="3">
                        <div class="d-flex align-items-center mb-3 mb-lg-0">
                          <div class="rounded-circle iq-card-icon iq-bg-info mr-3"> <i class="ri-message-3-line"></i></div>
                          <div class="text-left">
                            <h4>110</h4>
                            <p class="mb-0">Message</p>
                          </div>
                        </div>
                      </b-col>
                      <b-col md="6"  lg="3">
                        <div class="d-flex align-items-center mb-3 mb-md-0">
                          <div class="rounded-circle iq-card-icon iq-bg-danger mr-3"> <i class="ri-group-line"></i></div>
                          <div class="text-left">
                            <h4>8000</h4>
                            <p class="mb-0">Users</p>
                          </div>
                        </div>
                      </b-col>
                      <b-col md="6"  lg="3">
                        <div class="d-flex align-items-center mb-3 mb-md-0">
                          <div class="rounded-circle iq-card-icon iq-bg-warning mr-3"> <i class="ri-task-line"></i></div>
                          <div class="text-left">
                            <h4>690</h4>
                            <p class="mb-0">Task</p>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </template>
                </iq-card>
              </b-col>
              <b-col lg="8">
                <iq-card>
                  <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                      <h4 class="card-title">Monthly sales trend </h4>
                    </div>
                    <div class="iq-card-header-toolbar d-flex align-items-center">
                      <div class="custom-control custom-switch custom-switch-text custom-control-inline">
                        <div class="custom-switch-inner">
                          <input type="checkbox" class="custom-control-input" id="switch-title" checked="">
                          <label class="custom-control-label" for="switch-title" data-on-label="On" data-off-label="Off">
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="iq-card-body rounded pb-primary">
                    <div class="d-flex justify-content-around">
                      <div class="price-week-box mr-5">
                        <span>This Week</span>
                        <h3>$<Counter :value="35000" /> <i class="ri-funds-line text-success font-size-18"></i></h3>
                      </div>
                      <div class="price-week-box">
                        <span>Last Week</span>
                        <h3>$<Counter :value="35000" /> <i class="ri-funds-line text-danger font-size-18"></i></h3>
                      </div>
                    </div>
                  </div>
                  <div id="menu-chart-02">
                    <ApexChart element="menu-chart-02" :chartOption="chart1"/>
                  </div>
                </iq-card>
              </b-col>
              <b-col lg="4">
                <iq-card>
                  <template v-slot:body>
                    <div id="menu-chart-03">
                      <ApexChart element="menu-chart-03" :chartOption="chart2"/>
                    </div>
                  </template>
                </iq-card>
                <iq-card >
                  <div class="iq-card-body rounded">
                    <p>Online sells</p>
                    <h5>6,000</h5>
                    <div id="chart-3">
                      <ApexChart element="chart-3" :chartOption="chart3"/>
                    </div>
                  </div>
                </iq-card>
              </b-col>
            </b-row>
          </b-col>
          <b-col xl="3">
            <iq-card>
              <template v-slot:body>
                <h2 class="mb-0"><span>$</span><Counter :value="3450" /></h2>
                <p class="mb-0">Your Current Balance</p>
                <h6 class="mb-4"><span class="text-success">20%</span> ($520)</h6>
                <a href="javascript:void();" class="btn btn-danger d-block mt-5 mb-5"> Add Credit</a>
                <hr>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="col-sm-6">
                    <span class="title">Sales: 75%</span>
                    <div class="iq-progress-bar-linear d-inline-block w-100">
                      <div class="iq-progress-bar">
                        <Progressbar :value="75" />
                      </div>
                    </div>
                  </div>
                  <b-col sm="6">
                    <span class="title">Referal: 25%</span>
                    <div class="iq-progress-bar-linear d-inline-block w-100">
                      <div class="iq-progress-bar">
                        <Progressbar :value="25" color="warning" />
                      </div>
                    </div>
                  </b-col>
                </div>
              </template>
            </iq-card>
            <iq-card >
              <template v-slot:body>
                <h2 class="d-inline-block">75%</h2><span class="d-inline-block ml-2">5% up</span>
                <p>From the Last Month</p>
              </template>
              <div id="chart-8">
                <ApexChart element="chart-8" :chartOption="chart4"/>
              </div>
            </iq-card>
          </b-col>
          <b-col lg="6">
            <iq-card>
              <template v-slot:headerTitle>
                  <h4 class="card-title">Recent Order </h4>
              </template>
              <template v-slot:body>
                <table class="table mb-0 table-borderless">
                  <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">User</th>
                    <th scope="col">Product</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td class="text-center">
                      <img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/user-01.jpg" alt="profile">
                    </td>
                    <td>Anna Sthesia</td>
                    <td>Electronic</td>
                    <td>#1456</td>
                    <td>$300</td>
                    <td><div class="badge badge-pill badge-success">Paid</div></td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/user-02.jpg" alt="profile">
                    </td>
                    <td>Brock Lee</td>
                    <td>Laptop</td>
                    <td>#8965</td>
                    <td>$1200</td>
                    <td><div class="badge badge-pill badge-primary">Shipped</div></td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/user-03.jpg" alt="profile">
                    </td>
                    <td>Dan Druff</td>
                    <td>Mobile</td>
                    <td>#6325</td>
                    <td>$600</td>
                    <td><div class="badge badge-pill badge-danger">Pending</div></td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/user-04.jpg" alt="profile">
                    </td>
                    <td>Lynn Guini</td>
                    <td>Bluetooth</td>
                    <td>#4875</td>
                    <td>$200</td>
                    <td><div class="badge badge-pill badge-warning text-white">stoped</div></td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/user-05.jpg" alt="profile">
                    </td>
                    <td>Eric Shun</td>
                    <td>Camera</td>
                    <td>#8956</td>
                    <td>$300</td>
                    <td><div class="badge badge-pill badge-success">Paid</div></td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </iq-card>
          </b-col>
          <b-col lg="6">
            <iq-card>
              <template v-slot:headerTitle>
                  <h4 class="card-title">Top Selling </h4>
              </template>
              <template v-slot:body>
                <table class="table mb-0 table-borderless">
                  <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Sold</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Speakers</td>
                    <td>$80</td>
                    <td>$15</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>DSLR</td>
                    <td>$500</td>
                    <td>$30</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <td>Headphone</td>
                    <td>$30</td>
                    <td>#08</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Desktop</td>
                    <td>$300</td>
                    <td>$20</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>Watch</td>
                    <td>$150</td>
                    <td>$10</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td>$350</td>
                    <td>$05</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td class="pb-0">Tablet</td>
                    <td class="pb-0">$400</td>
                    <td class="pb-0">$10</td>
                    <td class="pb-0">300</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import ApexChart from '../../components/core/charts/ApexChart'
import Counter from '../../components/core/counter/Counter'
export default {
  name: 'Dashboard3',
  mounted () {
    core.index()
    // core.bodyClassCheck('iq-page-menu-horizontal')
  },
  components: { ApexChart, Counter },
  data () {
    return {
      chart1: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#827af3', '#00ca00'],
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],

        xaxis: {
          type: 'datetime',
          categories: ['2018-09-19T00:00:00', '2018-09-19T01:30:00', '2018-09-19T02:30:00', '2018-09-19T03:30:00', '2018-09-19T04:30:00', '2018-09-19T05:30:00', '2018-09-19T06:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart2: {
        chart: {
          height: 280,
          type: 'radialBar'
        },
        plotOptions: {
          hollow: {
            margin: 10,
            size: '30%',
            background: 'transparent',
            image: undefined,
            imageWidth: 64,
            imageHeight: 64
          },
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + '%'
                }
              }
            }
          }
        },
        fill: {},
        stroke: {
          dashArray: 5
        },
        series: [67],
        labels: ['Median Ratio'],
        colors: ['#0084ff']
      },
      chart3: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: true
          },
          group: 'sparklines'

        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          name: 'series1',
          data: [60, 40, 60, 40, 70]
        }],
        colors: ['#fbc647'],

        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart4: {
        chart: {
          height: 150,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        colors: ['#827af3'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 3
        },
        series: [{
          data: [80, 90, 60, 90, 44, 50, 98, 80, 90]
        }],
        markers: {
          size: 4
        },
        yaxis: {
          max: 100
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          }
        },
        legend: {
          show: false
        }
      },
      timelineItems: [{
        color: 'primary',
        title: 'Client Login',
        right: '24 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      },
      {
        color: 'success',
        title: 'Scheduled Maintenance',
        right: '23 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      },
      {
        color: 'danger',
        title: 'Dev Meetup',
        right: '20 November 2019',
        description: 'Bonbon macaroon jelly <a href="">beans gummi</a> bears jelly lollipop apple',
        child: {
          type: 'img',
          items: [
            require('../../assets/images/user/user-05.jpg'),
            require('../../assets/images/user/user-06.jpg'),
            require('../../assets/images/user/user-07.jpg'),
            require('../../assets/images/user/user-08.jpg'),
            require('../../assets/images/user/user-09.jpg'),
            require('../../assets/images/user/user10.jpg')
          ]
        }
      },
      {
        color: 'primary',
        title: 'Client Call',
        right: '19 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      },
      {
        color: 'warning',
        title: 'Mega Event',
        right: '15 November 2019',
        description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
        child: {
          type: 'img',
          items: []
        }
      }
      ]
    }
  }
}
</script>
