/**
 * 
 * @authors chenxiaowei
 * @date    2017-01-17
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

//引入样式文件
import '../css/main.css'

//引入js文件
import List from './list.js'
import Page from './page.js'


class MagazineLists extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
    	return (
    		<div className="thumb-list">
    			<h1>杂志列表</h1>
    			<List />
    		</div>
    	)
    }
}


render((
	<Router history={hashHistory} >   
        <Route path="/list" component={MagazineLists} />
        <Route path="/page/:id" component={Page} />
    </Router>
), document.getElementById("root"))

