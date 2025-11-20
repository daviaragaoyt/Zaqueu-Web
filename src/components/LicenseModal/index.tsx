import React, { useState } from 'react';
import { getModalStyles } from './styles';
import { FaTimes } from 'react-icons/fa';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}

const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose, isMobile }) => {
  const styles = getModalStyles(isMobile);

  // Estado simples para o formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cnpj: '',
    telefone: '',
    arquivo: null
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Solicitação enviada com sucesso! (Lógica de backend aqui)");
    onClose();
  };

  // Fecha o modal se clicar no fundo escuro (overlay)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div style={styles.modalContainer}>
        <button style={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <h2 style={styles.headerTitle}>Solicite a sua licença</h2>

        <div style={styles.bodyContent}>
          
          {/* --- LADO ESQUERDO: QR CODE --- */}
          <div style={styles.leftSection}>
            <p style={styles.instructionText}>
              Leia o QrCode abaixo para o pagamento da licença e preencha o formulário ao lado.
            </p>
            <h3 style={styles.pixTitle}>PIX</h3>
            {/* Substitua o src abaixo pelo seu QR Code real ou gerador de QR Code */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
              alt="QR Code PIX" 
              style={styles.qrCodeImage} 
            />
          </div>

          {/* --- LADO DIREITO: FORMULÁRIO --- */}
          <div style={styles.rightSection}>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nome</label>
                <input 
                  type="text" 
                  style={styles.input} 
                  required 
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input 
                  type="email" 
                  style={styles.input} 
                  required 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>CNPJ da Igreja</label>
                <input 
                  type="text" 
                  style={styles.input} 
                  required 
                  onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Telefone (com DDD)</label>
                <input 
                  type="tel" 
                  style={styles.input} 
                  required 
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Anexe o comprovante de pagamento</label>
                <input 
                  type="file" 
                  style={styles.input} 
                  accept="image/*,.pdf"
                  required 
                />
              </div>

              <button type="submit" style={styles.submitButton}>
                Solicite sua licença
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LicenseModal;