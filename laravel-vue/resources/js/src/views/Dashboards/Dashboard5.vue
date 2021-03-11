<template>
  <!-- Page Content  -->
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <iq-card>
          <template v-slot:body>
            <div class="iq-advance-course d-flex align-items-center justify-content-between">
              <div class="left-block">
                <div class="d-flex align-items-center">
                  <img src="../../assets/images/page-img/28.png" class="img-fluid" />
                  <div class="ml-3">
                    <h4 class>Achieve Your Goal By Signing Up To Our Advanced Course</h4>
                    <p
                      class="mb-0"
                    >Sign up and boost your professional career by adding new skills with our advanced courses.</p>
                  </div>
                </div>
              </div>
              <div class="right-block position-relativ">
                <button type="button" class="btn btn-primary">Start Now</button>
                <img
                  src="../../assets/images/page-img/34.png"
                  class="img-fluid image-absulute image-absulute-1"
                />
                <img
                  src="../../assets/images/page-img/35.png"
                  class="img-fluid image-absulute image-absulute-2"
                />
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <Swiper id="card-slider" class="row" :options="option">
          <SwiperSlide>
            <b-col md="12">
              <iq-card>
                <template v-slot:body>
                  <div
                    class="bg-cyan p-3 rounded d-flex align-items-center justify-content-between mb-3"
                  >
                    <h5 class="text-white">Frontend Development</h5>
                    <div class="rounded-circle iq-card-icon bg-white">
                      <i class="ri-layout-line text-cyan"></i>
                    </div>
                  </div>
                  <h4 class="mb-2">Learn Angular.js</h4>
                  <div class="row align-items-center justify-content-between mt-3">
                    <div class="col-sm-6">
                      <p class="mb-0">Author</p>
                      <h6>Paul Molive</h6>
                    </div>
                    <div class="col-sm-6">
                      <div class="progress" style="height:5px">
                        <div
                          class="progress-bar progress-bar-info"
                          role="progressbar"
                          style="width: 85%; height: 5px"
                        ></div>
                      </div>
                    </div>
                  </div>
                </template>
              </iq-card>
            </b-col>
          </SwiperSlide>
          <SwiperSlide>
            <b-col md="12">
              <iq-card>
                <template v-slot:body>
                  <div
                    class="bg-cobalt-blue p-3 rounded d-flex align-items-center justify-content-between mb-3"
                  >
                    <h5 class="text-white">UI/UX Design</h5>
                    <div class="rounded-circle iq-card-icon bg-white">
                      <i class="ri-quill-pen-line text-cobalt-blue"></i>
                    </div>
                  </div>
                  <h4 class="mb-2">Sketch from A to Z (2019)</h4>
                  <div class="row align-items-center justify-content-between mt-3">
                    <div class="col-sm-6">
                      <p class="mb-0">Author</p>
                      <h6>Anna Mull</h6>
                    </div>
                    <div class="col-sm-6">
                      <div class="progress" style="height:5px">
                        <div class="progress-bar" role="progressbar" style="width: 65%; height: 5px"></div>
                      </div>
                    </div>
                  </div>
                </template>
              </iq-card>
            </b-col>
          </SwiperSlide>
          <SwiperSlide>
            <b-col md="12">
              <iq-card>
                <template v-slot:body>
                  <div
                    class="bg-spring-green p-3 rounded d-flex align-items-center justify-content-between mb-3"
                  >
                    <h5 class="text-white">Backend Development</h5>
                    <div class="rounded-circle iq-card-icon bg-white">
                      <i class="ri-slack-line text-spring-green"></i>
                    </div>
                  </div>
                  <h4 class="mb-2">Laravel complete guide</h4>
                  <div class="row align-items-center justify-content-between mt-3">
                    <div class="col-sm-6">
                      <p class="mb-0">Author</p>
                      <h6>Barb Ackue</h6>
                    </div>
                    <div class="col-sm-6">
                      <div class="progress" style="height:5px">
                        <div
                          class="progress-bar progress-bar-success"
                          role="progressbar"
                          style="width: 20%; height: 5px"
                        ></div>
                      </div>
                    </div>
                  </div>
                </template>
              </iq-card>
            </b-col>
          </SwiperSlide>
          <SwiperSlide>
            <b-col md="12">
              <iq-card>
                <template v-slot:body>
                  <div
                    class="bg-amber p-3 rounded d-flex align-items-center justify-content-between mb-3"
                  >
                    <h5 class="text-white">Programming</h5>
                    <div class="rounded-circle iq-card-icon bg-white">
                      <i class="ri-album-line text-amber"></i>
                    </div>
                  </div>
                  <h4 class="mb-2">Complete coding Bootcamp</h4>
                  <div class="row align-items-center justify-content-between mt-3">
                    <div class="col-sm-6">
                      <p class="mb-0">Author</p>
                      <h6>Greta Life</h6>
                    </div>
                    <div class="col-sm-6">
                      <div class="progress" style="height:5px">
                        <div
                          class="progress-bar progress-bar-warn"
                          role="progressbar"
                          style="width: 30%; height: 5px"
                        ></div>
                      </div>
                    </div>
                  </div>
                </template>
              </iq-card>
            </b-col>
          </SwiperSlide>
          <SwiperSlide>
            <b-col md="12">
              <iq-card>
                <template v-slot:body>
                  <div
                    class="bg-pink p-3 rounded d-flex align-items-center justify-content-between mb-3"
                  >
                    <h5 class="text-white">Tester</h5>
                    <div class="rounded-circle iq-card-icon bg-white">
                      <i class="ri-t-box-line text-pink"></i>
                    </div>
                  </div>
                  <h4 class="mb-2">Learn Testing box</h4>
                  <div class="row align-items-center justify-content-between mt-3">
                    <div class="col-sm-6">
                      <p class="mb-0">Author</p>
                      <h6>Paul Molive</h6>
                    </div>
                    <div class="col-sm-6">
                      <div class="progress" style="height:5px">
                        <div
                          class="progress-bar progress-bar-pink"
                          role="progressbar"
                          style="width: 85%; height: 5px"
                        ></div>
                      </div>
                    </div>
                  </div>
                </template>
              </iq-card>
            </b-col>
          </SwiperSlide>
        </Swiper>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" lg="3">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex align-items-center">
              <div class="rounded-circle iq-card-icon">
                <img src="../../assets/images/page-img/25.png" class="img-fluid" alt="logo" />
              </div>
              <div class="text-left ml-3">
                <h6>Angular Js</h6>
                <p class="mb-0">20 Course</p>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" lg="3">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex align-items-center">
              <div class="rounded-circle iq-card-icon">
                <img src="../../assets/images/page-img/26.png" class="img-fluid" alt="logo" />
              </div>
              <div class="text-left ml-3">
                <h6>Bootstrap</h6>
                <p class="mb-0">30 Course</p>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" lg="3">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex align-items-center">
              <div class="rounded-circle iq-card-icon">
                <img src="../../assets/images/page-img/27.png" class="img-fluid" alt="logo" />
              </div>
              <div class="text-left ml-3">
                <h6>React Js</h6>
                <p class="mb-0">15 Course</p>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" lg="3">
        <iq-card>
          <template v-slot:body>
            <div class="d-flex align-items-center">
              <div class="rounded-circle iq-card-icon">
                <img src="../../assets/images/page-img/24.png" class="img-fluid" alt="logo" />
              </div>
              <div class="text-left ml-3">
                <h6>Vue Js</h6>
                <p class="mb-0">12 Course</p>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Top Mentors</h4>
          </template>
          <template v-slot:headerAction>
            <div class="dropdown">
              <span
                class="dropdown-toggle text-primary"
                id="dropdownMenuButton5"
                data-toggle="dropdown"
              >
                <i class="ri-more-2-fill"></i>
              </span>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  <i class="ri-eye-fill mr-2"></i>View
                </a>
                <a class="dropdown-item" href="#">
                  <i class="ri-delete-bin-6-fill mr-2"></i>Delete
                </a>
                <a class="dropdown-item" href="#">
                  <i class="ri-pencil-fill mr-2"></i>Edit
                </a>
                <a class="dropdown-item" href="#">
                  <i class="ri-printer-fill mr-2"></i>Print
                </a>
                <a class="dropdown-item" href="#">
                  <i class="ri-file-download-fill mr-2"></i>Download
                </a>
              </div>
            </div>
          </template>
          <template v-slot:body>
            <div class="table-responsive">
              <table class="table mb-0 table-borderless">
                <tbody>
                  <tr>
                    <td class="text-center">
                      <img
                        class="rounded-circle img-fluid avatar-40"
                        src="../../assets/images/user/user-01.jpg"
                        alt="profile"
                      />
                    </td>
                    <td>Anna Sthesia</td>
                    <td>
                      <div class="badge badge-pill badge-cyan">Frontend Developer</div>
                    </td>
                    <td>600 Courses</td>
                    <td>200 Followers</td>
                    <td>
                      <i class="ri-star-s-fill text-warning"></i> 5.0
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <img
                        class="rounded-circle img-fluid avatar-40"
                        src="../../assets/images/user/user-02.jpg"
                        alt="profile"
                      />
                    </td>
                    <td>Brock Lee</td>
                    <td>
                      <div class="badge badge-pill badge-cobalt-blue">UI/UX Design</div>
                    </td>
                    <td>800 Courses</td>
                    <td>780 Followers</td>
                    <td>
                      <i class="ri-star-s-fill text-warning"></i> 4.5
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <img
                        class="rounded-circle img-fluid avatar-40"
                        src="../../assets/images/user/user-03.jpg"
                        alt="profile"
                      />
                    </td>
                    <td>Dan Druff</td>
                    <td>
                      <div class="badge badge-pill badge-spring-green">Backend Developer</div>
                    </td>
                    <td>300 Courses</td>
                    <td>800 Followers</td>
                    <td>
                      <i class="ri-star-s-fill text-warning"></i> 3.8
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <img
                        class="rounded-circle img-fluid avatar-40"
                        src="../../assets/images/user/user-04.jpg"
                        alt="profile"
                      />
                    </td>
                    <td>Lynn Guini</td>
                    <td>
                      <div class="badge badge-pill badge-amber">Wordpress Developer</div>
                    </td>
                    <td>550 Courses</td>
                    <td>300 Followers</td>
                    <td>
                      <i class="ri-star-s-fill text-warning"></i> 4.8
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <img
                        class="rounded-circle img-fluid avatar-40"
                        src="../../assets/images/user/user-05.jpg"
                        alt="profile"
                      />
                    </td>
                    <td>Eric Shun</td>
                    <td>
                      <div class="badge badge-pill badge-pink">Web designer</div>
                    </td>
                    <td>690 Courses</td>
                    <td>480 Followers</td>
                    <td>
                      <i class="ri-star-s-fill text-warning"></i> 5.0
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import Swiper from '../../components/core/slider/Swiper'
import SwiperSlide from '../../components/core/slider/SwiperSlide'
export default {
  name: 'Dashboard5',
  mounted () {
    core.index()
  },
  components: { Swiper, SwiperSlide },
  data () {
    return {
      option: {
        centerPadding: 30,
        slidesPerView: 3,
        loop: true,
        centeredSlides: false,
        autoplay: {
          delay: 2000
        },
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1020: {
            slidesPerView: 3
          }
        }
      }
    }
  }

}
</script>
<style scoped>
.progress-bar-info {
  background-color: #0cd2e3 !important;
}
.progress-bar-success {
  background-color: #1be1b3 !important;
}
.progress-bar-warn {
  background-color: #f4b72a !important;
}
.progress-bar-pink {
  background-color: #fd6c9e !important;
}
</style>
