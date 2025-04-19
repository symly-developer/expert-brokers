import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappIcon() {
  return (
    <>
      {/* Your page content here */}

      <a
        href="https://wa.me/61401809852?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20loan%20option."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '50%',
          width: '55px',
          height: '55px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 9999,
          textDecoration: 'none',
        }}
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}