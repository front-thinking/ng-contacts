# AngularJS Contacts

基于AngularJS和H5类似于微信通讯录一样的组件

线上DEMO: [https://front-thinking.github.io/projects/ng-contacts/test.html)

扫码DEMO: ![QR Code](https://github.com/gcaufy/ng-daterange-picker/raw/master/screenshots/qr.png)

![Daterange Picker](https://github.com/front-thinking/ng-contacts/imgs/1472387121.png)

### Usage

加入代码引用:
```html
<script src="dist/ng-contacts.min.js"></script>
```
模块依赖注入:
```javascript
var app = angular.module('myApp', ['ngContacts']);
```
HTML:
```html
<ng-contacts ng-ct-data="contactData" ng-ct-history="historyData" ng-ct-title="title" ng-ct-model="contactSelect"></ng-contacts>
```

### 参数说明:
|  参数 | 类型 | 说明
| ----- | ---- | ----
| ng-ct-data | Array | 通讯录名单数组，包含通讯录条目对象
| ng-ct-history | Array | 历史记录数组，包含条目姓名
| ng-ct-title | String | 通讯录名称，默认'通讯录'
| ng-ct-model | Object | 双向绑定对象

### 实例:
```javascript
// 传入组件title
$scope.title = '所有国家或地区';
// 传入历史数据
$scope.historyData = ['美国', '日本', '新加坡'];
// 传入联系人或者地址数据，其中对象name和py必须，组件搜索和过滤展示需要
$scope.contactData = [{name: '中国',price: '9.9',en: 'cn',py: 'zhongguo' },{ name: '美国',price: '9.9',en: 'en',py: 'meiguo'},{name: '英国国',price: '9.9',en: 'en',py: 'yingguo'},{name: '台湾',price: '9.9',en: 'en',py: 'taiwan'},{name: '日本',price: '9.9',en: 'en',py: 'riben'},{name: '西班牙',price: '9.9',en: 'en',py: 'xibanya'}]
```