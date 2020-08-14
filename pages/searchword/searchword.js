// pages/searchword/searchword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: null,
    word:"",
    pinyin:"",
    explanation:[],
    simpleWord_result: {}
  },

  wordInput:function(e){
    this.setData({
      word: e.detail.value.trim()
    })
  },

  findWord:function(){
    var _this = this;
    var keyWord = _this.data.word;
    if (keyWord.length != 0 && keyWord.length == 1) {
      _this.simpleWord(keyWord);
    }
    if (keyWord.length > 1) {
      wx.showToast({
        title: '请输入单个汉字查询',
        icon: "none"
      })
    }
    _this.setData({
      value: ''
    })
  },

  finish: function (e) {
    var _this = this;
    var word = _this.data.word;
    // console.log("不去除空格时搜索词长度=>",e.detail.value.length);
    var keyWord = String(word).trim();
    if (keyWord.length != 0 && keyWord.length ==1) {
      _this.simpleWord(keyWord);
      // 清空输入框的值
      _this.setData({
        value: ''
      })
    }
    if (keyWord.length > 1) {
      wx.showToast({
        title: '请输入单个汉字查询',
        icon: "none"
      })
      // 清空输入框的值
      _this.setData({
        value: ''
      })
    }
  
  },
  
  // 搜字
  simpleWord: function (value) {
    var _this = this;
    wx.request({
      url: 'https://www.mxnzp.com/api/convert/dictionary?app_id=hiriqumornqhsevl&app_secret=WWt2RkR6WDY1TWM4WTZXTXJDWG5pUT09&content=' + value,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // console.log("搜字的信息=>",res.data);
        _this.setData({
          simpleWord_result: res.data.data,
          explanation: res.data.data[0].explanation.split(" "),
          pinyin: res.data.data[0].pinyin
        });
        // console.log("搜索字结果 =>", _this.data.simpleWord_result)
        // console.log("尝试去除转行符号后 =>", _this.data.explanation)
      }
    });
  },

  // 清空结果
  clean_result:function(){
    this.setData({
      pinyin:"",
      explanation: ""
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      title: '中华字典助你学习',
      desc: '知识简助手小程序助你学习',
      path: '/pages/searchword/searchword'
    }
  }
})