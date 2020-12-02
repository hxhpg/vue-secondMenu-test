<template>
  <div>
    <!-- 分页组件的封装 -->
    <slot name="table" :data="rows" :loading="loading"></slot>
    <Row type="flex" justify="end" style="margin-top:10px">
      <Page
        :current="currentPage"
        :total="total"
        :page-size="pageSize"
        @on-change="handlePageChange"
        @on-page-size-change="handlePageSizeChange"
        :page-size-opts="pageSizeOpts"
        size="small"
        show-total
        show-elevator
        show-sizer
      ></Page>
    </Row>
  </div>
</template>

<script>
export default {
  props: {
    eventBus: Object,
    searchParams: {
      type: Object,
      default () {
        return {}
      }
    },
    autoLoad: {
      type: Boolean,
      default () {
        return true
      }
    },
    api: {
      type: String,
      default () {
        return ''
      }
    },
    pageSizeOpts: {
      type: Array,
      default () {
        return [10, 20, 50]
      },
      validator (val) {
        return Array.isArray(val) && val.length > 0 && val.reduce((result, item) => {
          return typeof item === 'number' && item > 0 && result
        }, true)
      }
    }
  },
  created () {
    this.loadingData()
  },
  updated(){
    console.log('total',this.total);
  },
  data () {
    return {
      loading: false,
      currentPage: 1,
      rows: [],
      total: 0,
      pageSize: this.pageSizeOpts[0]
    }
  },
  methods: {
    loadingData () {
      if (this.autoLoad) {
        this.query()
      }
      this.eventBus.$on('search', () => {
        this.currentPage = 1
        this.query()
      })
      this.eventBus.$on('loading', () => {
        this.query()
      })
    },
    query () {
      this.loading = true
      this.$api[this.api](Object.assign(this.searchParams, {
        start: (this.currentPage - 1) * this.pageSize,
        // start: (this.currentPage),
        limit: this.pageSize
      })).then((res) => {
        if (res) {
          // console.log('page',res.total);
          this.total = res.total
          this.rows = res.list
          this.$emit('datas', res.list)
          this.$emit('currentPage', this.currentPage)
          this.$emit('pageSize', this.pageSize)
        }
      }).finally(() => {
        this.loading = false
      })
    },
    handlePageChange (current) {
      this.currentPage = current
      this.query()
    },
    handlePageSizeChange (pageSize) {
      this.currentPage = 1
      this.pageSize = pageSize
      this.query()
    },
    // fanqz add 补充可以获取table当前数据
    getTableData () {
      return this.rows
    }
  }
}
</script>
