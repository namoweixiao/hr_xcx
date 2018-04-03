// pages/mine/recommend/recommend.js

const network = require("../../../utils/network.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRecommendHistory()
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
  getRecommendHistory: function () {
    let _this = this;
    network.post("/smallProgramAudit/getSpMyRecommendation.do", {
      shareFansId: getApp().globalData.fansId
    }, function (res) {
      if (res.code == "0") {
        _this.setData({
          recommendList: res.data
        })
      } else {
        console.log(`smallProgramAudit/getSpMyRecommendation.do:${res.message}`)
      }
    })
  },
  linkTo: function (e) {
    let query = JSON.parse(e.currentTarget.dataset.query)
    wx.navigateTo({
      url: `../recommendDetail/recommendDetail?positionApplyId=${query.positionApplyId}&interviewerInfoId=${query.interviewerInfoId}`,
    })
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
  
  }
})