'use client';
import React, { useEffect, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Button } from '../../utils/wrapper';
import { Download } from 'react-feather';

const QRCodeWithLogo = ({ url, logo }) => {
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    // Initialize QR code
    const newQrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      image: logo,
      type: 'svg',
      dotsOptions: {
        color: '#000',
        type: 'rounded'
      },
      imageOptions: {
        imageSize: 0.9,
        crossOrigin: 'anonymous',
        margin: 5
      },
      data: url
    });
    setQrCode(newQrCode);
  }, [url, logo]);

  const downloadQRCode = () => {
    qrCode.download({ extension: 'png' });
  };

  return (
    <Button onClick={downloadQRCode} className="flex items-center gap-3">
      <Download className="w-4 h-4" />
      <span className="hidden sm:inline-block">Download QR Code</span>
    </Button>
  );
};

export default QRCodeWithLogo;
