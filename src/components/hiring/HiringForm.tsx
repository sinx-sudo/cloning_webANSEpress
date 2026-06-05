import Modal from '../shared/Modal'
import InputShare from '../shared/InputShare';
import InputShare2 from '../shared/InputShare2';

import { useForm } from 'react-hook-form';

type HiringFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HiringForm = ({isOpen, onClose}:HiringFormProps) => {
    // const [isOpen, setIsOpen] = useState(false);
     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = (data: any) => console.log(data);
  return (
    <>
    <Modal 
    title="Hiring Form"
    isOpen= {isOpen}
    onClose={onClose}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
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
        <div>
            <InputShare2
              label="NAME"
              type="text"
              required={true}
              {...register("name",{required:true})}
              error= {errors.name?.toString() && "5555"}
            />
          </div>
          <div>
            <button onClick={handleSubmit(onSubmit)}>Save</button>
          </div>
      </form>
    </Modal>
    </>
  )
}

export default HiringForm