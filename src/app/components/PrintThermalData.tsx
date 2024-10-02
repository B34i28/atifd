import React, { useRef } from 'react';

interface PrintThermalProps {
  content: string; // The content you want to print
}

const PrintThermalData: React.FC<PrintThermalProps> = ({ content }) => {
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
      <div ref={printRef} className="thermal-content bg-white text-black p-2">
        {/* The content to print */}
        {content}
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
