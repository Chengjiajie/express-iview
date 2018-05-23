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
                        status: Math.floor(Math.random () * 3 + 1),
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
                	type:'selection',
                	width:60,
                	align:'center'
                });
                columns.push({
                    title: '序号',
                    key: 'id',
                    sortable: true
                });
                columns.push({
                    title: '单据编号',
                    key: 'order_no',
                });
                columns.push({
                    title: '代销宠店名',
                    key: 'buy_company_name'
                });
                columns.push({
                    title: '订单金额',
                    key: 'num',
                    sortable: true,
                });
                columns.push({
                    title: '代销批发金额',
                    key: 'money',
                    sortable: true,
                });
                columns.push({
                    title: '收货人',
                    key: 'refund_money',
                });
                columns.push({
                    title: '收货人电话',
                    key: 'discount_money',
                });
                columns.push({
                    title: '创建时间',
                    key: 'out_money',
                    sortable: true,
                });
                columns.push({
                    title: '状态',
                    key: 'status',
                    render: (h, params) => {
                    		const colorArr = {1:'pink',2:'red',3:'blue',10:'green','-1':'gray'};
                    		const textArr = {1:'待付款',2:'待发货',3:'已发货',10:'已完成','-1':'已取消'};
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
                            label: '待发货',
                            value: '2'
                        },
                        {
                            label: '已发货',
                            value: '3'
                        },
                        {
                            label: '已完成',
                            value: '10'
                        },
                        {
                            label: '已取消',
                            value: '-1'
                        },
                        {
                            label: '带付款',
                            value: '1'
                        }
                    ],
                    filterMethod (value, row) {
                        return row.status == value;
                    }
                });
                columns.push({
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.showDetail(params.row.id)
                                    }
                                }
                            }, '查看详情'),
                        ]);
                    }
                });
                return columns;
            }
        }
    };
</script>
