import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Spin, Input } from "antd";
import axios from "axios";
import "../styles/product.css";

const Product = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [quantities, setQuantities] = useState({});

  const API_URL = "https://4ad233c5220738d1.mokky.dev/product";

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setProducts(res.data);

        
        const q = {};
        res.data.forEach(p => (q[p.id] = 1));
        setQuantities(q);

        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const changeQty = (id, value) => {
    if (value < 1) value = 1;
    setQuantities(prev => ({ ...prev, [id]: value }));
  };

  const addToCart = (product) => {
    const qty = quantities[product.id];

    const exist = cart.find(item => item.id === product.id);

    let updatedCart;

    if (exist) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + qty }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: qty }];
    }

    setCart(updatedCart);
    alert(`${product.name} savatga qo‘shildi (${qty})`);

    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  if (loading) return <Spin size="large" />;

  const filtered = products.filter(p =>
    p.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-page">
      <h2>Mahsulotlar</h2>

      <Input.Search
        placeholder="Mahsulot qidirish..."
        allowClear
        onChange={(e) => setSearch(e.target.value)}
        style={{ maxWidth: 400, marginBottom: 20 }}
      />

      <Row gutter={[20, 20]}>
        {filtered.length === 0 ? (
          <p>Mahsulot topilmadi</p>
        ) : (
          filtered.map(product => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card hoverable className="product-card">
                <div className="image-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>

                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>

                <div className="qty-controls">
                  <Button onClick={() => changeQty(product.id, quantities[product.id] - 1)}>-</Button>
                  <Input
                    type="number"
                    value={quantities[product.id]}
                    onChange={(e) => changeQty(product.id, Number(e.target.value))}
                  />
                  <Button onClick={() => changeQty(product.id, quantities[product.id] + 1)}>+</Button>
                </div>

                <Button className="add-cart-btn" onClick={() => addToCart(product)}>
                  Savatga qo‘shish
                </Button>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Product;
