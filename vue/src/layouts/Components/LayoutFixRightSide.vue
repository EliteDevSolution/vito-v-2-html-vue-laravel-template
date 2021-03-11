<template>
  <div class="iq-right-fixed">
    <iq-card class-name="overflow-hidden shadow-none">
      <template v-slot:headerTitle>
        <h4 class="card-title">{{ $t('rightSide.customerDistribution') }}</h4>
      </template>
      <template v-slot:headerAction>
      </template>
      <AmChart element="chartdiv" type="dashboard-map" :height="150" />
    </iq-card>
    <iq-card body-class="pb-0" class-name="shadow-none">
      <template v-slot:headerTitle>
        <h4 class="card-title">{{ $t('rightSide.projectStatistic') }}</h4>
      </template>
      <template v-slot:body>
        <ul class="suggestions-lists m-0 p-0">
          <li v-for="(list,index) in projectList" :key="index" class="d-flex mb-4 align-items-center">
            <div :class="'profile-icon iq-bg-' + list.color"><span>{{ list.code }}</span></div>
            <div class="media-support-info ml-3">
              <h6>{{ list.title }}</h6>
              <p class="mb-0">{{ list.subtitle }}</p>
            </div>
            <div class="iq-card-header-toolbar d-flex align-items-center">
              <b-dropdown  id="dropdownMenuButton41" right variant="none" data-toggle="dropdown">
                <template v-slot:button-content>
                  <span class="text-primary"><i class="ri-more-fill"></i></span>
                </template>
                <b-dropdown-item href="#"><i class="ri-user-unfollow-line mr-2"></i>{{ $t('dropdown.unfollow') }}</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ri-close-circle-line mr-2"></i>{{ $t('dropdown.follow') }}</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ri-lock-line mr-2"></i>{{ $t('dropdown.block') }}</b-dropdown-item>
              </b-dropdown>
            </div>
          </li>
        </ul>
      </template>
    </iq-card>
    <iq-card class-name="wow fadeInUp shadow-none">
      <template v-slot:headerTitle>
        <h4 class="card-title">{{ $t('rightSide.countries') }}</h4>
      </template>
      <template v-slot:headerAction>
      </template>
      <template v-slot:body>
        <b-row>
          <b-col lg="12">
            <div v-for="(list,index) in country" :key="index" class="iq-details" :class="{ 'mt-4': index != 0 }">
              <span class="title text-dark">{{ list.title }}</span>
              <div class="percentage float-right text-primary">{{ list.percentage }} <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <Progressbar :value="list.percentage" :color="list.color" />
              </div>
            </div>
          </b-col>
        </b-row>
      </template>
    </iq-card>
  </div>
</template>
<script>
const AmChart = () => import('../../components/core/charts/AmChart')
export default {
  name: 'LayoutFixRightside',
  components: {
    AmChart
  },
  data () {
    return {
      projectList: [
        { title: 'Adding Item', subtitle: 'Development', color: 'danger', code: 'G' },
        { title: 'Admin Panel', subtitle: 'Development', color: 'warning', code: 'B' }
      ],
      country: [
        { title: 'USA', percentage: 95, color: 'primary' },
        { title: 'India', percentage: 75, color: 'success' },
        { title: 'Australia', percentage: 55, color: 'warning' }
      ]
    }
  }
}

</script>
