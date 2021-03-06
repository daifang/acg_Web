import React, { Component } from 'react'
import {NavBar, Icon,Card,} from 'antd-mobile';
import {Link} from 'react-router-dom'
export default class Funs extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    
    render() {
        if(this.state.data==null){
            return(
                <div>
                {/* 顶栏 */}
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)',
                    position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'
                }}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >我的粉丝</NavBar>
                </div>
                
            )
        }
        else{
        return (
            <div>
                {/* 顶栏 */}
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)',
                    position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'
                }}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >我的粉丝</NavBar>
                
                {/* 我的粉丝 */}
                <div style={{marginTop:'45px'}}>
                {this.state.data.map((item,key)=>(
                        <ul style={{padding:'0',border: '1px solid #cfcfcf',
                        marginBlockStart:'0' ,margin:'0px 0px 10px 0px'
                        }} key={key}>                           
                                
                                    <li style={{height:'90px' ,width:'100%'}}>
                                        <img src={"/images/avatar/"+item.avatarid } 
                                        style={{width:'60px',height:'60px', float:'left',borderRadius:'50%',
                                        margin:'15px 0px 10px 40px'}} alt=''/>
                                        <p style={{float:'right',fontSize:'14px',fontWeight:'bold',
                                        width:'50%',overflow:'hidden',marginRight:'30px'
                                        }}>
                                            {item.fanname} <br/>
                                            <br/>
                                            
                                            <span style={{fontSize:'12px'}}>
                                                {item.fanid}
                                            </span>
                                        </p> 
                                        
                                      
                                       
                                    </li>                                  
                                                                                                                                           
                        </ul>    
                    ))
                }   
                </div>
                
            
                            
                           
                    
                {/* 跳转框 */}
                <div id='footerfuns'>
            <div className='boxfuns'>
                <Link to={'/fans/'+this.props.match.params.id} >
                    <img src='/img/funs.png' alt=''   className='footerimgfuns'/>
                    <span className='textfuns'>我的粉丝</span>
                </Link>
            </div>
            <div className='boxfuns'>
                <Link to={'/concern/'+this.props.match.params.id}>
                  <img src='/img/关注.png' alt='' className='footerimgfuns'/>
                  <span className='textfuns'>我的关注</span>
                </Link>
            </div>
                    
        </div>
                    
        </div>
            
        )}
    }
    componentDidMount(){
        
        fetch('https://daitianfang.1459.top/api/v1/fans?id='+this.props.match.params.id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data.data});
        })
    }
}
