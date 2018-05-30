<style lang="less">
    @import '../goods/goods.less';
</style>
<template>
    <div>
    <Form :model="formItem" :label-width="150" class='goods-form'>
        <FormItem label="促销规则名称：">
            <Input v-model="formItem.input" placeholder="请输入促销规则名称..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="促销规则类型：">
            <Row>
                <Col span="4">
                    <Select>
		                <Option value="beijing">New York</Option>
		                <Option value="shanghai">London</Option>
		                <Option value="shenzhen">Sydney</Option>
		            </Select>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="满足某个数量或者金额：">
            <Input v-model="formItem.input" placeholder="请输入满足条件..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="赠送数量：">
            <Input v-model="formItem.input" placeholder="请输入满赠数量..." class='goods-input'></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
    export default {
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
