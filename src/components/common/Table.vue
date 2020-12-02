<template>
<div>
<!-- 表格组件的封装 -->
    <div class="table">
        <el-table :border="true" max-height="750" :data="tableData"  style="width: 100%;">
            <el-table-column fixed v-for="(item, index) in tableHeader" :prop="item.prop" :label="item.label" :key="index"> </el-table-column>
        </el-table>
    </div>
    <div class="block">
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[10, 20, 50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="40">
        </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    props: ['tableHeader', 'tableData'],
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    created(){
        
    },
    data() {
        return {};
    }
};
</script>
<style>
.block {
    margin-top: 20px;
    float: right;
}
</style>
