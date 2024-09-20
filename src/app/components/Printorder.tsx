import React, { useRef } from 'react';
import { ReactToPrint } from 'react-to-print';



const Printorder = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="py-2 px-4 bg-blue-500 text-white rounded">
            Print Order
          </button>
        )}
        content={() => componentRef.current}
        pageStyle={`
          @page { size: auto; margin: 20mm; }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
            }
          }
        `}
      />
      <div ref={componentRef} className="printable-content mt-4 p-4 bg-white shadow-lg">
        <p className="text-lg">This is the content that will be printed. You can add more complex HTML or components here as necessary.</p>
        <p>More content...</p>
      </div>
    </div>
  );
};

export default Printorder;
