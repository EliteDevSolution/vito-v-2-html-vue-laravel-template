<template>
  <b-card-body class="pt-0" :body-class="responsive ? 'p-0' : ''">
    <ais-configure :hitsPerPage="8" removeWordsIfNoResults="allOptional" />
    <div class="iq-filter-border iq-card py-2 px-3" v-if="!responsive">
      <span class="float-right">
        <ResetFilter />
      </span>
      <h4>Filter</h4>
    </div>
    <div class="iq-filter-border iq-card" :class="!shadow ? 'shadow-none' : ''">
      <h5 class="card-title">Brands</h5>
      <ais-refinement-list
        attribute="brand"
        searchable
        show-more
      >
        <div
          slot-scope="{
            items,
            isFromSearch,
            refine
          }"
        >
          <ul class="list-group iq-list-style-1">
            <li v-if="isFromSearch && !items.length">No results.</li>
            <li v-for="item in items" :key="item.value" class="mb-2 mr-0">
              <div class="d-flex justify-content-between">
                <b-form-checkbox
                  v-model="item.isRefined"
                  name="brands"
                  :value="true"
                  :unchecked-value="false"
                  @change="refine(item.value)"
                >
                  <ais-highlight attribute="item" :hit="item"/>
                </b-form-checkbox>
                <b-badge variant=" iq-bg-primary">{{ item.count.toLocaleString() }}</b-badge>
              </div>
            </li>
          </ul>
        </div>
      </ais-refinement-list>
    </div>
    <div class="iq-filter-border iq-card" :class="!shadow ? 'shadow-none' : ''">
      <h5 class="card-title">Prices</h5>
      <ais-range-input class="my-2" attribute="price">
        <div slot-scope="{ currentRefinement, range, refine, canRefine }" class="px-3">
          <vue-slider
            :min="range.min"
            :max="range.max"
            :value="toValue(currentRefinement, range)"
            :disabled="!canRefine"
            :lazy="true"
            :useKeyboard="true"
            :enableCross="false"
            tooltip="always"
            :duration="0"
            @change="refine({ min: $event[0], max: $event[1] })"
          >
            <template slot="dot" slot-scope="{ index, value }">
              <div :aria-valuemin="range.min" :aria-valuemax="range.max" :aria-valuenow="value" :data-handle-key="index" class="vue-slider-dot-handle" role="slider" tabindex="0" />
            </template>
            <template slot="tooltip" slot-scope="{ value }">
              {{ formatNumber(value) }}
            </template>
          </vue-slider>
        </div>
      </ais-range-input>
    </div>
    <div class="iq-filter-border iq-card" :class="!shadow ? 'shadow-none' : ''">
      <h5 class="card-title">Ratting</h5>
      <ais-rating-menu attribute="rating">
        <ul slot-scope="{ items, refine, createURL }" class="list-group iq-list-style-1">
          <li v-for="item in items" :key="item.value" class="mr-0">
            <a
              :href="createURL(item.value)"
              @click.prevent="refine(item.value)"
              class="d-flex justify-content-between"
            >
              <div>
                <span v-for="(full, index) in item.stars" :key="index">
                  <i class="ri-star-fill text-warning" v-if="full"></i>
                  <i class="ri-star-line" v-else></i>
                </span>
                <span :class="item.isRefined ? 'font-weight-bold' : ''">&Up</span>
              </div>
              <div>
                <span class="badge iq-bg-primary">{{ item.count }}</span>
              </div>
            </a>
          </li>
        </ul>
      </ais-rating-menu>
    </div>
    <div class="iq-filter-border iq-card mb-5" :class="!shadow ? 'shadow-none' : ''">
      <h5 class="card-title">Free Shipping</h5>
      <ais-toggle-refinement attribute="free_shipping" label="Free Shipping">
        <ul slot-scope="{ value, refine }" class="list-group iq-list-style-1">
          <li class="d-flex justify-content-between">
            <b-form-checkbox
              v-model="value.isRefined"
              name="free_shipping"
              @change="refine(value)"
            >
              Free Shipping
            </b-form-checkbox>
            <span class="badge iq-bg-primary">{{ value.count }}</span>
          </li>
        </ul>
      </ais-toggle-refinement>
    </div>
  </b-card-body>
</template>
<script>
import VueSlider from 'vue-slider-component'
import { formatNumber } from '../../../Utils/fliter'
import ResetFilter from './ResetFilter'
export default {
  name: 'EcommerceFilter',
  components: {
    VueSlider, ResetFilter
  },
  props: {
    shadow: { type: Boolean, default: true },
    responsive: { type: Boolean, default: true }
  },
  methods: {
    formatNumber,
    toValue (value, range) {
      return [
        value.min !== null ? value.min : range.min,
        value.max !== null ? value.max : range.max
      ]
    }
  }
}
</script>
