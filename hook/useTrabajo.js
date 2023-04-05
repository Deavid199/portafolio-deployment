import { useContext } from 'react';
import TrabajoContext from '../context/TrabajoProvider';

const useTrabajo = () => {
    return useContext(TrabajoContext)
}

export default useTrabajo;