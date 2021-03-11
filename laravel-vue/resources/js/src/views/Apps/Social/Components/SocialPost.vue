<template>
  <iq-card body-class="p-0">
    <template v-slot:body>
      <div class="user-post-data p-3">
        <div class="d-flex flex-wrap">
          <div class="media-support-user-img mr-3">
            <b-img rounded="circle" fluid :src="post.user.profile" alt=""/>
          </div>
          <div class="media-support-info mt-2">
            <h5 class="mb-0"><b-link href="#" class="">{{post.user.name}}</b-link></h5>
            <p class="mb-0 text-secondary">{{post.time | formatDate }}</p>
          </div>
          <div class="iq-card-header-toolbar d-flex align-items-center">
            <b-dropdown id="dropdownMenuButton40" right variant="none" menu-class="p-0">
              <template v-slot:button-content>
                <b-link href="#" class="text-secondary"><i class="ml-3 ri-more-2-line"></i></b-link>
              </template>
              <b-dropdown-item href="#" @click="isFollowed(!post.is_follow)">
                <span v-if="post.is_follow">
                  <i class="ri-user-follow-line mr-2">  Unfollow</i>
                </span>
                <span v-else>
                  <i class="ri-user-unfollow-line mr-2">  Follow</i>
                </span>
              </b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-share-forward-line mr-2"></i>Share</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-file-copy-line mr-2"></i>Copy Link</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </template>
    <hr class="m-0" />
    <div class="user-post">
      <p class="p-2" v-if="post.description">{{post.description}}</p>
      <div id="photo-grid">
        <photo-grid :box-height="'400px'" :box-width="'100%'" :boxBorder=2>
          <img v-for="(image, index) in post.images" :src="image" :key="index" />
        </photo-grid>
      </div>
    </div>
    <div class="comment-area p-3">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center feather-icon mr-3">
            <b-link href="javascript:void(0);" @click="isLiked(!post.is_liked)">
              <i :class="'text-danger '+(post.is_liked ? 'ri-heart-fill' : 'ri-heart-line')"></i>
            </b-link>
            <span class="ml-1">{{post.likes}}</span>
          </div>
          <div class="d-flex align-items-center message-icon">
            <b-link href="javascript:void(0);"><i class="ri-chat-4-line text-primary"></i></b-link>
            <span class="ml-1">{{post.comments.length}}</span>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="iq-media-group">
            <b-link href="#" class="iq-media">
              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../../../assets/images/user/user-05.jpg')" alt="" />
            </b-link>
            <b-link href="#" class="iq-media">
              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../../../assets/images/user/user-06.jpg')" alt="" />
            </b-link>
            <b-link href="#" class="iq-media">
              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../../../assets/images/user/user-07.jpg')" alt="" />
            </b-link>
            <b-link href="#" class="iq-media">
              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../../../assets/images/user/user-08.jpg')" alt="" />
            </b-link>
            <b-link href="#" class="iq-media">
              <b-img class="avatar-40" rounded="circle" fluid :src="require('../../../../assets/images/user/user-09.jpg')" alt="" />
            </b-link>
          </div>
        </div>
      </div>
      <hr>
      <ul class="post-comments p-0 m-0">
        <li class="mb-2" v-for="(postComment, postCommentIndex) in post.comments" :key="postComment.id">
          <div class="d-flex flex-wrap">
            <div class="user-img">
              <b-img :src="postComment.image" alt="userimg" class="avatar-35"  rounded="circle" fluid />
            </div>
            <div class="comment-data-block ml-3">
              <h6>{{postComment.user.name}}</h6>
              <p class="mb-0">{{postComment.user.msg}}</p>
              <div class="d-flex flex-wrap align-items-center comment-activity">
                <b-link @click="isLikedComment(postCommentIndex, !postComment.is_commentLike)">
                  <span v-if="!postComment.is_commentLike" class="text-primary">like</span>
                  <span class="text-secondary" v-else>unlike</span>
                </b-link>
                <b-link href="javascript:void(0);">reply</b-link>
                <span>{{postComment.user.time}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <b-form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
        <b-form-input type="text" @keyup.enter="saveComment(commentMessage)" v-model="commentMessage" class="rounded" placeholder="Lovely!" />
        <div class="comment-attagement d-flex">
          <b-link href="javascript:void(0);"><i class="ri-send-plane-line mr-2" @click="saveComment(commentMessage)"></i></b-link>
        </div>
      </b-form>
    </div>
</iq-card>
</template>
<script>
export default {
  name: 'SocialPost',
  props: [
    'post'
  ],
  data () {
    return {
      commentMessage: ''
    }
  },
  methods: {
    isLiked (postLike) {
      this.post.is_liked = postLike

      if (postLike) {
        this.post.likes += 1
      } else {
        this.post.likes -= 1
      }
    },
    isFollowed (follow) {
      this.post.is_follow = follow
    },
    isLikedComment (index, like) {
      this.post.comments[index].is_commentLike = like
    },
    saveComment (postComment) {
      this.post.comments.push({
        image: require('../../../../assets/images/user/user-04.jpg'),
        user: { name: 'Sandy S', msg: postComment, time: new Date() },
        is_commentLike: false
      })

      this.commentMessage = ''
    }
  }
}
</script>
