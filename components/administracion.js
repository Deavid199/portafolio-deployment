import Head from "next/head";
import Sidebar from "./sidebar";
import Modal from 'react-modal';
import useTrabajo from "../hook/useTrabajo";
import ModalTrabajo from "./modalTrabajo";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

export default function Administracion({ children, title = '', description = '' }) {

  const { modal } = useTrabajo();

  return (
    <>
      <Head>
        <title>{`Davideveloping - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="body">
        <div className="container">
          <Sidebar />
          {children}
        </div>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalTrabajo />
        </Modal>
      )}
    </>
  )
}
