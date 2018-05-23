<template>
    <div>
        <Row>
            <Input icon="search" placeholder="请输入商品名称瘦瘦..." style="width: 200px" />
            <Input icon="search" placeholder="请输入品牌名称搜搜..." style="width: 200px" />
            <Button type="primary" @click="exportData(2)"><Icon type="ios-download-outline"></Icon>导出数据</Button>
        </Row>
        <Table :data="tableData1" :columns="tableColumns1" stripe ref="table"></Table>
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
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: '商品列表',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: 'Custom data',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
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
                    width:80,
                    key: 'id',
                    sortable: true
                });
                columns.push({
                    title: '商品图片',
                    key: 'goods_image',
                    render: (h,params)=>{
                        return h('img',{
                            attrs:{
                                src:params.row.goods_image,
                                width:100
                            }
                        })
                    }
                });
                columns.push({
                    title: '一级分类',
                    key: 'category_id_1'
                });
                columns.push({
                    title: '二级分类',
                    key: 'category_id_2',
                });
                columns.push({
                    title: '品牌',
                    key: 'brand',
                });
                columns.push({
                    title: '商品名称',
                    key: 'goods_name',
                });
                columns.push({
                    title: '批发价',
                    key: 'goods_price',
                    sortable: true,
                });
                columns.push({
                    title: '库存',
                    key: 'stock_num',
                    sortable: true,
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
                                    type: 'warning',
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
                            }, '下架'),
                            h('Button', {
                                props: {
                                    type: 'ghost',
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
                            }, '停售'),
                            h('Button', {
                                props: {
                                    type: 'info',
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
                            }, '编辑'),
                            h('Button', {
                                props: {
                                    type: 'error',
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
                            }, '删除'),
                            h('Button', {
                                props: {
                                    type: 'success',
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
                            }, '活动'),
                        ]);
                    }
                });
                return columns;
            }
        }
    };
</script>
