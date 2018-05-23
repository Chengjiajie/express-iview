<template>
	<div>
		<Row>
            <Input icon="search" placeholder="请输入姓名搜搜..." style="width: 200px" />
            <Input icon="search" placeholder="请输入手机号搜搜..." style="width: 200px" />
        </Row>
	    <Table :data="tableData1" :columns="tableColumns1" stripe ref="selection"></Table>
	    <div style="margin: 10px;overflow: hidden">
	        <div style="float: right;">
	            <Page :total="100" :current="1" @on-change="changePage"></Page>
	        </div>
	    </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData1: this.mockTableData1(),
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        id: Math.floor(Math.random () * 100 + 1),
                        order_no: Math.floor(Math.random () * 1000000 + 1),
                        buy_company_name: '聚聚' + Math.floor(Math.random () * 100 + 1),
                        num: Math.floor(Math.random () * 100 + 1),
                        money: Math.floor(Math.random () * 1000 + 1),
                        refund_money: Math.floor(Math.random () * 1000 + 1),
                        discount_money: Math.floor(Math.random () * 100 + 1),
                        out_money: Math.floor(Math.random () * 100 + 1),
                        status: Math.floor(Math.random () * 2 + 1),
                    })
                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
                this.tableData1 = this.mockTableData1();
            },
            showDetail(id){
            	this.$router.push({
                       name: 'order_detail',
                       params:{order_id:id}
                });
            }
        },
        computed: {
            tableColumns1 () {
                let columns = [];
                columns.push({
                    type:'index',
                    title: '序号',
                    width:60
                });
                columns.push({
                    title: '所在区域',
                    key: 'address',
                });
                columns.push({
                    title: '名称',
                    key: 'company_name'
                });
                columns.push({
                    title: '联系人',
                    key: 'nock_name',
                });
                columns.push({
                    title: '联系方式',
                    key: 'phone',
                });
                columns.push({
                    title: '订单数',
                    key: 'order_nums',
                    sortable: true,
                });
                columns.push({
                    title: '地址',
                    key: 'address_detail',
                });
                columns.push({
                    title: '客户类型',
                    key: 'type',
                    render: (h, params) => {
                    		const colorArr = {1:'blue',2:'green',};
                    		const textArr = {1:'商户客户',2:'个人客户',};
                            const row = params.row;
                            const color = colorArr[row.status];
                            const text = textArr[row.status];

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        },
                    filters: [
                        {
                            label: '商户客户',
                            value: '1'
                        },
                        {
                            label: '个人客户',
                            value: '2'
                        },
                    ],
                    filterMethod (value, row) {
                        return row.status == value;
                    }
                });
                return columns;
            }
        }
    };
</script>
