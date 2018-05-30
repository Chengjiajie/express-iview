<style lang="less">
    @import './goods.less';
</style>
<template>
    <div class='goods'>
    <Form :model="formItem" :label-width="150" class='goods-form'>
        <FormItem label="条形码">
            <Input v-model="formItem.input" placeholder="请输入条形码..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="商品名称">
            <Input v-model="formItem.input" placeholder="请输入商品名称..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="副标题">
            <Input v-model="formItem.input" placeholder="请输入副标题..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="品牌">
            <Col span="4" >
	            <Select v-model="formItem.brand" filterable>
	                <Option v-for="item in brandList" :value="item.value" :key="item.value">{{ item.label }}</Option>
	            </Select>
	        </Col>
        </FormItem>
        <FormItem label="商品分类">
            <Row>
                <Col span="4">
                    <Select v-model="formItem.select">
		                <Option value="beijing">New York</Option>
		                <Option value="shanghai">London</Option>
		                <Option value="shenzhen">Sydney</Option>
		            </Select>
                </Col>
                <Col span="4">
                    <Select v-model="formItem.select">
		                <Option value="beijing">New York</Option>
		                <Option value="shanghai">London</Option>
		                <Option value="shenzhen">Sydney</Option>
		            </Select>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="规格管理">
            <Row>
                <Col span="3">
                    <Button type="primary" @click="handleAdd" icon="plus-round">添加规格</Button>
                </Col>
            </Row>
        </FormItem>
        <FormItem class='goods-spec' v-for="(item,index) in formItem.specs" :key='index'>
        	<FormItem label="规格名称" class='goods-margin'>
	            <Input v-model="formItem.specs[index].spec_params" placeholder="请输入规格名称..." class='goods-input'></Input>
	        </FormItem>
	        <FormItem label="规格" class='goods-margin'>
	            <Input v-model="formItem.specs[index].spec" placeholder="请输入规格..." class='goods-input'></Input>
	        </FormItem>
	        <FormItem label="库存" class='goods-margin'>
	            <Input v-model="formItem.specs[index].stock_num" placeholder="请输入库存..." class='goods-input'></Input>
	        </FormItem>
	        <FormItem label="零售价" class='goods-margin'>
	            <Input v-model="formItem.specs[index].price_market" placeholder="请输入零售价..." class='goods-input'></Input>
	        </FormItem>
	        <FormItem label="批发价" class='goods-margin'>
	            <Input v-model="formItem.specs[index].price_sale" placeholder="请输入批发价..." class='goods-input'></Input>
	        </FormItem>
	        <FormItem label="代销价" class='goods-margin'>
	            <Input v-model="formItem.specs[index].agent_price" placeholder="请输入代销价..." class='goods-input'></Input>
	        </FormItem>
	        <FormItem label="临时代销价" class='goods-margin'>
	            <Input v-model="formItem.specs[index].agent_temporary_price" placeholder="请输入代销价..." class='goods-input'></Input>
	        </FormItem>
	        <FormItem label="临时代销价开始时间" class='goods-margin'>
	            <Row>
			        <Col span="12">
			            <DatePicker type="date" placeholder="请选择开始时间" style="width: 200px"></DatePicker>
			        </Col>
			    </Row>
	        </FormItem>
	        <FormItem label="临时代销价结束时间" class='goods-margin'>
	            <Row>
			        <Col span="12">
			            <DatePicker type="date" placeholder="请选择结束时间" style="width: 200px"></DatePicker>
			        </Col>
			    </Row>
	        </FormItem>
	        <FormItem>
	        	<Button type='error' size='small' @click="handleDel(index)">删除规格</Button>
	    	</FormItem>
        </FormItem>
        <FormItem label="重量">
            <Input v-model="formItem.input" placeholder="请输入商品重量..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="初始销量">
            <Input v-model="formItem.input" placeholder="请输入初始销量..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="库存预警下限">
            <Input v-model="formItem.input" placeholder="请输入库存预警下限..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="可使用宠金币抵扣率">
            <Input v-model="formItem.input" placeholder="请输入可使用宠金币抵扣率..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="运费">
            <Input v-model="formItem.input" placeholder="请输入可使用宠金币抵扣率..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="商品主图">
            <Input v-model="formItem.input" placeholder="请输入可使用宠金币抵扣率..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="商品详情图">
            <Input v-model="formItem.input" placeholder="请输入可使用宠金币抵扣率..." class='goods-input'></Input>
        </FormItem>
        <FormItem label="商品描述">
            <textarea  id="tinymceEditer" class='tinymce-textarea'></textarea>
        </FormItem>
        <FormItem>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
import tinymce from 'tinymce';
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
                    specs:[
                    	{},
                    ]
                },
                brandList:[
                	{
                		value:'1',
                		label:'比瑞吉'
                	}
                ]
            }
        },
        methods:{
        	handleAdd(){
        		this.formItem.specs.push({});
        	},
        	handleDel(index){
        		this.formItem.specs.splice(index,1)
        	},
        	init () {
	            this.$nextTick(() => {
	                let vm = this;
	                let height = document.body.offsetHeight - 300;
	                tinymce.init({
	                    selector: '#tinymceEditer',
	                    branding: false,
	                    elementpath: false,
	                    height: height,
	                    language: 'zh_CN.GB2312',
	                    menubar: 'edit insert view format table tools',
	                    plugins: [
	                        'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
	                        'searchreplace visualblocks visualchars code fullpage',
	                        'insertdatetime media nonbreaking save table contextmenu directionality',
	                        'emoticons paste textcolor colorpicker textpattern imagetools codesample'
	                    ],
	                    toolbar1: ' newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
	                    autosave_interval: '20s',
	                    image_advtab: true,
	                    table_default_styles: {
	                        width: '100%',
	                        borderCollapse: 'collapse'
	                    },
	                    setup: function (editor) {
	                        editor.on('init', function (e) {
	                            vm.spinShow = false;
	                            if (localStorage.editorContent) {
	                                tinymce.get('tinymceEditer').setContent(localStorage.editorContent);
	                            }
	                        });
	                        editor.on('keydown', function (e) {
	                            localStorage.editorContent = tinymce.get('tinymceEditer').getContent();
	                        });
	                    }
	                });
	            });
	        }
        },
        mounted () {
        this.init();
	    },
	    destroyed () {
	        tinymce.get('tinymceEditer').destroy();
	    }
    };
</script>
