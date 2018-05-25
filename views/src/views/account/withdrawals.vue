<style lang="less">
    @import './account.less';
</style>
<template>
    <div class='account'>
    	<Row class='account-magTB'>
    		<H1>
    			当前账户余额：50269.68元
    			<Button type='success'>提现</Button>
    		</H1>
    	</Row>
        <Row class='account-magTB'>
            <Input icon="search" placeholder="请输入品牌名称搜搜..." style="width: 200px" />
        </Row>
        <Table :data="tableData1" :columns="tableColumns1" stripe ref="table" border></Table>
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
                        goods_image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg',
                        category_id_1: '聚聚' + Math.floor(Math.random () * 100 + 1),
                        category_id_2: '聚聚' + Math.floor(Math.random () * 100 + 1),
                        brand: '聚聚' + Math.floor(Math.random () * 100 + 1),
                        goods_name: '聚聚狗粮' + Math.floor(Math.random () * 10000 + 1),
                        goods_price: Math.floor(Math.random () * 1000 + 1),
                        stock_num: Math.floor(Math.random () * 10000 + 1),
                        status:Math.floor(Math.random () * 2 + 1)
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
            },
        },
        computed: {
            tableColumns1 () {
                let columns = [];
                columns.push({
                    title: '序号',
                    width:80,
                    type:'index'
                });
                columns.push({
                    title: '提现时间',
                    key: 'create_time',
                });
                columns.push({
                    title: '提现金额',
                    key: 'money',
                    sortable: true,
                });
                columns.push({
                    title: '状态',
                    key: 'status',
                    render: (h, params) => {
                    		const colorArr = {1:'blue',2:'green','-1':'red'};
                    		const textArr = {1:'等待处理',2:'提现成功','-1':'拒绝'};
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
                            label: '等待处理',
                            value: '1'
                        },
                        {
                            label: '提现成功',
                            value: '2'
                        },
                        {
                            label: '拒绝',
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
                    width: 180,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    margin: '3px'
                                },
                                on: {
                                    click: () => {
                                        this.showDetail(params.row.id)
                                    }
                                }
                            }, '查看'),
                        ]);
                    }
                });
                return columns;
            }
        }
    };
</script>
