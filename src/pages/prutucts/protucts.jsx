import React, { useEffect, useState } from 'react'
import { useGetAPIDATA } from '../../hooks/getAPIDATA'

import Popup from '../../components/popup/Popup';
import EbookCard from '../../components/ebook/ebookCard/EbookCard';

function ProductsPage() {
  const [bookName, setBookName] = useState('');
  const [bookDigitado, setBookDigitado] = useState('');
  const { bookData, loading, error } = useGetAPIDATA(bookName);
  const [popupContent, setPopupContent] = useState({ message: '', color: '' })
  const [showPopup, setShowPopup] = useState(false);

  function showAndHidePopup(message, color) {
    setPopupContent({ message, color });
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3500);
  }
  useEffect(() => {

    if (!loading) {
      if (error) {
        showAndHidePopup(`Error: ${error}`, 'error');
      } else if (bookData) {
        showAndHidePopup('Ebook encontrado!', 'success');
      }
    }
  }, [loading, error, bookData]);

  const handleInputChange = (e) => {
    setBookDigitado(e.target.value);
  };

  function BuscarLivro() {
    setBookName(bookDigitado);
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Nome do Livro'
        value={bookDigitado}
        onChange={handleInputChange}
      />

      <button onClick={BuscarLivro}>Buscar Ebooks</button>

      {loading && <p>Carregando...</p>}

      {error && <p>Erro ao buscar livro</p>}

      {Array.isArray(bookData) ? (
        <div>
          {bookData.map((a) => (
            <EbookCard key={a.id} {...a}></EbookCard>
          ))}
        </div>
      ) : (
        bookData && <div>Nenhum livro encontrado</div>
      )}

      {
        showPopup ?
          <Popup
            message={popupContent.message}
            color={popupContent.color}
          />
          : null
      }
    </div>
  )
}

export default ProductsPage
