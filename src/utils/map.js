//创建和初始化地图函数：
function initMap(){
  createMap();//创建地图
  setMapEvent();//设置地图事件
  addMapControl();//向地图添加控件
  addPolyline();//向地图中添加线
  addRemark();//向地图中添加文字标注
}

//创建地图函数：
function createMap(){
  var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
  var point = new BMap.Point(114.437999,30.51471);//定义一个中心点坐标
  map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
  window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
  map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
  map.enableScrollWheelZoom();//启用地图滚轮放大缩小
  map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
  map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
  //向地图中添加缩放控件
  var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_ZOOM});
  map.addControl(ctrl_nav);
  //向地图中添加缩略图控件
  var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
  map.addControl(ctrl_ove);
  //向地图中添加比例尺控件
  var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
  map.addControl(ctrl_sca);
}

//标注线数组
var plPoints = [{style:"solid",weight:4,color:"#f00",opacity:0.6,points:["114.437141|30.51485","114.43706|30.514679","114.437222|30.51478","114.437024|30.51478","114.437204|30.514671","114.437141|30.514826","114.437132|30.514749"]}
  ,{style:"solid",weight:4,color:"#f00",opacity:0.6,points:["114.437168|30.514694","114.437159|30.514718","114.437123|30.514756","114.437105|30.514764","114.43706|30.514764","114.437141|30.514725","114.437177|30.514702","114.437168|30.51471","114.437159|30.514733","114.437123|30.514756","114.437087|30.514725","114.437087|30.514702","114.437078|30.514694"]}
];
//向地图中添加线函数
function addPolyline(){
  for(var i=0;i<plPoints.length;i++){
    var json = plPoints[i];
    var points = [];
    for(var j=0;j<json.points.length;j++){
      var p1 = json.points[j].split("|")[0];
      var p2 = json.points[j].split("|")[1];
      points.push(new BMap.Point(p1,p2));
    }
    var line = new BMap.Polyline(points,{strokeStyle:json.style,strokeWeight:json.weight,strokeColor:json.color,strokeOpacity:json.opacity});
    map.addOverlay(line);
  }
}
//文字标注数组
var lbPoints = [{point:"114.43697|30.514578",content:"比赛地点在<br/>亮胜楼12楼哦～"}
];
//向地图中添加文字标注函数
function addRemark(){
  for(var i=0;i<lbPoints.length;i++){
    var json = lbPoints[i];
    var p1 = json.point.split("|")[0];
    var p2 = json.point.split("|")[1];
    var label = new BMap.Label("<div style='padding:2px;'>"+json.content+"</div>",{point:new BMap.Point(p1,p2),offset:new BMap.Size(3,-6)});
    map.addOverlay(label);
    label.setStyle({borderColor:"#999"});
  }
}

initMap();//创建和初始化地图