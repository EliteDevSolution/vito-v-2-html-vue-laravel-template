<template>
  <b-container fluid>
    <b-row>
      <b-col md="8">
        <iq-card>
          <template v-slot:body>
            <AmChart element="home-chart-06" type="dashboard2" :height="350" />
          </template>
        </iq-card>
      </b-col>
      <b-col md="4">
        <iq-card body-class="smaill-calender-home">
          <template v-slot:body>
            <template v-if="lang.value == 'ar'">
              <flat-pickr :config="arConfig" value="" class="d-none"/>
            </template>
            <template v-else>
              <flat-pickr :config="config" value="" class="d-none" />
            </template>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6">
        <iq-card>
          <template v-slot:body>
            <div class="text-center"><span>{{ $t('dashboard2.card1')}}</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><Counter :value="2.648" /></h2>
                <p class="mb-0 text-secondary line-height"> 26.84% </p>
              </div>
              <div class="iq-iconbox iq-bg-danger">
                <i class="ri-arrow-down-line" />
              </div>
            </div>
            <div class="iq-progress-bar-linear d-inline-block w-100  mt-5">
              <Progressbar :value="80" color="danger" />
            </div>
          </template>
        </iq-card>
      </b-col>
      <div class="col-md-6 col-lg-3">
        <div class="iq-card">
          <div class="iq-card-body">
            <div class="text-center"><span>{{ $t('dashboard2.card2')}}</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><Counter :value="89.6" /></h2>
                <p class="mb-0 pl-2 text-secondary line-height"> 8.64% </p>
              </div>
              <div class="iq-iconbox iq-bg-info">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar-linear d-inline-block w-100  mt-5">
              <Progressbar :value="80" color="info" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="iq-card">
          <div class="iq-card-body">
            <div class="text-center"><span>{{ $t('dashboard2.card3')}}</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><Counter :value="826" /></h2>
                <p class="mb-0 pl-2 text-secondary line-height"> 0.86% </p>
              </div>
              <div class="iq-iconbox iq-bg-success">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar-linear d-inline-block w-100  mt-5">
              <Progressbar :value="80" color="success" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="iq-card">
          <div class="iq-card-body">
            <div class="text-center"><span>{{ $t('dashboard2.card4')}}</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><Counter :value="7.55" /></h2>
                <p class="mb-0 pl-2 text-secondary line-height"> 25.5% </p>
              </div>
              <div class="iq-iconbox iq-bg-primary">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar-linear d-inline-block w-100  mt-5">
              <Progressbar :value="80" color="bg-primary" />
            </div>

          </div>
        </div>
      </div>
    </b-row>
    <b-row>
      <b-col lg="8">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard2.featureTableTitle')}}</h4>
          </template>
          <template v-slot:body>
            <b-table responsive :items="items" class="mb-0 table-borderless">
              <template v-slot:cell(status)="data">
                <b-badge pill :variant="data.value.color">{{ data.value.name }}</b-badge>
              </template>
              <template v-slot:cell(progress)="data1">
                <Progressbar :value="data1.value.count" :color="data1.value.color" />
              </template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard2.summary')}}</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-2-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <p class="mb-0">{{ $t('dashboard2.totalLikeComment')}}</p>
            <div class="m-0 p-0 d-flex flex-wrap align-items-center justify-content-between">
              <div class="col-md-6">
                <div class="d-flex align-items-center  mt-4">
                  <div class="iq-scale-border mr-3 like-block"></div>
                  <div class="iq-scale-content">
                    <h6>2.864</h6>
                    <p class="mb-0">Likes</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center  mt-4">
                  <div class="iq-scale-border mr-3 comment-block"></div>
                  <div class="iq-scale-content">
                    <h6>624</h6>
                    <p class="mb-0">Comments</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center mt-4">
                  <div class="iq-scale-border mr-3 share-block"></div>
                  <div class="iq-scale-content">
                    <h6>1.75</h6>
                    <p class="mb-0">Share</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center mt-4">
                  <div class="iq-scale-border mr-3 repost-block"></div>
                  <div class="iq-scale-content">
                    <h6>345</h6>
                    <p class="mb-0">Repost</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center mt-4">
                  <div class="iq-scale-border mr-3 view-block"></div>
                  <div class="iq-scale-content">
                    <h6>845</h6>
                    <p class="mb-0">Views</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center mt-4">
                  <div class="iq-scale-border mr-3 post-block"></div>
                  <div class="iq-scale-content">
                    <h6>1200</h6>
                    <p class="mb-0">Posts</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('dashboard2.bestPost')}}</h4>
          </template>
          <template v-slot:body>
            <Swiper id="post-slider" :option="options">
              <template v-slot:nav>
                <SwiperNav />
              </template>
              <SwiperSlide class="d-flex align-items-center">
                <div class="post-image">
                  <a href="javascript:void(0);">
                    <img :src="require('../../assets/images/page-img/p-2.jpg')" alt="post-image" class="img-fluid rounded">
                  </a>
                </div>
                <div class="post-content pl-3 pr-3">
                  <h4>How to Like Posts</h4>
                  <h3 class="mt-2 mb-2">89.64%</h3>
                  <Progressbar :value="89" class="mb-3" color="primary" />
                  <div class="text-center d-flex align-items-center justify-content-between">
                    <div class="iq-post-likes text-left">
                      <a href="#" class="text-secondary"><i class="ri-heart-line mr-2" />6.2K</a>
                    </div>
                    <div class="iq-post-comments text-left ml-2 mr-2">
                      <a href="#" class="text-secondary"><i class="ri-chat-1-fill mr-2" />6.2K</a>
                    </div>
                    <div class="iq-post-save text-left">
                      <a href="#" class="text-secondary"><i class="ri-save-line mr-2" />6.2K</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="d-flex align-items-center">
                <div class="post-image">
                  <a href="javascript:void(0);">
                    <img :src="require('../../assets/images/page-img/p-3.jpg')" alt="post-image" class="img-fluid rounded">
                  </a>
                </div>
                <div class="post-content pl-3 pr-3">
                  <h4>How to Comments Posts</h4>
                  <h3 class="mt-2 mb-2">89.64%</h3>
                  <Progressbar :value="89" class="mb-3" color="primary" />
                  <div class="text-center d-flex align-items-center justify-content-between">
                    <div class="iq-post-likes text-left">
                      <a href="#" class="text-secondary"><i class="ri-heart-line mr-2"></i>6.2K</a>
                    </div>
                    <div class="iq-post-comments text-left ml-2 mr-2">
                      <a href="#" class="text-secondary"><i class="ri-chat-1-fill mr-2"></i>6.2K</a>
                    </div>
                    <div class="iq-post-save text-left">
                      <a href="#" class="text-secondary"><i class="ri-save-line mr-2"></i>6.2K</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="d-flex align-items-center">
                <div class="post-image">
                  <a href="javascript:void(0);">
                    <img :src="require('../../assets/images/page-img/p-4.jpg')" alt="post-image" class="img-fluid rounded">
                  </a>
                </div>
                <div class="post-content pl-3 pr-3">
                  <h4>How to Share Posts</h4>
                  <h3 class="mt-2 mb-2">89.64%</h3>
                  <Progressbar :value="90" class="mb-3" />
                  <div class="text-center d-flex align-items-center justify-content-between">
                    <div class="iq-post-likes text-left">
                      <a href="#"><i class="ri-heart-line mr-2"></i>6.2K</a>
                    </div>
                    <div class="iq-post-comments text-left ml-2 mr-2">
                      <a href="#"><i class="ri-chat-1-fill mr-2"></i>6.2K</a>
                    </div>
                    <div class="iq-post-save text-left">
                      <a href="#"><i class="ri-save-line mr-2"></i>6.2K</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="d-flex align-items-center">
                <div class="post-image">
                  <a href="javascript:void(0);">
                    <img :src="require('../../assets/images/page-img/p-5.jpg')" alt="post-image" class="img-fluid rounded">
                  </a>
                </div>
                <div class="post-content pl-3 pr-3">
                  <h4>How to Repost </h4>
                  <h3 class="mt-2 mb-2">89.64%</h3>
                  <Progressbar :value="80" class="mb-3" />
                  <div class="text-center d-flex align-items-center justify-content-between">
                    <div class="iq-post-likes text-left">
                      <a href="#" class="text-secondary"><i class="ri-heart-line mr-2"></i>6.2K</a>
                    </div>
                    <div class="iq-post-comments text-left ml-2 mr-2">
                      <a href="#" class="text-secondary"><i class="ri-chat-1-fill mr-2"></i>6.2K</a>
                    </div>
                    <div class="iq-post-save text-left">
                      <a href="#" class="text-secondary"><i class="ri-save-line mr-2"></i>6.2K</a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import AmChart from '../../components/core/charts/AmChart'
import { Arabic } from 'flatpickr/dist/l10n/ar'
import { english } from 'flatpickr/dist/l10n/default'
import { mapGetters } from 'vuex'
import Swiper from '../../components/core/slider/Swiper'
import SwiperNav from '../../components/core/slider/SwiperNav'
import SwiperSlide from '../../components/core/slider/SwiperSlide'
import Counter from '../../components/core/counter/Counter'
export default {
  name: 'Dashboard2',
  components: { AmChart, Counter, Swiper, SwiperNav, SwiperSlide },
  mounted () {
    core.index()
  },
  watch: {
    rtl: function (value) {
      this.options.rtl = this.rtl
    }
  },
  computed: {
    ...mapGetters({
      rtl: 'Setting/rtlModeState',
      lang: 'Setting/langState'
    })
  },
  methods: {
  },
  data () {
    return {
      options: {
        centeredSlides: false,
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 4000
        },
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 1
            // spaceBetween: 10
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1
            // spaceBetween: 15
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1
            // spaceBetween: 20
          },
          768: {
            slidesPerView: 1
            // spaceBetween: 20
          },
          1024: {
            slidesPerView: 2
            // spaceBetween: 20
          }
        },
        pagination: {
          el: '.swiper-pagination'
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      },
      config: {
        dateFormat: 'Y-m-d',
        inline: true,
        locale: english
      },
      arConfig: {
        dateFormat: 'Y-m-d',
        inline: true,
        locale: Arabic
      },
      chart1: {
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
          data: [60, 15, 50, 30, 70]
        }],
        colors: ['#0084ff'],

        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart2: {
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
          data: [70, 40, 60, 30, 60]
        }],
        colors: ['#ffd400'],
        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
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
        colors: ['#00ca00'],

        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart4: {
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
          data: [75, 30, 60, 35, 60]
        }],
        colors: ['#e64141'],
        xaxis: {
          type: 'datetime',
          categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart5: {
        chart: {
          height: 200,
          type: 'line',
          sparkline: {
            enabled: true
          },
          stacked: false
        },
        stroke: {
          width: [2, 3],
          curve: 'smooth',
          dashArray: [0, 5]
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        colors: ['#00ca00', '#007bff'],
        series: [{
          name: 'Vine',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
          name: 'Dribbble',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        fill: {
          opacity: [0.2, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' views'
              }
              return y
            }
          }
        },
        legend: {
          labels: {
            useSeriesColors: true
          },
          markers: {
            customHTML: [
              function () {
                return ''
              },
              function () {
                return ''
              },
              function () {
                return ''
              }
            ]
          }
        }
      },
      chart6: {
        chart: {
          height: 400,
          type: 'bar',
          sparkline: {
            show: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#0084ff', '#ffd400'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false,
          width: 5,
          colors: ['#ffffff']
        },
        series: [{
          name: 'Mobile',
          enabled: 'true',
          data: [44, 90, 90, 60, 115]
        }, {
          name: 'Desktop',
          data: [35, 80, 100, 70, 95]
        }],
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      chart7: {
        chart: {
          height: 112,
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
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
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
          data: []
        }],
        colors: ['#0084ff'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      chart8: {
        chart: {
          height: 112,
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
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
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
          data: []
        }],
        colors: ['#00ca00'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      items: [{
        package_no: '#0879985',
        date: '26/12/2019',
        delivery: '30/12/2019',
        status: {
          name: 'Moving',
          color: 'success'
        },
        location: 'Victoria 8007 Australia',
        progress: {
          count: 90,
          color: 'success'
        }
      },
      {
        package_no: '#0879984',
        date: '23/12/2019',
        delivery: '27/12/2019',
        status: {
          name: 'Pending',
          color: 'warning text-white'
        },
        location: 'Athens 2745 Greece',
        progress: {
          count: 70,
          color: 'warning'
        }
      },
      {
        package_no: '#0879983',
        date: '18/12/2019',
        delivery: '30/12/2019',
        status: {
          name: 'Canceled',
          color: 'danger'
        },
        location: 'Victoria 8007 Australia',
        progress: {
          count: 45,
          color: 'danger'
        }
      },
      {
        package_no: '#0879982',
        date: '14/12/2019',
        delivery: '20/12/2019',
        status: {
          name: 'Working',
          color: 'info'
        },
        location: 'Delhi 0014 India',
        progress: {
          count: 90,
          color: 'info'
        }
      }
      ],
      usersList: [{
        name: 'Anna Sthesia',
        role: 'Admin',
        image: require('../../assets/images/user/user-01.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Paul Molive',
        role: 'User',
        image: require('../../assets/images/user/user-02.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Bob Frapples',
        role: 'Auther',
        image: require('../../assets/images/user/user-03.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Barb Ackue',
        role: 'Editor',
        image: require('../../assets/images/user/user-04.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Greta Life',
        role: 'User',
        image: require('../../assets/images/user/user-05.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Ira Membrit',
        role: 'User',
        image: require('../../assets/images/user/user-06.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Pete Sariya',
        role: 'Editor',
        image: require('../../assets/images/user/user-07.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Anna Sthesia',
        role: 'Editor',
        image: require('../../assets/images/user/user-08.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Paul Molive',
        role: 'Author',
        image: require('../../assets/images/user/user-09.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Bob Frapples',
        role: 'User',
        image: require('../../assets/images/user/user10.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Anna Sthesia',
        role: 'Admin',
        image: require('../../assets/images/user/user-01.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Paul Molive',
        role: 'User',
        image: require('../../assets/images/user/user-02.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Bob Frapples',
        role: 'Auther',
        image: require('../../assets/images/user/user-03.jpg'),
        link: '',
        isActive: false
      },
      {
        name: 'Barb Ackue',
        role: 'Editor',
        image: require('../../assets/images/user/user-04.jpg'),
        link: '',
        isActive: true
      },
      {
        name: 'Greta Life',
        role: 'User',
        image: require('../../assets/images/user/user-05.jpg'),
        link: '',
        isActive: true
      }
      ],
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
      ],
      averageList: [
        {
          title: 'AVG Impressions',
          icons: { icon: 'ri-arrow-down-line', color: 'danger' },
          number: '2.648',
          percentage: '26.84'
        },
        {
          title: 'AVG Engagements Rate',
          icons: { icon: 'ri-arrow-up-line', color: 'info' },
          number: '89.6',
          percentage: '8.64'
        },
        {
          title: 'AVG Reach',
          icons: { icon: 'ri-arrow-up-line', color: 'success' },
          number: '826',
          percentage: '0.64'
        },
        {
          title: 'AVG Transport',
          icons: { icon: 'ri-arrow-up-line', color: 'primary' },
          number: '7.55',
          percentage: '25.5'
        }
      ]
    }
  }
}
</script>
