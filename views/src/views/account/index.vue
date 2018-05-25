<template>
	<div>
		<Row style="margin:20px 0">
			<Button type='info'>添加账户</Button>
		</Row>
		<Table :data="tableData1" :columns="tableColumns1" stripe border></Table>
	</div>
</template>
<script type="text/javascript">
	export default{
		data() {
			return {
				tableColumns1:[
					{
						title:'序号',
						type:'index',
						width:70
					},
					{
						title:"账号",
						key:'account_name'
					},
					{
						title:'姓名',
						key:'name'
					},
					{
						title:'账号类型',
						key:'account_type'
					},
					{
						title:'添加时间',
						key:'create_time'
					},
					{
						title:'二维码',
						key:'image',
						render: (h,params)=>{
							return h('img',{
								attrs:{
									src:params.row.image,
									width:100
								}
							})
						}
					},
					{
						title:'操作',
						render: (h,params)=>{
							return h('div',[
									h('Button',{
										props: {
		                                    type: 'primary',
		                                    size: 'small'
		                                },
		                                style:{
		                                	marginRight:'5px',
		                                },
		                                on:{
		                                	click:() =>{

		                                	}
		                                }
									},'编辑'),
									h('Button',{
										props: {
		                                    type: 'error',
		                                    size: 'small'
		                                },
		                                style:{
		                                	marginRight:'5px',
		                                },
		                                on:{
		                                	click:() =>{
		                                		
		                                	}
		                                }
									},'删除')
								])
						}
					}
				],
				tableData1:[
					{
						account_name:'131111111',
						name:'王大锤',
						account_type:'支付宝',
						create_time:'2018-5-24',
						image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg',
					}
				]
			}
		}
	};
</script>