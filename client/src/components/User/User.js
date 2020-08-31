import React from 'react'
import NavAuth from '../Nav/NavLogin'

import { Layout } from 'antd';
const { Content, Footer } = Layout;




const User = () => {
  return (
    <Layout className="layout">
      <NavAuth />
      <Content style={{ width: '100vw', height: '100vh' }}>
        <div> My Blogs</div>
        <div>All Users</div>
        <div>All Blogs</div>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: 'dodgerblue' }}>Blogger ©2020</Footer>
    </Layout >
  )
}

export default User