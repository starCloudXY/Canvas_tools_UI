Component({
  properties: {

  },
  data: {
    selected:"",
    show:false,
    tabList:[
        {
          "pagePath": "pages/home/index",
          "text": "首页",
          active:true
        },
        {
          "pagePath": "pages/date/index",
          "text": "日程",
           active:true
        },
        {
          "pagePath": "pages/add/index",
          "text": "添加",
           active :false
        },
        {
          "pagePath": "pages/list/index",
          "text": "清单",
          active:true
        },
        {
          "pagePath": "pages/mine/mine",
          "text": "我的",
          active:true
        }
      ]
    },
  methods: {
    switchTab(e){
      console.log(this.data)
      let key = Number(e.currentTarget.dataset.index);
      let tabList = this.data.tabList;
      let selected = this.data.selected;

      if(selected !== key){
        this.setData({
          selected:key
        });
        wx.switchTab({
          url: `/${tabList[key].pagePath}`,
        })
      }
    }
  }
})