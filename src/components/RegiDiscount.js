import React, { useState, useEffect } from "react";
import { Form, Button, Input, Card, Row, Col } from "antd";
import "./RegiDiscount.css";

function RegiDiscount() {

  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [userid, setUserid] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => res.json())
      .then(res => setData(res));
  }

  async function postData(values) {

    if (userid) {

      await fetch(`https://jsonplaceholder.typicode.com/posts/${userid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      setUserid(null);

    } else {

      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

    }

    form.resetFields();
    getData();
  }

  async function deleteData(id) {

    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    });

    getData();
  }

  function editData(item) {

    setUserid(item.id);

    form.setFieldsValue({
      title: item.title,
      originalPrice: 60000,
      offerPrice: 45000,
      days: 5,
      nights: 4,
      image: "https://picsum.photos/300"
    });

  }

  function searchData(value) {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {

        const filter = res.filter(i =>
          i.title.toLowerCase().includes(value.toLowerCase())
        );

        setData(filter);

      });

  }

  return (

    <div className="discount_admin">

      <Row gutter={25}>

        {/* FORM */}

        <Col xs={24} md={8}>

          <Card className="discount_form">

            <h2>{userid ? "Update Offer" : "Add Offer"}</h2>

            <Form
              form={form}
              layout="vertical"
              onFinish={postData}
            >

              <Form.Item
                label="Place"
                name="title"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter place name" />
              </Form.Item>

              <Form.Item
                label="Original Price"
                name="originalPrice"
              >
                <Input placeholder="Enter original price" />
              </Form.Item>

              <Form.Item
                label="Offer Price"
                name="offerPrice"
              >
                <Input placeholder="Enter offer price" />
              </Form.Item>

              {/* DAYS */}

              <Form.Item
                label="Days"
                name="days"
              >
                <Input placeholder="Enter number of days" />
              </Form.Item>

              {/* NIGHTS */}

              <Form.Item
                label="Nights"
                name="nights"
              >
                <Input placeholder="Enter number of nights" />
              </Form.Item>

              <Form.Item
                label="Image URL"
                name="image"
              >
                <Input placeholder="Paste image link" />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                block
                className="offer_btn"
              >
                {userid ? "Update Offer" : "Add Offer"}
              </Button>

            </Form>

          </Card>

        </Col>

        {/* DATA */}

        <Col xs={24} md={16}>

          <Card className="discount_data">

            <Input
              placeholder="Search offer..."
              className="search_offer"
              onChange={(e) => searchData(e.target.value)}
            />

            <div className="discount_grid">

              {data.map(i => {

                const original = 60000;
                const offer = 45000;
                const saving = original - offer;

                const days = 5;
                const nights = 4;

                return (

                  <div className="discount_card" key={i.id}>

                    <img
                      src={`https://picsum.photos/300?random=${i.id}`}
                      alt=""
                    />

                    <h4>{i.title}</h4>

                    <p>
                      {days} Days / {nights} Nights
                    </p>

                    <span className="price">

                      ₹{offer}

                      <span className="old_price">
                        ₹{original}
                      </span>

                    </span>

                    <p className="saving">
                      You Save ₹{saving}
                    </p>

                    <div className="btn_group">

                      <Button
                        size="small"
                        className="edit_btn"
                        onClick={() => editData(i)}
                      >
                        Edit
                      </Button>

                      <Button
                        size="small"
                        danger
                        onClick={() => deleteData(i.id)}
                      >
                        Delete
                      </Button>

                    </div>

                  </div>

                )

              })}

            </div>

          </Card>

        </Col>

      </Row>

    </div>

  );
}

export default RegiDiscount;