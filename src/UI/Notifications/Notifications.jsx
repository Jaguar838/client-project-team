import toast, { useToaster } from 'react-hot-toast';

const Notifications = () => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;
  return (
    <div onMouseEnter={startPause} onMouseLeave={endPause}>
      {toasts
        .filter(toast => toast.visible)
        .map(toast => (
          <div key={toast.id} {...toast.ariaProps}>
            {toast.message}
          </div>
        ))}
    </div>
  );
};
// Create toasts anywhere
toast('Here is your toast.');
export default Notifications;
