import "./Loading.css"; // Asegúrate de importar o definir estilos CSS para este componente

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
