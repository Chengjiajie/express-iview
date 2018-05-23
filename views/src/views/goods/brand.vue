<template>
    <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: 'ID',
                        key: 'id',
                        width:50
                    },
                    {
                        title: '品牌名称',
                        key: 'brand_name'
                    },
                    {
                        title: '图标',
                        key: 'icon',
                        render: (h,params)=>{
                        	return h('img',{
                        		attrs:{
                        			src:params.row.icon,
                        			width:100
                        		}
                        	})
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
                                            this.showDetail(params.row.id)
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
                data6: [
                    {
                        id: '1',
                        brand_name: '比瑞吉',
                        icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'
                    },
                    {
                        id: '2',
                        brand_name: '福摩',
                        icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'
                    },
                    {
                        id: '3',
                        brand_name: '皇家',
                        icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'
                    },
                    {
                        id: '4',
                        brand_name: '格拉腾',
                        icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'
                    },
                ]
            }
        },
        methods: {
            showDetail (id) {
                this.$router.push({
                	name:'brand-detail',
                	params:{brand_id:id}
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    };
</script>
