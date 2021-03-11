<template>
  <!-- Page Content  -->
  <b-container>
      <b-row>
        <b-col md="6" lg="3">
          <iq-card class="iq-card iq-card-block iq-card-stretch iq-card-height iq-border-box iq-border-box-1 text-primary">
            <template v-slot:body >
              <div class="d-flex align-items-center justify-content-between">
                <h5>Worked Today</h5>
                <h3>08:00 Hr</h3>
              </div>
            </template>
          </iq-card>
        </b-col>
        <b-col md="6" lg="3">
          <iq-card class="iq-border-box iq-border-box-2 text-warning">
            <template v-slot:body >
              <div class="d-flex align-items-center justify-content-between">
                <h5>Worked This Week</h5>
                <h3>40:00 Hr</h3>
              </div>
            </template>
          </iq-card>
        </b-col>
        <b-col md="6" lg="3">
          <iq-card class="iq-border-box iq-border-box-2 text-danger">
            <template v-slot:body >
            <div class="d-flex align-items-center justify-content-between">
              <h5>Worked Issue</h5>
              <h3>1200</h3>
            </div>
          </template>
        </iq-card>
        </b-col>
        <b-col md="6" lg="3">
          <iq-card class="iq-border-box iq-border-box-2 text-info">
            <template v-slot:body >
          <div class="d-flex align-items-center justify-content-between">
            <h5>Worked Income</h5>
            <h3>$54000</h3>
          </div>
        </template>
        </iq-card>
        </b-col>
        <b-col lg="6">
          <iq-card>
            <template v-slot:headerTitle >
                <h4 class="card-title">User Overview</h4>
            </template>
            <template v-slot:body>
              <b-row>
                <b-col class="text-center">
                  <div class="mt-3">
                    <h5 class="">3500</h5>
                    <span class="">users</span>
                  </div>
                </b-col>
                <b-col class="text-center">
                  <div class="mt-3">
                    <h5 class="">4253</h5>
                    <span class="">clicks</span>
                  </div>
                </b-col>
                <b-col class="text-center">
                <div class="mt-3">
                  <h5 class="">$8569</h5>
                  <span class="">revenue</span>
                </div>
                </b-col>
              </b-row>
              <AmChart element="home-chart-06" type="ht-menu1" :height="400" />
            </template>
          </iq-card>
        </b-col>
        <b-col lg="6">
          <iq-card>
            <template v-slot:headerTitle>
                <h4 class="card-title">Worker Overview</h4>
            </template>
            <template v-slot:body>
              <b-row>
                <b-col class="text-center">
                  <div class="mt-3">
                    <h5 class="">3500</h5>
                    <span class="">Worker</span>
                  </div>
                </b-col>
                <b-col class="text-center">
                  <div class="mt-3">
                    <h5 class="">4253</h5>
                    <span class="">clicks</span>
                  </div>
                </b-col>
                <b-col class="text-center">
                 <div class="mt-3">
                   <h5 class="">$8569</h5>
                   <span class="">revenue</span>
                 </div>
                </b-col>
              </b-row>
              <AmChart element="chart8" type="ht-menu2" :height="400" />
            </template>
          </iq-card>
        </b-col>
        <b-col lg="5">
          <iq-card>
            <template v-slot:headerTitle>
                <h4 class="card-title">Review</h4>
            </template>
            <template v-slot:body>
              <div class="iq-details">
                <span class="title text-dark">5 Star</span>
                <div class="percentage float-right text-primary">95 <span>%</span></div>
                <div class="iq-progress-bar-linear d-inline-block w-100">
                  <Progressbar :value="95" />
                </div>
              </div>
              <div class="iq-details mt-4">
                <span class="title text-dark">4 Star</span>
                <div class="percentage float-right text-warning">75 <span>%</span></div>
                <div class="iq-progress-bar-linear d-inline-block w-100">
                  <Progressbar :value="75" color="warning" />
                </div>
              </div>
              <div class="iq-details mt-4">
                <span class="title text-dark">3 Star</span>
                <div class="percentage float-right text-success">55 <span>%</span></div>
                <div class="iq-progress-bar-linear d-inline-block w-100">
                  <Progressbar :value="55" color="success" />
                </div>
              </div>
              <div class="iq-details mt-4">
                <span class="title text-dark">2 Star</span>
                <div class="percentage float-right text-info">25 <span>%</span></div>
                <div class="iq-progress-bar-linear d-inline-block w-100">
                  <Progressbar :value="25" color="info" />
                </div>
              </div>
              <div class="iq-details mt-4">
                <span class="title text-dark">1 Star</span>
                <div class="percentage float-right text-danger">10 <span>%</span></div>
                <div class="iq-progress-bar-linear d-inline-block w-100">
                  <Progressbar :value="10" color="danger" />
                </div>
              </div>
            </template>
          </iq-card>
        </b-col>
        <b-col lg="7">
          <iq-card>
            <template v-slot:headerTitle>
                <h4 class="card-title">Over Time</h4>
            </template>
              <template v-slot:headerAction>
                <b-dropdown  id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                  <template v-slot:button-content>
                    <span class="text-primary"><i class="ri-more-fill"></i></span>
                  </template>
                  <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                  <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
                </b-dropdown>
              </template>
            <template v-slot:body>
              <AmChart element="ht-chart9" type="ht-menu3" :height="400" />
            </template>
          </iq-card>
        </b-col>
        <b-col lg="8">
          <iq-card>
            <template v-slot:headerTitle>
                <h4 class="card-title">Worker List</h4>
            </template>
            <template v-slot:body>
              <table class="table mb-0 table-borderless">
                <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Worker</th>
                  <th scope="col">Age</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Working Hour</th>
                  <th scope="col">Progress</th>
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
        <b-col lg="4">
          <iq-card>
            <template v-slot:headerTitle>
                <h4 class="card-title">Task List</h4>
            </template>
            <template v-slot:body>
              <ul class="tasks-lists m-0 p-0">
                <li class="d-flex justify-content-between mb-3 align-items-center">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="task-1">
                    <label class="custom-control-label" for="task-1">Prepare for presentation  </label>
                  </div>
                  <div class="font-size-18">
                    <i class="ri-close-circle-line"></i>
                  </div>
                </li>
                <li class="d-flex justify-content-between mb-3 align-items-center">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="task-2" checked="">
                    <label class="custom-control-label" for="task-2"><del>Create invoice </del> </label>
                  </div>
                  <div class="font-size-18">
                    <i class="ri-close-circle-line"></i>
                  </div>
                </li>
                <li class="d-flex justify-content-between mb-3 align-items-center">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="task-3">
                    <label class="custom-control-label" for="task-3">Print Documents </label>
                  </div>
                  <div class="font-size-18">
                    <i class="ri-close-circle-line"></i>
                  </div>
                </li>
                <li class="d-flex justify-content-between mb-3 align-items-center">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="task-4">
                    <label class="custom-control-label" for="task-4">Team Meeting on Satuarday  </label>
                  </div>
                  <div class="font-size-18">
                    <i class="ri-close-circle-line"></i>
                  </div>
                </li>
                <li class="d-flex justify-content-between mb-3 align-items-center">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="task-5" checked="">
                    <label class="custom-control-label" for="task-5"><del> Lunch our New Product </del> </label>
                  </div>
                  <div class="font-size-18">
                    <i class="ri-close-circle-line"></i>
                  </div>
                </li>
                <li class="d-flex justify-content-between mb-2 align-items-center">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="task-6">
                    <label class="custom-control-label" for="task-6">Sent Email for Meeting </label>
                  </div>
                  <div class="font-size-18">
                    <i class="ri-close-circle-line"></i>
                  </div>
                </li>
                <li class="d-flex justify-content-between mb-2 align-items-center">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="task-7">
                    <label class="custom-control-label" for="task-6">Sent Email for Hiliday List </label>
                  </div>
                  <div class="font-size-18">
                    <i class="ri-close-circle-line"></i>
                  </div>
                </li>
                <li class="d-flex justify-content-between mb-2 align-items-center">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="task-8">
                    <label class="custom-control-label" for="task-6"> Birthday celebration </label>
                  </div>
                  <div class="font-size-18">
                    <i class="ri-close-circle-line"></i>
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
import { core } from '../../config/pluginInit'
import AmChart from '../../components/core/charts/AmChart'
export default {
  name: 'Dashboard4',
  mounted () {
    core.index()
  },
  components: { AmChart }
}
</script>
