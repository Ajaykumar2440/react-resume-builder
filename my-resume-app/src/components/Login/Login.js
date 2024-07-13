import React, { useState } from 'react';
import { Form, Input, Button, Typography, Checkbox, Card } from 'antd';

const { Title } = Typography;

const Login = ({ onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    if (username && password) {
      onLogin({ username, password });
      setUsername('');
      setPassword('');
    }
  };

 
  return (
    <>
    <Card style={{
      backgroundImage: 'linear-gradient(80deg, #2af598 0%, #009efd 100%)',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       width: '100vw', // Full width of the viewport
       height: '100vh', // Full height of the viewport
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
    }}>
      <Title level={1} style={{ color: 'red' }}>Welcome To Resume Builder App</Title>
      <Form layout="vertical" onFinish={handleSubmit} style={{ maxWidth: '70%' }}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      </Card>
    
    </>
    
  );
};

export default Login;
