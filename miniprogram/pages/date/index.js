// pages/biaoge4/biaoge4.js
// pages/myOrder/myOrder.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
  
    var that = this;

    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../icon/1.png",
          "useDate": "2022-05-05-19:00",
          "cx": "高数作业",
          "time": "",
          "feiyong": "",
          "color":"silentBlue"
        },
        {
          "id": 2,
          "useDate": "2022-05-05-19:00",
          "cx": "化学作业",
          "time": "",
          "feiyong": "",
          "color":"treegreen"
        },
        {
          "id": 3,
          "useDate": "2022-05-05-19:00",
          "cx": "物理作业",
          "time": "",
          "feiyong": "",
          "color":"green.light"
        },
        {
          "id": 4,
          "useDate": "2022-05-05-19:00",
          "cx": "电路理论",
          "time": "",
          "feiyong": "",
          "color":"olive.light"
        }
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
    })
    this.tabBar();
  },
  tabBar(){
    if(typeof this.getTabBar === 'function' && this.getTabBar()){
      this.getTabBar().setData({
        selected:0
      })
    }
  },

  toggleBtn: function (event) { 
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id; 
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    } 
  }
})




