import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'

import { UserOutlined } from '@ant-design/icons';


import { Row, Col, Layout, Menu } from 'antd';
import { setLogoutUser } from '../../state/actions/auth'

const { Header } = Layout;
const { SubMenu } = Menu;

const Nav = ({ authenticated, setLogoutUser }) => {

  const logout = () => {
    return axios.get('auth/logout')
      .then(res => {
        setLogoutUser()
      }).catch(err => {
        console.log(err)
      })
  }



  return authenticated ?
    (<Header style={{ backgroundColor: "white" }}>
      <Row justify="space-around">
        <Col span={1}>
          <Link to="/">Blogger</Link>
        </Col>
        <Col span={1} offset={17} style={{ paddingTop: 10, marginRight: 50 }}>
          <Menu

            // defaultSelectedKeys={['1']}
            mode="inline"
            style={{ border: 'none', color: 'blue' }}
            icon={<UserOutlined />}
          >
            <SubMenu
              icon={<UserOutlined />}
              mode="inline"
              key="sub1"
              title={"Profile"
              }
              style={{ width: 125 }}
            >
              <Menu.Item style={{ padding: 0 }} key="1"><Link to="/user">Account</Link></Menu.Item>
              <Menu.Item style={{ padding: 0 }} key="2"><Link to="/" onClick={(e) => logout()}>Logout</Link></Menu.Item>
            </SubMenu>
          </Menu >
        </Col>
      </Row>
    </Header >
    ) : (<Header style={{ backgroundColor: "white" }}>
      <Row>
        <Col span={2}><Link to="/">Blogger</Link></Col>
        <Col span={1} offset={20}><Link to="/login">Login</Link></Col>
      </Row>
    </Header>)

}


const mapStateToProps = state => ({
  authenticated: state.userData.authenticated,
});
const mapDispatchToProps = { setLogoutUser };
export default connect(mapStateToProps, mapDispatchToProps)(Nav)