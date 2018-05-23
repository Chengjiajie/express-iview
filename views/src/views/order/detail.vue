<style lang="less">
    @import './detail.less';
</style>
<template>
    <div class='order'>
        <Collapse v-model="value1">
            <Panel name="1" >
                <span class="order-title">订单信息</span>
                <div class='order-detail' slot="content">
                    <Table border :data="data1" :show-header="false" :columns="tableColumns1"></Table>
                </div>
            </Panel>
            <Panel name="2" >
                <span class="order-title">物流信息</span>
                <div class='order-express' slot="content">
                    <Table border :data="data2" :show-header="false" :columns="tableColumns1"></Table>
                </div>
            </Panel>
            <Panel name="3" >
                <span class="order-title">订单清单</span>
                <div class='order-lists' slot="content">
                    <Table border :data="data3" :columns="tableColumns2"></Table>
                </div>
            </Panel>
        </Collapse>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: [1,3],
                data1:[
                    {title:'订单编号',value:'SP_435921729343477227'},
                    {title:'订单名称',value:'格拉腾太平湖小型犬幼犬粮1.5kg-1....等...'},
                    {title:'订单金额',value:'48.00'},
                    {title:'订单状态',value:'已关闭'},
                    {title:'订单优惠合计',value:'0.00'},
                    {title:'代金券折扣金额',value:'0.00'},
                    {title:'宠金币折扣金额',value:'0.00'},
                    {title:'运费',value:'0.00'},
                    {title:'订单出账金额',value:'0'},
                    {title:'退款金额',value:'48'},
                ],
                data2:[
                    {title:'支付时间',value:'2018-02-12 13:47:26'},
                    {title:'支付方式',value:'微信支付'},
                    {title:'收货人',value:'靖琪'},
                    {title:'联系电话',value:'18651632129'},
                    {title:'收货地址',value:'福建省-福州市-闽侯县世纪金融大厦36号'},
                    {title:'发货时间',value:'2018-02-12 13:47:26'},
                    {title:'运单号码',value:'48'},
                    {title:'物流公司',value:'48'},
                ],
                data3:[
                    {
                        goods_image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg',
                        goods_sn:'CBH_2018121202121',
                        goods_name:'格拉腾太平湖小型犬幼犬粮1.5kg-1.5kg',
                        num:1,
                        give_num:0,
                        express_num:1,
                        goods_price:48.00,
                        true_price:48.00,
                        status:3,
                        deal_money:48
                    }
                ],
                tableColumns1:[
                    {
                        title:'描述',
                        key:'title'
                    },
                    {
                        title:'值',
                        key:'value'
                    }
                ],
                tableColumns2:[
                    {
                        title:'商品图片',
                        key:'goods_image',
                        render: (h,params)=>{
                            return h('img',{
                                attrs:{
                                    src:params.row.goods_image,
                                    width:100,
                                }
                            })
                        }
                    },
                    {
                        title:'商品条形码',
                        key:'goods_sn'
                    },
                    {
                        title:'商品名称',
                        key:'goods_name'
                    },
                    {
                        title:'购买数量',
                        key:'num'
                    },
                    {
                        title:'赠送数量',
                        key:'give_num'
                    },
                    {
                        title:'需发货数量',
                        key:'express_num'
                    },
                    {
                        title:'原始单价',
                        key:'goods_price'
                    },
                    {
                        title:'成交单价',
                        key:'true_price'
                    },
                    {
                        title:'状态',
                        key:'status'
                    },
                    {
                        title:'成交金额',
                        key:'deal_money'
                    }
                ]
            }
        }
    };
</script>