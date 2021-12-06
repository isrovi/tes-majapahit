import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Card, Button } from "react-bootstrap";
import axios from "axios";

function App() {
  const [post, setPost] = useState();

  const url = "https://jsonplaceholder.typicode.com/posts";

  const getPosts = () => {
    axios
      .get(`${url}`)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App p-2">
      <h1>Get All Post</h1>
      <Row className="p-5 justify-content-between">
        {post?.map((item, index) => (
          <Card
            bg="light"
            class="mb-4"
            key={index}
            item={item}
            style={{ width: "18rem", marginBottom: 20 }}
          >
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default App;
