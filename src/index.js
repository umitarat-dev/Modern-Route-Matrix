import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Eğer Bootstrap'in JavaScript özelliklerini kullanacaksan, bu satırı eklemen gerekir.
// Alternatif olarak, CDN script etiketini public/index.html dosyasına ekleyebilirsin.
// Eğer sadece CSS ile stilleri kullanıyorsan, bu satıra gerek yok.
// Best practice olarak, React ortamında import 'bootstrap/dist/js/bootstrap.bundle.min.js' diyerek de bundle'ı index.js'e import edebilirsin. Böylece CDN script'e gerek kalmaz ve tüm dosyalar React'in build sürecine dahil olur.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// BrowserRouter import;
// import { BrowserRouter } from "react-router-dom"

// GitHub Pages + SPA router refresh handling..
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter basename='/React-Project-Router'>
    <HashRouter>
        <App />
    </HashRouter>
    // </BrowserRouter>
);
