import React, { useRef } from 'react';


const PrintThermalData = () => {
  const printRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = () => {
    if (printRef.current) {
      const printContents = printRef.current.innerHTML;
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Print</title>
              <style>
                @media print {
                  body {
                    margin: 0;
                    padding: 0;
                    width: 80mm; /* Set width to match the thermal printer size */
                    font-family: Arial, sans-serif;
                  }
                  .thermal-content {
                    width: 80mm; /* Force content width to match thermal paper size */
                    font-size: 12px; /* Smaller font for thermal printing */
                    padding: 0;
                    margin: 0;
                    word-wrap: break-word;
                  }
                }
                body {
                  font-family: sans-serif;
                  padding: 10px;
                  white-space: pre-wrap; /* To preserve text formatting */
                }
              </style>
            </head>
            <body>
              ${printContents}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }
    }
  };

  return (
    <div className="p-4">
      <div ref={printRef} className="thermal-content w-[302px] space-y-1 bg-gray-200 text-black p-2">
        {/* The content to print */}
        <h1 className='text-2xl font-serif font-semibold'>AVELLS</h1>
        <div className='flex font-serif text-lg justify-between items-center'>
          <h1>Name:</h1>
          <p>Ahmed Gull</p>
        </div>
        <div className='flex text-lg justify-between  items-center'>
          <h1 className='font-serif'>Mobile #:</h1>
          <p>03335557788</p>
        </div>
        <div className='flex justify-between items-center  text-lg space-y-1'>
          <h1>CNIC #:</h1>
          <p>3750277788551</p>
        </div>
        <div className=' font-serif text-lg overflow-hidden'>
          <p className=''>Address :</p>
          <p>Bacha khan market peshawer kohat road</p>
        </div>
        <div className=' font-serif text-lg overflow-hidden'>
          <p className=''>Description :</p>
          <p>the product was sell to this person</p>
        </div>
        <div className='flex justify-between items-center  text-lg'>
          <h1 className='font-serif'>Quantity:</h1>
          <p>25</p>
        </div>
        <div className='flex justify-between items-center text-lg'>
          <h1 className='font-serif'>Price of Item</h1>
          <p>80</p>
        </div>
        <div className='flex justify-between items-center text-lg'>
          <h1 className='font-serif'>Total Amount:</h1>
          <p>2000</p>
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Print
      </button>
    </div>
  );
};

export default PrintThermalData;
