<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">User List</h4>
          </template>
          <template v-slot:headerAction>
            <b-button variant="primary" :to="{ name: 'user.add' }">Add User</b-button>
          </template>
          <template v-slot:body>
            <ag-grid-vue
              id="ag-grid"
              class="ag-theme-material border height-500"
              :columnDefs="columnDefs"
              :rowData="rowData"
              :floatingFilter="true"
              :modules="modules"
              rowSelection="multiple"
            ></ag-grid-vue>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import 'ag-grid-community/dist/styles/ag-grid.min.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import { AllCommunityModules } from '@ag-grid-enterprise/all-modules'
import { core } from '../../config/pluginInit'
import { AgGridVue } from 'ag-grid-vue'
import { db } from '../../config/firebase'
import ActionUser from './Components/ActionUser'

export default {
  name: 'UserList',
  mounted () {
    core.index()
  },
  data () {
    return {
      columnDefs: null,
      rowData: [],
      modules: AllCommunityModules
    }
  },
  firestore () {
    return {
      rowData: db.collection('users')
    }
  },
  components: {
    AgGridVue,
    // eslint-disable-next-line vue/no-unused-components
    ActionUser
  },
  beforeMount () {
    this.columnDefs = [
      {
        headerName: 'Name',
        field: 'name',
        sortable: true,
        filter: 'agTextColumnFilter'
      },
      { headerName: 'Company', field: 'company', sortable: true, filter: true },
      { headerName: 'Email', field: 'email', sortable: true, filter: true },
      { headerName: 'Country', field: 'country', sortable: true, filter: true },
      { headerName: 'Role', field: 'role', sortable: true, filter: true },
      { headerName: 'Actions', cellRendererFramework: ActionUser }
    ]
  },
  method: {}
}
</script>
