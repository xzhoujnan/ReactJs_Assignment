import React, { useState } from 'react';
import { saveToFile } from '../utils/common';
import { Button } from 'react-bootstrap';
import './Form.css';

const Form = () => {
  const [bookInfo, setBookInfo] = useState({
    title: '',
    author: '',
    favourite: false,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFavouriteToggle = () => {
    setBookInfo(prevState => ({
      ...prevState,
      favourite: !prevState.favourite
    }));
  };

  const handleSubmit = () => {
    if (!bookInfo.title || !bookInfo.author) {
      setError('Error please try again');
      return;
    }

    saveToFile('books.json', bookInfo)
      .then(() => {
        setMessage('Success');
        setError('');
      })
      .catch((error) => {
        setMessage(`Lỗi: ${error.message}`);
      });
  };

  return (
    <div className="form-container">
      <div className="search-container">
        <input type="text" placeholder="Tìm kiếm..." />
        <button type="button"><i className="fas fa-search"></i> Tìm kiếm</button>
      </div>
      <h1>A list of book</h1>
      <div className="book-details">
        <div className="book-info">
          <p><strong>Book : Life of Pi </strong> {bookInfo.title}</p>
          <p><strong>Author : Davan </strong> {bookInfo.author}</p>
        </div>
      </div>
      <div className="book-details">
        <div className="book-info">
          <p><strong>Book : Học code totay </strong>{bookInfo.title}</p>
          <p><strong>Author : FPT </strong> {bookInfo.author}</p>
        </div>
      </div>
      <div className="book-details">
        <div className="book-info">
          <p><strong>Book : Learn Angular by Example</strong> {bookInfo.title}</p>
          <p><strong>Author : FPT Aptech</strong> {bookInfo.author}</p>
        </div>
      </div>
      <div className="book-details">
        <div className="book-info">
          <p><strong>Book : Họ nhà trai</strong> {bookInfo.title}</p>
          <p><strong>Author : Nguyễn Anh Tú</strong> {bookInfo.author}</p>
        </div>
      </div>
      <div className="book-details">
        <div className="book-info">
          <p><strong>Book : Đôi mắt có lửa</strong> {bookInfo.title}</p>
          <p><strong>Author : Nguyễn Hùng Sơn</strong> {bookInfo.author}</p>
        </div>
      </div>
      <h1>Add a new book</h1>
      <form>
      <p>Title</p>
        <div className="form-row">
          <input type="text" name="title" value={bookInfo.title} onChange={handleChange} />
        </div>
      <p>Author</p>
        <div className="form-row">
          <input type="text" name="author" value={bookInfo.author} onChange={handleChange} />
        </div>
        <Button variant="success" className="favou-button" onClick={handleFavouriteToggle}>
          {bookInfo.favourite ? <span className="check-mark">&#10003;</span> : null}
          Favourite
        </Button>
        <Button variant="primary" className="add-button" onClick={handleSubmit}>
          Add
        </Button>
      </form>
      {error && <p className="error">{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Form;

      
