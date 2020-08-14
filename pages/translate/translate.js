// pages/translate/translate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic_array_to: [
      { id: 1, name: '中文', value: "zh" },
      { id: 2, name: '英文', value: "en" },
      { id: 3, name: '粤语', value: "yue" },
      { id: 4, name: '文言文', value: "wyw" },
      { id: 5, name: '日语', value: "jp" },
      { id: 6, name: '韩语', value: "kor" },
      { id: 7, name: '法语', value: "fra" },
      { id: 8, name: '俄语', value: "ru" },
      { id: 9, name: '越南语', value: "vie" },
      { id: 10, name: '泰语', value: "th" },
    ],
    pic_array_from: [
      { id: 1, name: '英文', value: "en" },
      { id: 2, name: '中文', value: "zh"},
      { id: 3, name: '粤语', value: "yue" },
      { id: 4, name: '文言文', value: "wyw" },
      { id: 5, name: '日语', value: "jp" },
      { id: 6, name: '韩语', value: "kor" },
      { id: 7, name: '法语', value: "fra" },
      { id: 8, name: '俄语', value: "ru" },
      { id: 9, name: '越南语', value: "vie" },
      { id: 10, name: '泰语', value: "th" },
    ],
    from_index: 1,
    to_index:1,
    from_lang:"zh",
    to_lang:"en",
    from_value: "",
    result_value: ""
  },

  bindPickerChange_from: function (e) {
    // console.log('from_index=>', e.detail.value);
    this.setData({   //给变量赋值
      from_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
      from_lang: this.data.pic_array_from[e.detail.value].value
    })
    // console.log('from值:', this.data.from_lang);
  },

  bindPickerChange_to: function (e) {
    // console.log('to_index=>', e.detail.value);
    this.setData({   //给变量赋值
      to_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
      to_lang: this.data.pic_array_to[e.detail.value].value
    })
    // console.log('to值:', this.data.to_lang);
  },


  // 获取原始文本
  getFrom: function(e){
    // console.log("原始文本=>",e.detail.value)
    var _this = this;
    _this.setData({
      from_value: e.detail.value
    })
    // console.log("需要翻译的=>",_this.data.from_value)
  },


  // 清空文本框
  clearTextArea: function(){
    this.setData({
      from_value: " ",
      result_value: " "
    });
  },

  // 翻译
  translate: function () {
    var _this = this;
    var from_value = _this.data.from_value;
    var from_lang = _this.data.from_lang;
    var to_lang = _this.data.to_lang;
    if(from_value.length != 0 && from_value != " "){
      wx.request({
        url: "https://www.mxnzp.com/api/convert/translate?app_id=hiriqumornqhsevl&app_secret=WWt2RkR6WDY1TWM4WTZXTXJDWG5pUT09&content=" + from_value + "&from=" + from_lang + "&to=" + to_lang,
        method: 'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          // console.log("相关信息=>", res.data);
          _this.setData({
            result_value: res.data.data.result
          });
          // console.log("翻译结果=>", _this.data.result_value)
        }
      });
    }else{
      wx.showToast({
        title: '请输入翻译内容',
        icon: "none"
      })
    }
  },

  // 复制结果
  copyText: function (e) {
    // console.log(e)
    if (e.currentTarget.dataset.text.length !=0){
      wx.setClipboardData({
        data: e.currentTarget.dataset.text,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制成功'
              })
            }
          })
        }
      })
    }
    if (e.currentTarget.dataset.text.length == 0){
      wx.showToast({
        title: '请先翻译点什么吧',
        icon:"none"
      })
    }
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
      title: '翻译助手助你学习',
      desc: '知识简助手小程序助你学习',
      path: '/pages/translate/translate'
    }
  }
})