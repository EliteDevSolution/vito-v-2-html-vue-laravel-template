<template>
  <!-- Page Content  -->
  <b-container  fluid>
    <b-row>
      <b-col md="6" lg="3">
        <iq-card bodyClass="relative-background">
          <template v-slot:body>
            <div class="d-flex align-items-center">
              <div class="rounded-circle iq-card-icon iq-bg-primary mr-3"> <i class="ri-exchange-dollar-line"></i></div>
              <div class="text-left">
                <h4 class="">425</h4>
                <h5 class="">Investment</h5>
              </div>
            </div>
            <p class=" mb-0 mt-3">Total for This Month.</p>
            <div class="background-image">
              <img src="../../assets/images/page-img/36.png" class="img-fluid">
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" lg="3">
        <iq-card body-class="relative-background">
          <template v-slot:body>
            <div class="d-flex align-items-center">
              <div class="rounded-circle iq-card-icon iq-bg-warning mr-3"> <i class="ri-guide-line"></i></div>
              <div class="text-left">
                <h4 class="">425</h4>
                <h5 class="">Sales</h5>
              </div>
            </div>
            <p class=" mb-0 mt-3">Total for This Month.</p>
            <div class="background-image">
              <img src="../../assets/images/page-img/37.png" class="img-fluid">
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" lg="3">
        <iq-card body-class="relative-background">
          <template v-slot:body>
            <div class="d-flex align-items-center">
              <div class="rounded-circle iq-card-icon iq-bg-danger mr-3"> <i class="ri-money-pound-circle-line"></i></div>
              <div class="text-left">
                <h4 class="">425</h4>
                <h5 class="">Cost</h5>
              </div>
            </div>
            <p class=" mb-0 mt-3">Total for This Month.</p>
            <div class="background-image">
              <img src="../../assets/images/page-img/38.png" class="img-fluid">
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" lg="3">
        <iq-card body-class="relative-background">
          <template v-slot:body>
            <div class="d-flex align-items-center">
              <div class="rounded-circle iq-card-icon iq-bg-info mr-3"> <i class="ri-numbers-line"></i></div>
              <div class="text-left">
                <h4 class="">425</h4>
                <h5 class="">Profit</h5>
              </div>
            </div>
            <p class=" mb-0 mt-3">Total for This Month.</p>
            <div class="background-image">
              <img src="../../assets/images/page-img/39.png" class="img-fluid">
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card style="position: relative;">
          <template v-slot:headerTitle>
              <h4 class="card-title">Earning Growth</h4>
            </template>
            <template v-slot:headerAction>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a href="#" class="nav-link active">Latest</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Month</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">All Time</a>
                </li>
              </ul>
            </template>
          <template v-slot:body>
            <div id="home-Groth-chart" style="height: 410px;">
              <AmChart element="home-chart-06" type="dashboard2" :height="350" />
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <div :style="`background: url(${require('../../assets/images/page-img/40.png')}) no-repeat scroll bottom; background-size: contain; height: 505px;`">
          </div>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card>
          <template v-slot:headerTitle>
              <h4 class="card-title">Perfomance</h4>
          </template>
          <template v-slot:body>
            <div id="home-perfomer-chart">
              <ApexChart element="chart-13" :chartOption="chart13"/>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card>
          <template v-slot:headerTitle>
              <h4 class="card-title">Users</h4>
          </template>
          <template v-slot:body>
            <ul class="perfomer-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><img src="../../assets/images/user/user-01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="media-support-info ml-3">
                  <h6>Paul Molive</h6>
                  <p class="mb-0 font-size-12">UI/UX Designer</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <div class="dropdown">
                                       <span class="dropdown-toggle text-primary" id="dropdownMenuButton41" data-toggle="dropdown" aria-expanded="false" role="button">
                                          <i class="ri-more-2-line"></i>
                                       </span>
                    <div class="dropdown-menu dropdown-menu-right" style="">
                      <a class="dropdown-item" href="#"><i class="ri-eye-line mr-2"></i>View</a>
                      <a class="dropdown-item" href="#"><i class="ri-bookmark-line mr-2"></i>Appointment</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><img src="../../assets/images/user/user-02.jpg" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="media-support-info ml-3">
                  <h6>Barb Dwyer</h6>
                  <p class="mb-0 font-size-12">Developer</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <div class="dropdown show">
                                       <span class="dropdown-toggle text-primary" id="dropdownMenuButton42" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i class="ri-more-2-line"></i>
                                       </span>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="ri-eye-line mr-2"></i>View</a>
                      <a class="dropdown-item" href="#"><i class="ri-bookmark-line mr-2"></i>Appointment</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><img src="../../assets/images/user/user-03.jpg" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="media-support-info ml-3">
                  <h6>Terry Aki</h6>
                  <p class="mb-0 font-size-12">Tester</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <div class="dropdown show">
                                       <span class="dropdown-toggle text-primary" id="dropdownMenuButton43" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i class="ri-more-2-line"></i>
                                       </span>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="ri-eye-line mr-2"></i>View</a>
                      <a class="dropdown-item" href="#"><i class="ri-bookmark-line mr-2"></i>Appointment</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><img src="../../assets/images/user/user-04.jpg" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="media-support-info ml-3">
                  <h6>Robin Banks</h6>
                  <p class="mb-0 font-size-12">Web Designer</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <div class="dropdown show">
                                       <span class="dropdown-toggle text-primary" id="dropdownMenuButton44" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i class="ri-more-2-line"></i>
                                       </span>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="ri-eye-line mr-2"></i>View</a>
                      <a class="dropdown-item" href="#"><i class="ri-bookmark-line mr-2"></i>Appointment</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><img src="../../assets/images/user/user-05.jpg" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="media-support-info ml-3">
                  <h6>Barry Wine</h6>
                  <p class="mb-0 font-size-12">Developer</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <div class="dropdown show">
                                       <span class="dropdown-toggle text-primary" id="dropdownMenuButton45" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i class="ri-more-2-line"></i>
                                       </span>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#"><i class="ri-eye-line mr-2"></i>View</a>
                      <a class="dropdown-item" href="#"><i class="ri-bookmark-line mr-2"></i>Appointment</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card>
          <template v-slot:body>
            <h6>Graph Profit Margin</h6>
            <h2>80%</h2>
          </template>
          <div id="chart-1">
          <ApexChart element="chart-1" :chartOption="chart1"/>
          </div>
        </iq-card>
        <iq-card>
          <template v-slot:body>
            <h6>Total revenue</h6>
            <h2>$9250</h2>
          </template>
          <div id="chart-2">
          <ApexChart element="chart-2" :chartOption="chart2"/>
          </div>
        </iq-card>
      </b-col>
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
              <h4 class="card-title">Recent Tranjection</h4>
          </template>
          <template v-slot:body>
            <table class="table mb-0 table-borderless">
              <thead>
              <tr>
                <th scope="col">Price</th>
                <th scope="col">Amount</th>
                <th scope="col">When</th>
                <th scope="col">Status</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>0.001245689</td>
                <td>$25632.00</td>
                <td>10 min ago</td>
                <td><div class="badge badge-pill badge-success">Success</div></td>
              </tr>
              <tr>
                <td>0.00002457899</td>
                <td>$45826.00</td>
                <td>15 min ago</td>
                <td><div class="badge badge-pill badge-success">Success</div></td>
              </tr>
              <tr>
                <td>0.004578965</td>
                <td>$458756.00</td>
                <td>30 min ago</td>
                <td><div class="badge badge-pill badge-primary">Pending</div></td>
              </tr>
              <tr>
                <td>0.0000124587</td>
                <td>$4589652.00</td>
                <td>45 min ago</td>
                <td><div class="badge badge-pill badge-danger">cancel</div></td>
              </tr>
              <tr>
                <td>0.0002356896</td>
                <td>$45869.00</td>
                <td>1 hour ago</td>
                <td><div class="badge badge-pill badge-success">Success</div></td>
              </tr>
              <tr>
                <td>0.000568953</td>
                <td>$475896.00</td>
                <td>1 hour ago</td>
                <td><div class="badge badge-pill badge-warning text-white">Hold</div></td>
              </tr>
              </tbody>
            </table>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
              <h4 class="card-title">Activity</h4>
          </template>
          <template v-slot:body>
            <ul class="iq-timeline">
              <li>
                <div class="timeline-dots"></div>
                <h6 class="float-left mb-1">Client Login</h6>
                <small class="float-right mt-1">24 February 2020</small>
                <div class="d-inline-block w-100">
                  <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                </div>
              </li>
              <li>
                <div class="timeline-dots border-success"></div>
                <h6 class="float-left mb-1">Scheduled Maintenance</h6>
                <small class="float-right mt-1">23 February 2020</small>
                <div class="d-inline-block w-100">
                  <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                </div>
              </li>
              <li>
                <div class="timeline-dots border-primary"></div>
                <h6 class="float-left mb-1">Client Call</h6>
                <small class="float-right mt-1">19 February 2020</small>
                <div class="d-inline-block w-100">
                  <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                </div>
              </li>
              <li>
                <div class="timeline-dots border-warning"></div>
                <h6 class="float-left mb-1">Mega event</h6>
                <small class="float-right mt-1">15 February 2020</small>
                <div class="d-inline-block w-100">
                  <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                </div>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import AmChart from '../../components/core/charts/AmChart'
import ApexChart from '../../components/core/charts/ApexChart'
import { core } from '../../config/pluginInit'
export default {
  name: 'Dashboard6',
  mounted () {
    core.index()
  },
  components: { ApexChart, AmChart },
  data () {
    return {
      chart1: {
        chart: {
          height: 90,
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
          data: [60, 15, 50, 30, 70]
        }],
        colors: ['#827af3'],

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
      chart2: {
        chart: {
          height: 90,
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
          data: [70, 40, 60, 30, 60]
        }],
        colors: ['#b777f3'],
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
      chart13: {
        chart: {
          height: 320,
          type: 'radialBar',
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 3,
            dashArray: 0
          }
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 10,
              size: '30%',
              background: 'transparent',
              image: undefined,
              imageWidth: 64,
              imageHeight: 64
            },
            dataLabels: {
              name: {
                fontSize: '22px'
              },
              value: {
                fontSize: '16px'
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient'
        },
        colors: ['#0084ff', '#00ca00', '#ffd400', '#b777f3'],
        series: [44, 55, 67, 80],
        stroke: {
          lineCap: 'round'
        },
        labels: [' Sales', 'Profit', 'Cost', 'Investment']
      }
    }
  }
}
</script>
