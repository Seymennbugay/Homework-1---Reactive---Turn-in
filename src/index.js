import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Genel stil dosyası (isteğe bağlı)
import App from './App'; // App bileşenini import ediyoruz

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Uygulamayı 'root' ID'li div'e render ediyoruz
);
