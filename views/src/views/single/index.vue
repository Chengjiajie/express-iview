<template>
	<div>
		<Row style="margin:20px 0;">
			<Button type="info" @click='discountAdd'>新增单品促销方案</Button>
		</Row>
    	<Table border :columns="columns" :data="data"></Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                	{
                		title:'序号',
                		type:'index'
                	},
                    {
                        title: '促销方案',
                        key: 'name',
                    },
                    {
                        title: '条件',
                        key: 'satisfy'
                    },
                    {
                        title: '促销方式',
                        key: 'type',
                        render: (h,params)=>{
                        	const text = params.row.type_text;
                        	return h('span',{},text)
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$router.push({
                    name:'discount_detail',
                    params:{id:index}
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            discountAdd(){
                this.$router.push({
                    name:'discount_add',
                })
            }
        }
    };
</script>
