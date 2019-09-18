
const menuConfig = [
  {
    title: '我是卖家',
    icon: "",
    key: '0',
    children: [
      {
        title: '出售中',
        children: null,
        sub: '/seller/block',
        key: '1-3',
        powers: [],
      },
      {
        title: '已报价',
        children: null,
        sub: '/seller/quote',
        key: '1-1',
        powers: [],
      },
      {
        title: '交易中',
        children: null,
        sub: '/seller/trade',
        key: '1-2',
        powers: [],
      },
      {
        title: '已完成',
        children: null,
        sub: '/seller/done',
        key: '1-4',
        powers: [],
      },
      {
        title: '维权中',
        children: null,
        sub: '/seller/safeguard',
        key: '1-5',
        powers: [],
      },
      {
        title: '仓库中',
        children: null,
        sub: '/seller/verify',
        key: '1-6',
        powers: [],
      },
    ],
  },
  {
    title: '我是买家',
    icon: "",
    key: '1',
    children: [
      {
        title: '报价中',
        children: null,
        sub: '/buyer/quote',
        key: '2-1',
        powers: [],
      },
      {
        title: '待付款',
        children: null,
        sub: '/buyer/obligation',
        key: '2-2',
        powers: [],
      },
      {
        title: '交易中',
        children: null,
        sub: '/buyer/trade',
        key: '2-3',
        powers: [],
      },
      {
        title: '已完成',
        children: null,
        sub: '/buyer/done',
        key: '2-4',
        powers: [],
      },
      {
        title: '维权中',
        children: null,
        sub: '/buyer/safeguard',
        key: '2-5',
        powers: [],
      },
    ],
  },
  {
    title: '我购买的订单',
    icon: "",
    key: '2',
    children: [
      // {
      //   title: '全部',
      //   children: null,
      //   sub: '/order/all',
      //   key: '3-1',
      //   powers: [],
      // },
      // {
      //   title: '待付款',
      //   children: null,
      //   sub: '/order/obligation',
      //   key: '3-2',
      //   powers: [],
      // },
      {
        title: '我的订单',
        children: null,
        sub: '/order/done',
        key: '3-3',
        powers: [],
      },
    ],
  },

  {
    title: '资金管理',
    icon: "",
    key: '3',
    children: [
      {
        title: '充值提现',
        children: null,
        sub: '/withdrawal/recharge',
        key: '4-1',
        powers: [],
      },
      {
        title: '收支明细',
        children: null,
        sub: '/income_detail',
        key: '4-2',
        powers: [],
      },
      {
        title: '冻结明细',
        children: null,
        sub: '/freeze_detail',
        key: '4-3',
        powers: [],
      },
    ],
  },
  {
    title: '个人资料',
    icon: "",
    key: '4',
    children: [
      {
        title: '完善收款账号信息',
        children: null,
        sub: '/complete_info/account',
        key: '5-1',
        powers: [],
      },
      {
        title: '设置登录密码',
        children: null,
        sub: '/change_password/login',
        key: '5-2',
        powers: [],
      },
      {
        title: '设置支付密码',
        children: null,
        sub: '/change_password/pay',
        key: '5-3',
        powers: [],
      },
      {
        title: '修改绑定手机号',
        children: null,
        sub: '/phone_auth',
        key: '5-4',
        powers: [],
      },
    ],
  },
  {
    title: '评价建议',
    icon: "",
    key: '5',
    children: [
      {
        title: '我要评价',
        children: null,
        sub: '/comment/want',
        key: '6-1',
        powers: [],
      },
      {
        title: '我的评价',
        children: null,
        sub: '/comment/my',
        key: '6-2',
        powers: [],
      },
      {
        title: '我要建议',
        children: null,
        sub: '/suggest/want',
        key: '6-3',
        powers: [],
      },
      {
        title: '我的建议',
        children: null,
        sub: '/suggest/my',
        key: '6-4',
        powers: [],
      },
    ],
  },
];

export default menuConfig;