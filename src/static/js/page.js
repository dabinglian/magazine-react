import React from 'react'

import SiteConfig from './site-config.js'

import './lib/liquid.js'
import './lib/swfobject.js'
import './lib/flippingbook.js'


export default class Page extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            lists: SiteConfig.files,
            id: this.props.params.id
        }   
    }

    getParams() {
    	let currentIndex = this.state.id;
    	let currentCatalog;
    	let currentPageNum;
    	this.state.lists.map(function(list){
    		list.items.map(function(item){
    			if(item.index == currentIndex){
    				currentCatalog = item.catalog;
    				currentPageNum = item.num;
    			}
    		})
    	});
    	//return {currentIndex, currentCatalog, currentPageNum}
    }

    renderNav() {
    	let $nav = $(".nav");
    	let currentIndex = this.state.id;
    	let currentCatalog;
    	this.state.lists.map(function(list){
    		list.items.map(function(item){
    			if(item.index == currentIndex){
    				currentCatalog = item.catalog;
    			}
    		})
    	});
    	console.log(currentCatalog)

    }

    renderPage() {
    	console.log(flippingBook)
    	flippingBook.pages = [];
		for(var i=0;i<pageNum;i++){
			if(i==0){
				flippingBook.pages.push("../images/"+pageFile+"/front.jpg");
			}
			else if(i==pageNum-1){
				flippingBook.pages.push("../images/"+pageFile+"/back.jpg");
			}
			else{
				var j = i.toString();
				if(j.length<2){
					j = "0"+j;
				}
				flippingBook.pages.push("../images/"+pageFile+"/"+j+".jpg");
			}
		}
    }

    // componentDidMount() {
    // 	let params = this.getParams();
    // 	console.log(params)
    // }

    render() {
    	return (
    		<div className="topbar">
    			<div className="nav">
    			</div>
    			<a href="/list" className="backBtn" title="返回杂志列表">返回列表</a>
    			<div id="fbContainer">
					<a className="altlink" href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"><div id="altmsg">浏览此页面需要下载flash player，点击可前往下载</div></a>
				</div>
				<div id="fbMenu">
				  <a href="javascript:void(0)" id="fbBackButton" title="上一页"></a>
				  <a href="javascript:void(0)" id="fbForwardButton" title="下一页"></a>
				</div>
    		</div>
    	)
    }
}