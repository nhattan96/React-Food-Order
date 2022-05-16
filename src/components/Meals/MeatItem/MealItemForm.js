import Input from '../../UI/Input'
import classess from './MealItemForm.module.css'

const MealItemForm = (props) => {
    return (
        <form className={classess.form} action="">
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}></Input>
            <button>+ Add</button>
        </form>
    )

}

export default MealItemForm