//home.js
const app = getApp()

Page({
  	/**
	 * 页面的初始数据
	 */
  data: {
    articleList: []
  },
  	/**
	 * 生命周期函数--监听页面加载
	 */
  onLoad: function () {
   let that = this;
   wx.request({
     url: `${app.globalData.apiUrl}/post/getPostList`,
     data: {
        page: 1,
        pageNum: 10
     },
     method: 'GET',
     success: function (res) {
       // success
       if (res.data.success) {
         that.setData({
           deptsData: res.data.data
         })
       }
     },
     fail: function () {
       // fail
     },
     complete: function () {
       // complete
     }
   })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
