// import React, { useState } from 'react'
// import axios from 'axios'
// import { connect } from 'react-redux'
// import { Modal, Form, Card, Input, Button, Row } from 'antd';

// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import { authenticatedLogin } from '../../state/actions/auth';





// const PasswordAdmin = ({ history, authenticatedLogin }) => {
//   const [visible, setModal] = useState(true)
//   const [spinner, spinModal] = useState(false)
//   const [form] = Form.useForm();

//   const styles = {
//     rowStyles: {
//       height: "30vh"
//     },
//     cardStyles: {
//       border: "none", height: "20vh", width: "70%"
//     },
//     formStyle: { border: 'none', textAlign: 'center' },
//     buttonStyle: {
//       marginTop: 10
//     }
//   }



//   const handleCancel = e => {
//     history.push('/login')
//     spinModal(true)
//     window.location.reload(false);
//   };

//   const onFinish = values => {

//     const value = values.password
//     history.push('/login')
//     axios.post('auth/admin', {
//       pass: value
//     })
//       .then(res => {

//         if (res.data.admin_status) {
//           setModal(false)
//           form.resetFields()
//           authenticatedLogin()
//         }
//       }).catch(err => {
//         console.log(err)
//       })

//   };

//   return (
//     <>
//       <Modal
//         closable={false}
//         footer={null}
//         visible={visible}
//         onCancel={(e) => handleCancel(e)}

//         confirmLoading={spinner}
//         destroyOnClose={true}
//       >
//         <Row justify="center" style={styles.rowStyles}>

//           <Card style={styles.cardStyles}>

//             <Form
//               form={form}
//               style={styles.formStyle}
//               size="middle"
//               onFinish={onFinish}
//             >

//               <Form.Item

//                 name='password'
//                 rules={[{ required: true, message: 'Password is required' }]}
//               >
//                 <Input.Password
//                   style={{ marginTop: "40px" }}
//                   placeholder="Password"
//                   iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//                 />
//               </Form.Item>
//               <Button size="large" htmlType="submit" style={styles.buttonStyle} type="primary">Admin login</Button>

//             </Form>
//           </Card>


//         </Row>
//       </Modal>
//     </>
//   )
// }


// const mapStateToProps = state => ({
//   authenticated: state.userData.authenticated,
// });
// const mapDispatchToProps = { authenticatedLogin };
// export default connect(mapStateToProps, mapDispatchToProps)(PasswordAdmin)