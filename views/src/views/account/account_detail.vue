<style lang="less">
    @import '../order/address.less';
</style>
<template>
    <div>
    <Form :model="formItem" :label-width="150" class='address-form'>
        <FormItem label="账号：">
            <Input v-model="formItem.input" placeholder="请输入联系人..."></Input>
        </FormItem>
        <FormItem label="账户所有人姓名：">
            <Input v-model="formItem.input" placeholder="请输入联系方式..."></Input>
        </FormItem>
        <FormItem label="账号类型：">
            <Input v-model="formItem.input" placeholder="请输入联系方式..."></Input>
        </FormItem>
        <FormItem label="二维码：">
            <Col span="7">
                <al-selector v-model="formItem.address" data-type="code" level="2"/>
            </Col>
        </FormItem>
        <FormItem>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
import alSelector from '../my-components/area-linkage/components/al-selector.vue';
    export default {
        components: {
            alSelector
        },
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: '',
                    address:['130000','130700','130730']
                },
            }
        }
    };
</script>
