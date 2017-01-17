import React from 'react'

import SiteConfig from './site-config.js'

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: SiteConfig.files
        }   
    }

    setFirstFlag() {
        let $list = $(".lists ul");
        let $firstLi = $list.find("li").eq(0);
        if($firstLi.length)
            $firstLi.append('<i class="newIcon"></i>');
    }

    componentDidMount() {
        this.setFirstFlag()
    }

    render() {
        return (
            <div className='lists'>
                {
                    this.state.lists.map((list) => {
                        return (
                            <div className='list-item'>
                                <h2>{list.year}</h2>
                                <ul>
                                    {
                                        list.items.map((item) => {
                                            let title = '第'+item.index+'期';
                                            let imgSrc = './src/static/img/thumb/thumb_'+item.index+'.jpg';
                                            return (
                                                <li data-key={item.index}>
                                                    <a href='javascript:void(0)' title={title}>
                                                        <img src={imgSrc} />
                                                        <p>{title}</p>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }       
}