<!-- 分页封装 -->
<template>
    <div class="page">
        <div class="left_op" >
            <slot name="leftop"></slot>
        </div>
        <div class="pagination">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next"
            :total="count">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import merge from 'webpack-merge'
export default {
    data() {
            return {
                page: {
                    currentPage: 1,
                    pageSize: this.total
                },
                count: 0
           }
        },
        props: ['total', 'change', 'route'],
        watch: {
            total: {
                handler(v) {
                    this.count = v;
                }
            }
        },
        computed: {
            currentPage() {
                if (!this.$route.query.currentPage) {
                    this.count = 0;
                }
                return this.route !== false ? parseInt(this.$route.query.currentPage || 1) : 1
            },
            pageSize() {
                return this.route !== false ? parseInt(this.$route.query.pageSize || 10) : 10
            },
        },
        methods: {
            handleSizeChange(val) {
                this.page.pageSize = val;
                this.handleChange();
            },
            handleCurrentChange(val) {
                this.page.currentPage = val;
                this.handleChange();
            },
            handleChange() {
                if (this.count === 0) {
                    return;
                }
                if (this.route !== false) {
                    this.$router.push({
                        query: merge(this.$route.query, this.page)
                    });
                }
                this.$emit('change', this.page)
            }
        }
}
</script>
<style scoped>
.page { position: relative;min-height: 32px; padding-top: 10px;}
.page .pagination {position: absolute;right: 0;}
.page .left_op{padding-left: 14px; float: left;}
</style>
<style>
.page .left_op .el-checkbox__label{font-size:12px }
.page .left_op .op_project{margin-left: 10px}
</style>
