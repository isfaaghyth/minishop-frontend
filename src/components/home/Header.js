import React from 'react';
import { Link } from  'react-router-dom';

export const Header = () => (
  <div className="jumbotron text-center alert alert-success">
    <h1>Selamat Datang di Minishop</h1>
    <Link to="/products">
      <div className="btn btn-lg btn-link">
        Mulai Belanja
      </div>
    </Link>
  </div>
);