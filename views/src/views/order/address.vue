<template>
	<div>
		<Row style="margin:20px 0">
	    	<Button type='info'>添加地址</Button>
	    </Row>
	    <Table border :columns="columns7" :data="data6"></Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                	{
                		type:'index',
                		title:'序号',
                	},
                    {
                        title: '联系人',
                        key: 'nick_name',
                    },
                    {
                        title: '联系方式',
                        key: 'phone'
                    },
                    {
                        title: '省',
                        key: 'provice'
                    },
                    {
                        title: '市',
                        key: 'city'
                    },
                    {
                        title: '区',
                        key: 'district'
                    },
                    {
                        title: '详细地址',
                        key: 'address'
                    },
                    {
                        title: '默认地址',
                        key: 'is_default'
                    },
                    {
                        title: 'Action',
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
                                            this.show(params.row.id)
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
                                            this.remove(params.row.id)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                    	id:'1',
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                    	id:'2',
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                    	id:'3',
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                    	id:'4',
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {
            show (id) {
                this.$router.push({
                       name: 'address_detail',
                       params:{id:id}
                });
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    };
</script>
