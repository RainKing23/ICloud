var widths=document.documentElement.clientWidth;
var heights=document.documentElement.clientHeight;
var boxOut=document.querySelector('.box-out');

var left=$(".left")
var right=$(".right")

boxOut.style.height=heights+'px';
var arr=[
	{
		id:1,
		title:'新列表',
		color:'#C96FE2',
		date:[
			{
				t:'12点吃饭',
				done:false
			},
			{
				t:'1点吃饭',
				done:false
			},
			{
				t:'8起床',
				done:true
			},
			{
				t:'10点休息',
				done:true
			},
		]
	},
	{
		id:2,
		title:'新列表2',
		color:'#6DDC31',
		date:[
			{
				t:'12点吃饭',
				done:true
			},
			{
				t:'1点吃饭',
				done:false
			},
			{
				t:'8起床',
				done:false
			},
			{
				t:'10点休息',
				done:false
			},
		]
	},
	{
		id:3,
		title:'新列表3',
		color:'#40ACF9',
		date:[
			{
				t:'12点吃饭',
				done:false
			},
			{
				t:'1点吃饭',
				done:false
			},
			{
				t:'8起床',
				done:true
			},
			{
				t:'10点休息',
				done:true
			},
		]
	},
]
var colors=['#C96FE2','#6DDC31','#40ACF9','#F2CB00','#9F845E','#F72469','#F89600']
var app=angular.module('app',[]);
app.controller('c',function($scope){
	$scope.data=arr;
	$scope.color=colors;
	$scope.index=0;
	// 列表点击
	$scope.bn=function(v){
		$scope.index=v;
	}
	// 增加列表
	$scope.add=function(){
		var indexs=$scope.data[$scope.data.length-1].id+1;
		$scope.data.push({
			id:indexs,
			color:$scope.color[(indexs-1)%7],
			title:'新列表'+indexs,
			date:[]
		});
		$scope.index=$scope.data.length-1
	}
	// 选项卡
	$scope.flag=false;
	$scope.btn=function(){
		$scope.changeColor=$scope.data[$scope.index].color;
		$scope.changeTitle=$scope.data[$scope.index].title;
		$scope.flag=!$scope.flag;
	}
	// 完成
	$scope.wc=function(){
		$scope.data[$scope.index].title=$scope.changeTitle;
		$scope.data[$scope.index].color=$scope.changeColor;
		$scope.flag=false;
	}
	// 修改颜色
	$scope.xy=function(v){
		$scope.changeColor=v;
	}
	// 删除
	$scope.del=function(){
		$scope.data.splice($scope.index,1)
		$scope.index=0;
		$scope.flag=false;
	}
	$scope.adds=function(){
		$scope.data[$scope.index].date.push({t:'',done:false});
	}
	// 修改
	$scope.xg=function(e,v,i){
		v.t=e.target.innerHTML;
		console.log(i)
		var ss=$scope.data[$scope.index].date.length-1;
		if(e.target.innerHTML.length==0){
			$scope.data[$scope.index].date.splice(ss,1)
		}
	}
	$scope.shang=function(v){
		v.done=!v.done;
	}
	$scope.xia=function(v){
		v.done=!v.done;
	}
	$scope.flg=false;
})

























function $(arr){
	return document.querySelector(arr);
}
function $$(arr){
	return document.querySelectorAll(arr);
}