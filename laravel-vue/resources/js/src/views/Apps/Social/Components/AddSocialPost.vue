<template>
  <div>
    <iq-card body-class=" profile-page p-0">
      <template v-slot:headerTitle>
        <h4 class="card-title">Create Post</h4>
      </template>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-2">
            <img class="rounded-circle" src="../../../../assets/images/user/user-01.jpg">
          </div>
          <div class="col-md-10">
            <div class="form-group">
              <textarea type="text" placeholder="Write something about post..." class="rounded form-control" v-model="post.description"></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="row pl-1">
              <div class="col-md-3 p-0 pl-2 height-100" v-for="postImage in post.images" :key="postImage">
                <img class="preview w-100 h-100" :src="postImage">
              </div>
              <div class="col-md-3 p-0 pl-2 height-100">
                <div class="d-flex align-items-center justify-content-center py-2 position-relative" style="background-color: #eee; border: 2px dashed rgb(175, 169, 169); color: #ddd; height: 100%">
                  <span class="font-size-32 text-gray" style="font-weight: 500">+</span>
                  <input type="file" accept="image/*" @change="previewImage"  class="file position-absolute w-100 h-100" id="post_upload" style="opacity: 0;" multiple />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col m-0 float-md-right pb-3">
            <button class="btn btn-primary float-right" @click="addNewPost(post)">Post</button>
            <button class="btn btn-outline-secondary mr-2 float-right" @click="resetPost()">Cancel</button>
          </div>
        </div>
      </div>
    </iq-card>
  </div>
</template>
<script>
import Post from '../../../../Model/Post'

export default {
  name: 'AddSocialPost',
  data () {
    return {
      post: new Post()
    }
  },
  methods: {
    addNewPost (post) {
      this.$emit('addPost', post)
      this.post = new Post()
    },
    resetPost () {
      this.post = new Post()
    },
    previewImage: function (event) {
      const files = event.target.files
      Object.keys(files).forEach(i => {
        const file = files[i]
        const reader = new FileReader()
        reader.onload = (e) => {
          this.post.images.push(e.target.result)
        }
        reader.readAsDataURL(file)
      })
    }
  }
}
</script>
