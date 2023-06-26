interface CustomWidgetProps {
    // Define your props here
    message: string;
    onClick: () => void;
  }

 export const CustomWidget: React.FC<CustomWidgetProps> = ({ message, onClick }) => {
    return (
      <div>
        <p>{message}</p>
        <button onClick={onClick}>Click Me</button>
      </div>
    );
  };

 // export default CustomWidget;
