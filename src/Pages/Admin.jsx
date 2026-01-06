import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, message } from "antd";
import axios from "axios";
import "../styles/admin.css";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();

  const MOCKY_URL = "https://4ad233c5220738d1.mokky.dev/product";

  const fetchProducts = async () => {
    try {
      const res = await axios.get(MOCKY_URL);
      setProducts(res.data);
    } catch {
      message.error("Mahsulotlar yuklanmadi");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openAddModal = () => {
    setEditingProduct(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setIsModalOpen(true);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    message.success("Mahsulot o‘chirildi");
  };

  const handleSubmit = () => {
    form.validateFields().then(values => {
      if (editingProduct) {
        setProducts(products.map(p =>
          p.id === editingProduct.id ? { ...p, ...values } : p
        ));
        message.success("Mahsulot yangilandi");
      } else {
        setProducts([...products, { id: Date.now(), ...values }]);
        message.success("Yangi mahsulot qo‘shildi");
      }
      setIsModalOpen(false);
    });
  };

  const columns = [
    { title: "ID", dataIndex: "id", width: 80 },
    { title: "Mahsulot nomi", dataIndex: "name" },
    {
      title: "Narxi ($)",
      dataIndex: "price",
      render: price => `$${price}`
    },
    {
      title: "Rasm",
      render: (_, record) => (
        <img src={record.image} alt={record.name} className="admin-img" />
      )
    },
    {
      title: "Harakatlar",
      render: (_, record) => (
        <div className="admin-actions">
          <Button type="link" onClick={() => openEditModal(record)}>
            Tahrirlash
          </Button>
          <Button type="link" danger onClick={() => deleteProduct(record.id)}>
            O‘chirish
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="admin-container">
      <h1 className="admin-title">🏋️ Admin Panel</h1>

      <Button type="primary" className="add-btn" onClick={openAddModal}>
        + Yangi mahsulot
      </Button>

      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        className="admin-table"
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingProduct ? "Mahsulotni tahrirlash" : "Yangi mahsulot"}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Mahsulot nomi"
            rules={[{ required: true, message: "Iltimos, nomni kiriting" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="price"
            label="Narxi ($)"
            rules={[{ required: true, message: "Iltimos, narxni kiriting" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="image"
            label="Rasm URL"
            rules={[{ required: true, message: "Iltimos, rasm URL kiriting" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Admin;
