// pages/historytoday/historytoday.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    history_today: {},
    history_today_detail:{},
    today_title: {}, 
    today_detail: {},
    sysheight: ""
  },

  // 历史上的今天
  historyToday: function () {
    var _this = this;
    wx.request({
      url: "https://www.mxnzp.com/api/history/today?type=1&app_id=hiriqumornqhsevl&app_secret=WWt2RkR6WDY1TWM4WTZXTXJDWG5pUT09",
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // console.log("相关信息=>", res.data.data);
        _this.setData({
          history_today: res.data.data
        });
        console.log(_this.data.history_today);
      }
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    // 手机系统的高度
    wx.getSystemInfo({
      success: function (res) {
        // console.log("屏幕高度=>",res.windowHeight,"px");
        _this.setData({
          sysheight: res.windowHeight * 2
        })
        // console.log("屏幕高度=>", _this.data.sysheight,"rpx")
      },
    })
    this.historyToday();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '带你看历史上的今天',
      desc: '知识简助手小程序带你看历史上的今天。',
      path: '/pages/historytoday/historytoday'
    }
  }
})