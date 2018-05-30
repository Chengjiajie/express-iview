<style lang="less">
    @import './address.less';
</style>
<template>
    <div>
    <Form :model="formItem" :label-width="100" class='address-form'>
        <FormItem label="退货单据编号：">
            <span>{{formItem.refund_no}}</span>
        </FormItem>
        <FormItem label="订单编号：">
            <span>{{formItem.order_no}}</span>
        </FormItem>
        <FormItem label="商品名称：">
            <span>{{formItem.goods_name}}</span>
        </FormItem>
        <FormItem label="商品图片：">
            <Img :src="formItem.goods_image" style='width:100px;'></Img>
        </FormItem>
        <FormItem label="订单金额：">
            <span>{{formItem.order_price}}</span>
        </FormItem>
        <FormItem label="退款金额：">
            <span>{{formItem.refund_money}}</span>
        </FormItem>
        <FormItem label="实收金额：">
            <span>{{formItem.money}}</span>
        </FormItem>
        <FormItem label="退货类型：">
            <span>{{formItem.refund_type}}</span>
        </FormItem>
        <FormItem label="退货理由：">
            <span>{{formItem.season}}</span>
        </FormItem>
        <FormItem label="商户编码：">
            <span>{{formItem.buy_company_id}}</span>
        </FormItem>
        <FormItem label="商户名：">
            <span>{{formItem.buy_company_name}}</span>
        </FormItem>
        <FormItem label="退货时间：">
            <span>{{formItem.create_time}}</span>
        </FormItem>
        <FormItem label="状态：">
            <span>{{formItem.status}}</span>
        </FormItem>
        <FormItem>
            <Button type="success">同意</Button>
            <Button type="error">驳回</Button>
            <Button type="ghost" >返回</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    refund_no:'195911863341532177',
                    order_no:'SP_335875551803720038',
                    goods_name:'倍健成犬粮1.5kg-1.5kg/袋',
                    goods_image:'http://statict.chong100.com/resource/Imgs/uploads/crmerp/images/2017/07/14/596832d1ebdaf.jpg',
                    order_price:1.50,
                    refund_money:2.5,
                    money:4.00,
                    refund_type:1,
                    season:'七天无理由退货',
                    buy_company_id:'22',
                    buy_company_name:'南京聚聚',
                    create_time:'2018-02-01 16:25:39',
                    status:1
                },
            }
        },

    };
</script>
