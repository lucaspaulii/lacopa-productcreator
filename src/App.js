import axios from "axios";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [name, setName] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const [value, setValue] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [amount, setAmount] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccesMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage(undefined);
    setSuccesMessage(undefined);
    setIsLoading(true);
    const objectToSubmit = {
      name,
      category,
      value: Number(value),
      description,
      amount: Number(amount),
      image,
    };
    const URL = "https://lacopa-api.onrender.com/createproduct";
    const promise = axios.post(URL, objectToSubmit);
    promise.then((res) => {
      setSuccesMessage("Produto inserido!");
      setIsLoading(false);
    });
    promise.catch((err) => {
      setErrorMessage(err.response.data);
      setIsLoading(false);
    });
  }
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>
          LaCopa <span>Product Creator</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            required
            placeholder="Preço (R$)"
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="number"
            required
            placeholder="Quantidade"
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="url"
            required
            placeholder="Imagem (URL)"
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">CRIAR PRODUTO</button>
        </form>
        {
          isLoading && (
            <h2 style={{ backgroundColor: "#ffffff" }}>Loading...</h2>
          )
        }
        {errorMessage && (
          <h2 style={{ backgroundColor: "#ffb3b2" }}>{errorMessage}</h2>
        )}
        {successMessage && (
          <h2 style={{ backgroundColor: "#abf7b1" }}>{successMessage}</h2>
        )}
      </div>
    </>
  );
}

export default App;
