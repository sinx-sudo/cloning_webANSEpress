// import {useState} from 'react'
import Modal from '../shared/Modal'
import InputShare from '../shared/InputShare';

type HiringFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HiringForm = ({isOpen, onClose}:HiringFormProps) => {
    // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Modal 
    title="Hiring Form"
    isOpen= {isOpen}
    onClose={onClose}>
        <div> 
            <InputShare
            label= "Name"
            name="Name"
            type="text"
            placeholder='Please enter your name'
            required={true}
            // disabled={false}
            />
        </div>
    </Modal>
    </>
  )
}

export default HiringForm