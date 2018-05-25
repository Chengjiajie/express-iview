<template>
	<div>
		<Row>
            <Input icon="search" placeholder="请输入姓名搜搜..." style="width: 200px" />
            <Input icon="search" placeholder="请输入手机号搜搜..." style="width: 200px" />
        </Row>
	    <Table :data="tableData1" :columns="tableColumns1" stripe ref="selection" header="false"></Table>
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
                        status: Math.floor(Math.random () * 1 + 1),
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
                });
                columns.push({
                    title: '收支类型',
                    key: 'type',
                    render: (h, params) => {
                    		const colorArr = {1:'blue',2:'green',};
                    		const textArr = {1:'支出',2:'收入',};
                            const row = params.row;
                            const color = colorArr[row.type];
                            const text = textArr[row.type];

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        },
                    filters: [
                        {
                            label: '支出',
                            value: '1'
                        },
                        {
                            label: '收入',
                            value: '2'
                        },
                    ],
                    filterMethod (value, row) {
                        return row.type == value;
                    }
                });
                columns.push({
                    title: '备注描述',
                    key: 'summary'
                });
                columns.push({
                    title: '业务类型',
                    key: 'oparet_type',
                    render: (h, params) => {
                    		const colorArr = {1:'blue',2:'green',3:'pink',4:'red'};
                    		const textArr = {1:'直销',2:'批发',3:'提现',4:'交易退款'};
                            const row = params.row;
                            const color = colorArr[row.oparet_type];
                            const text = textArr[row.oparet_type];

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        },
                    filters: [
                        {
                            label: '直销',
                            value: '1'
                        },
                        {
                            label: '批发',
                            value: '2'
                        },
                        {
                            label: '提现',
                            value: '3'
                        },
                        {
                            label: '交易退款',
                            value: '4'
                        },
                    ],
                    filterMethod (value, row) {
                        return row.oparet_type == value;
                    }
                });
                columns.push({
                    title: '相关订单号',
                    key: 'order_no',
                });
                columns.push({
                    title: '创建时间',
                    key: 'create_time',
                });
                columns.push({
                    title: '状态',
                    key: 'status',
                    render: (h, params) => {
                    		const colorArr = {0:'bule',1:'green','-1':'gray'};
                    		const textArr = {0:'处理中',1:'交易完毕','-1':'交易完毕'};
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
                            label: '处理中',
                            value: '0'
                        },
                        {
                            label: '交易完毕',
                            value: '1'
                        },
                        {
                            label: '交易完毕',
                            value: '-1'
                        },
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
