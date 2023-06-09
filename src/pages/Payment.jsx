import React, { useState } from 'react';

export default function () {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos de pago:', { cardNumber, expiryDate, cvv, name });
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setName('');
    };

    return (
        <div className='bg-[#FFFFFF] p-4 h-[78vh]'>
            <form onSubmit={handleSubmit} className="p-4  rounded-lg shadow-lg bg-[#E7E7E7]">
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="cardNumber">
                        Número de tarjeta
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="1234 5678 9012 3456"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="expiryDate">
                        Fecha de caducidad
                    </label>
                    <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="MM/AA"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="cvv">
                        CVV
                    </label>
                    <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="123"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
                        Nombre del titular
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Nombre Apellido"
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 font-bold text-white bg-gradient-to-r from-purple-900 to-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                    >
                        Pagar
                    </button>
                </div>
            </form>
        </div>
    );
};
