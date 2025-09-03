
"use client";

import React from "react";
import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 36 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 36 },
    sm: { span: 14 },
  },
};

export default function Contact() {
  const [form] = Form.useForm();
  return (
    <section>
      <h2 className="text-2xl text-white font-mono font-bold mb-6">お問い合わせフォーム</h2>
      <p className="text-white font-mono mb-4">ご不明な点がございましたら、お気軽にお問い合わせください。</p>
      <Form
        {...formItemLayout}
        form={form}
        variant="underlined"
        layout="vertical"
        style={{ maxWidth: 800 }}
        className="mx-auto"
      >
        <Form.Item className="bg-transparent" label={<span className="text-white">お名前</span>} name="Name" rules={[{ required: true, message: 'お名前は必須です。' }]}> 
          <Input className="text-white bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent" />
        </Form.Item>
        <Form.Item className="bg-transparent" label={<span className="text-white">ご所属</span>} name="Affiliation">
          <Input className="text-white bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent" />
        </Form.Item>
        <Form.Item className="bg-transparent" label={<span className="text-white">メールアドレス</span>} name="Email" rules={[{ required: true, message: 'メールアドレスは必須です。' }]}> 
          <Input className="text-white bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent" />
        </Form.Item>
        <Form.Item className="bg-transparent" label={<span className="text-white">お問い合わせ内容</span>} name="Message" rules={[{ required: true, message: 'お問い合わせ内容は必須です。' }]}> 
          <Input.TextArea className="text-white bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button className="bg-transparent text-white border border-white hover:scale-105 hover:bg-transparent" type="primary" htmlType="submit">
            送信する
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}