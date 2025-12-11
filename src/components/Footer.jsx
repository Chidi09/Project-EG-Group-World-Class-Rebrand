const Footer = () => {
  return (
    <footer style={{
      background: 'var(--eg-dark)',
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <div className="container">
        <p style={{ opacity: 0.8 }}>© {new Date().getFullYear()} EG Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
