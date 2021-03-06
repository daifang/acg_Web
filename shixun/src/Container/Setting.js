import React, { Component } from 'react'
import {Link,Route,HashRouter as Router} from 'react-router-dom'
import { NavBar, List, Switch,Icon, Button} from 'antd-mobile';
import {createForm} from 'rc-form'


class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
          checked: false,
          checked1: true,
        };
      }
      
    render() {
        const { getFieldProps } = this.props.form;
        return(
            <div>
                <NavBar
                    style={{backgroundColor:'rgb(255,64,129)',
                    position:'fixed',zIndex:'1000',right:'0px' ,top:'0px',width:'100%'}}
                    mode="white"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back(-1)}
                    >设置</NavBar>
                <div style={{marginTop:'45px'}}>
                <List>
                    <List.Item 
                    extra={<Switch
                        checked={this.state.checked}
                        onChange={() => {
                        this.setState({
                            checked: !this.state.checked,
                        });
                        }}
                    />}
                    >夜间模式</List.Item>
                    <List.Item style={{marginTop:'5%'}}
                    extra={<Switch
                        {...getFieldProps('Switch7', {
                        initialValue: false,
                        valuePropName: 'checked',
                        })}
                        platform="ios"
                    />}
                    >省流模式</List.Item>
                    <Link to='/person'><List.Item style={{marginTop:'5%'}}>爱好设置</List.Item></Link>
                    <Link to='/address'><List.Item style={{marginTop:'5%'}}>收货地址</List.Item></Link>
                    <Link to='/aboutus'><List.Item style={{marginTop:'5%'}}>关于我们</List.Item></Link>
                    
                </List>
                    
                        
                        <Button  type='warning' style={{width:'50%',margin:'0 auto',marginTop:'15%'}} 
                        onClick={(e)=>{this.toLogin(e)}}
                        >退出登录</Button>   
                    
                </div>
                
            </div>
        )
    }
    toLogin = (e)=>{
        this.props.history.push('/');
        this.setCookie('loginStatus','',-1)
        this.setCookie('userid','',-1)
        this.setCookie('username','',-1)
            
        
        
    }
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
        
    }
}
const Se = createForm()(Setting);
export default Se; 
