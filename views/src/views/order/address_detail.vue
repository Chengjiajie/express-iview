<style lang="less">
    @import './address.less';
</style>
<template>
    <div>
    <Form :model="formItem" :label-width="100" class='address-form'>
        <FormItem label="联系人：">
            <Input v-model="formItem.input" placeholder="请输入联系人..."></Input>
        </FormItem>
        <FormItem label="联系方式：">
            <Input v-model="formItem.input" placeholder="请输入联系方式..."></Input>
        </FormItem>
        <FormItem label="省、市、区：">
            <Col span="7">
                <al-selector v-model="formItem.address" data-type="code" level="2"/>
            </Col>
        </FormItem>
        <FormItem label="地址：">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入详细地址..."></Input>
        </FormItem>
        <FormItem label="默认地址：">
            <RadioGroup v-model="formItem.radio">
                <Radio label="1">是</Radio>
                <Radio label="0">否</Radio>
            </RadioGroup>
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
