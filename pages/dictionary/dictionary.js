// pages/dictionary/dictionary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url:""
  },

  //跳转到字典
  searchword: function () {
    wx.navigateTo({
      url: '../searchword/searchword',
    })
  },

  // 跳到历史上的今天
  searchpoems: function() {
    wx.navigateTo({
      url: '../historytoday/historytoday',
    })
  },

  // 跳到中英翻译
  translate: function () {
    wx.navigateTo({
      url: '../translate/translate',
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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
      title: '知识工具',
      desc: '知识简助手小程序助你学习',
      path: 'pages/dictionary/dictionary'
    }
  }
})