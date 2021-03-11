<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Bootstrap Datatables</h4>
          </template>
          <template v-slot:body>
            <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
            <b-row>
              <b-col md="12" class="table-responsive">
                <datatable class="table table-striped table-bordered" :columns="columns" :data="rows" :per-page="25"></datatable>
              </b-col>
              <!--<b-col md="12">
                <datatable-pager :value="1" type="abbreviated" :sides-count="40"></datatable-pager>
              </b-col>-->
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import '../../plugins/datatable'
export default {
  name: 'UiDataTable',
  mounted () {
    core.index()
  },
  data () {
    return {
      columns: [
        { label: 'Name', field: 'name', headerClass: 'text-left' },
        { label: 'Position', field: 'position', headerClass: 'text-left' },
        { label: 'Office', field: 'office', headerClass: 'text-left' },
        { label: 'Age', field: 'age', headerClass: 'text-left' },
        { label: 'Start date', field: 'start_date', headerClass: 'text-left' },
        { label: 'Salary', field: 'salary', headerClass: 'text-left' }
      ],
      rows: [
        {
          id: 1,
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          start_date: '2011/04/25',
          salary: '$320,800'
        },
        {
          id: 2,
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          start_date: '2011/06/19',
          salary: '$200,600'
        },
        {
          id: 3,
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '69',
          start_date: '2011/01/20',
          salary: '$140,500'
        },
        {
          id: 4,
          name: 'Cedric Kelly',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '42',
          start_date: '2011/02/02',
          salary: '$360,500'
        },
        {
          id: 5,
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: '39',
          start_date: '2011/08/11',
          salary: '$170,800'
        },
        {
          id: 1,
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          start_date: '2011/04/25',
          salary: '$320,800'
        },
        {
          id: 2,
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          start_date: '2011/06/19',
          salary: '$200,600'
        },
        {
          id: 3,
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '69',
          start_date: '2011/01/20',
          salary: '$140,500'
        },
        {
          id: 4,
          name: 'Cedric Kelly',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '42',
          start_date: '2011/02/02',
          salary: '$360,500'
        },
        {
          id: 5,
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: '39',
          start_date: '2011/08/11',
          salary: '$170,800'
        },
        {
          id: 1,
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          start_date: '2011/04/25',
          salary: '$320,800'
        },
        {
          id: 2,
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          start_date: '2011/06/19',
          salary: '$200,600'
        },
        {
          id: 3,
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '69',
          start_date: '2011/01/20',
          salary: '$140,500'
        },
        {
          id: 4,
          name: 'Cedric Kelly',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '42',
          start_date: '2011/02/02',
          salary: '$360,500'
        },
        {
          id: 5,
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: '39',
          start_date: '2011/08/11',
          salary: '$170,800'
        },
        {
          id: 1,
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          start_date: '2011/04/25',
          salary: '$320,800'
        },
        {
          id: 2,
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          start_date: '2011/06/19',
          salary: '$200,600'
        },
        {
          id: 3,
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '69',
          start_date: '2011/01/20',
          salary: '$140,500'
        },
        {
          id: 4,
          name: 'Cedric Kelly',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '42',
          start_date: '2011/02/02',
          salary: '$360,500'
        },
        {
          id: 5,
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: '39',
          start_date: '2011/08/11',
          salary: '$170,800'
        }
      ]
    }
  }
}
</script>
