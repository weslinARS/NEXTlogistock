import { Fragment  } from 'react';
import { createPortal } from 'react-dom';
import type {ReactNode} from 'react';
import type { ModalOptions } from '@/contexts/AlertContext';

export function DaisyModal({
  title,
  text,
  icon,
  showDenyButton = false,
  showCancelButton = false,
  confirmButtonText = 'OK',
  denyButtonText = 'Deny',
  cancelButtonText = 'Cancel',
  customButtons,
  onConfirm,
  onDeny,
  onCancel,
}: ModalOptions & {
  onConfirm: () => void;
  onDeny?: () => void;
  onCancel?: () => void;
}) {
  const modalRoot = document.getElementById('modal-root') || document.body;

  const iconMap: Record<string, ReactNode> = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
  };

  return createPortal(
    <Fragment>
      <div className="modal modal-open">
        <div className="modal-box p-6 space-y-4">
          {icon && (
            <div className="text-4xl text-center">
              {typeof icon === 'string' ? iconMap[icon] : icon}
            </div>
          )}
          {title && <h3 className="font-bold text-lg">{title}</h3>}
          {text && <p>{text}</p>}
          <div className=" flex flex-col gap-2 md:modal-action">
            {customButtons ? (
              customButtons({
                onConfirm,
                onDeny: onDeny ?? (() => {}),
                onCancel: onCancel ?? (() => {}),
              })
            ) : (
              <>
                {showDenyButton && onDeny && (
                  <button className="btn btn-ghost" onClick={onDeny}>
                    {denyButtonText}
                  </button>
                )}
                {showCancelButton && onCancel && (
                  <button className="btn btn-outline" onClick={onCancel}>
                    {cancelButtonText}
                  </button>
                )}
                <button className="btn btn-primary" onClick={onConfirm}>
                  {confirmButtonText}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fixed inset-0 bg-black opacity-50"></div>
    </Fragment>,
    modalRoot,
  );
}
