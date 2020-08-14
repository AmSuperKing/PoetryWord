//index.js
//获取应用实例
const app = getApp()

const jinrishici = require('../../utils/jinrishici.js')

Page({
  data: {
    url:""
  },

  // 下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.onLoad()  //重新加载数据
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  onLoad: function () {
    var _this = this;
    jinrishici.load(result => {
      // 下面是处理逻辑示例
      // console.log("获取的数据=>", result.data)
      _this.setData({
        "jinrishici": result.data.content,
        "matchTags": result.data.matchTags
      })
    });

    wx.request({
      url: 'https://api.uomg.com/api/rand.img1?format=json', //填写真实的接口地址
      method: "get",
      dataType: "json",
      //请求参数
      data: {
        encode: "json"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          url: res.data.imgurl
        })
        console.log("网址=>",_this.data.url)
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '一言诗词和你欣赏一言诗词',
      desc: '知识简助手小程序和你欣赏一言诗词',
      path: '/pages/index/index'
    }
  },

  // 分享朋友圈
  onShareTimeline: function () {
    return {
      title: '我觉得这一言诗词很不错！',
      query: '/pages/index/index'
    }
  },
  
})
