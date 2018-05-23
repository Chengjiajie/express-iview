<template>
    <div>
        <Row>
            <Input icon="search" placeholder="请输入商品名称瘦瘦..." style="width: 200px" />
            <Input icon="search" placeholder="请输入品牌名称搜搜..." style="width: 200px" />
            <Select v-model="model11" filterable style='width:200px' placeholder='请选择一级分类' clearable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select v-model="model11" filterable style='width:200px' placeholder='请选择二级分类' clearable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
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
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model11: '',
                model12: []
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
        },
        computed: {
            tableColumns1 () {
                let columns = [];
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
                    title: '品牌',
                    key: 'brand',
                });
                columns.push({
                    title: '分类',
                    key: 'category_id_1'
                });
                
                columns.push({
                    title: '商品名称',
                    key: 'goods_name',
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
                            }, '报价上架'),
                        ]);
                    }
                });
                return columns;
            }
        }
    };
</script>
