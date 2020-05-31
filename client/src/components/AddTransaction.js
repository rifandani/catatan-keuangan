import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: parseInt(amount),
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Tambah Transaksi</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaksi</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Masukkan detail transaksi..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Jumlah <br />
            (negatif = <span className="pengeluaran">pengeluaran</span> |
            positif = <span className="pemasukan">pemasukan</span>)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Masukkan jumlah transaksi..."
          />
        </div>
        <button className="btn">Tambah Transaksi</button>
      </form>
    </>
  );
};
