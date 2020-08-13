//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   articles:[
     {
      date:'6月27日',
      items:[
        {
          id: "1",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
        },
        {
          id: "2",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
        },
        {
          id: "3",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
        },
        {
          id: "4",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
        }
      ]
     },
     {
      date:'6月28日',
      items:[
        {
          id: "5",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
        },
        {
          id: "6",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
        },
        {
          id: "7",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
        },
        {
          id: "8",
          title: "New Balance 9800万买来的教训：一个好商标对企业究竟有多重要？",
          pic: "https://img.36krcdn.com/20200813/v2_50ef678b35604fc4a8049e096dda9878_img_jpg"
        }
      ]
     }
   ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showDetail(e){
    // console.log(e)
    // console.log(e.currentTarget.dataset.item.id)
    const id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url:`../detail/detail?id=${id}`
    })
  },
  onLoad: function () {
    wx.request({
      url:'',
      success:(data)=>{
        this.setData(
        {
          articles:data.result
        }
        )
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
