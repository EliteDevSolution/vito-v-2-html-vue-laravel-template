<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="iq-card">
        <div class="iq-card-header d-flex justify-content-between">
          <div class="iq-header-title">
            <h4 class="card-title">Add New Address</h4>
          </div>
        </div>
        <div class="iq-card-body">
          <form onsubmit="required()">
            <div class="row mt-3">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Full Name: *</label>
                  <input type="text" class="form-control" name="fname" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Mobile Number: *</label>
                  <input type="text" class="form-control" name="mno" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Flat, House No: *</label>
                  <input type="text" class="form-control" name="houseno" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Landmark e.g. near apollo hospital:: *</label>
                  <input type="text" class="form-control" name="landmark" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Town/City: *</label>
                  <input type="text" class="form-control" name="city" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Pincode: *</label>
                  <input type="text" class="form-control" name="pincode" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>State: *</label>
                  <input type="text" class="form-control" name="state" required="">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="addtype">Address Type</label>
                  <select class="form-control" id="addtype" required="">
                    <option>Home</option>
                    <option>Office</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <button id="savenddeliver" type="submit" class="btn btn-primary">Save And Deliver Here</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="iq-card">
        <div class="iq-card-body">
          <h4 class="mb-2">Nik John</h4>
          <div class="shipping-address">
            <p class="mb-0">9447 Glen Eagles Drive</p>
            <p>Lewis Center, OH 43035</p>
            <p>UTC-5: Eastern Standard Time (EST)</p>
            <p>202-555-0140</p>
          </div>
          <hr>
          <button id="deliver-address" href="javascript:void(0);" @click="submit" type="button" class="btn btn-primary btn-block d-block mt-1 next">Deliver To this Address</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Step2Address',
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    submit () {
      this.$emit('submit', true)
    }
  }
}
</script>
