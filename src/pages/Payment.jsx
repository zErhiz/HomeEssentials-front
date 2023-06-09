import { useState } from 'react';

export default function () {
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [vencimientoTarjeta, setVencimientoTarjeta] = useState('');
    const [cvv, setCvv] = useState('');
    const [nombreTarjeta, setNombreTarjeta] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos de pago:', { numeroTarjeta, vencimientoTarjeta, cvv, nombreTarjeta });
        setNumeroTarjeta('');
        setVencimientoTarjeta('');
        setCvv('');
        setNombreTarjeta('');
    };

    return (
        <div className='bg-[#FFFFFF] p-4 h-[80vh] flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center pb-4'>
                <h3 className='font-bold text-gray-700'>Pago con tarjeta</h3>
            </div>
            <form onSubmit={handleSubmit} className="p-4 sm:w-[50vw] rounded-lg shadow-lg bg-[#E7E7E7]">
                <div className="mb-4">
                    <label className="block mb-1 sm:mb-2 font-bold text-gray-700" htmlFor="numeroTarjeta">
                        Número de tarjeta
                    </label>
                    <input
                        type="text"
                        id="numeroTarjeta"
                        value={numeroTarjeta}
                        onChange={(e) => setNumeroTarjeta(e.target.value)}
                        className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="1234 5678 9012 3456"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 sm:mb-2 font-bold text-gray-700" htmlFor="vencimientoTarjeta">
                        Fecha de caducidad
                    </label>
                    <input
                        type="text"
                        id="vencimientoTarjeta"
                        value={vencimientoTarjeta}
                        onChange={(e) => setVencimientoTarjeta(e.target.value)}
                        className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="MM/AA"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 sm:mb-2 font-bold text-gray-700" htmlFor="cvv">
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
                    <label className="block mb-1 sm:mb-2 font-bold text-gray-700" htmlFor="nombreTarjeta">
                        Nombre del titular
                    </label>
                    <input
                        type="text"
                        id="nombreTarjeta"
                        value={nombreTarjeta}
                        onChange={(e) => setNombreTarjeta(e.target.value)}
                        className="w-full px-3 py-2 leading-tight border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                        placeholder="Nombre Apellido"
                        required
                    />
                </div>
                <div className='flex justify-center items-center gap-2 mb-4 '>
                    <p>You can also pay through</p>
                    <a href="https://www.mercadopago.com.ar/"> <img src="/mercadoPago.png" className='w-28 h-8' alt="mercado pago" /> </a>
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
