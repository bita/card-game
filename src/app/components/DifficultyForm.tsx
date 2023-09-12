import DropDown from "./DropDown"

const onConfirm = (value: any) => {
    console.log('from Form' + value)
}
const DifficultyForm = () => {
    return (
        <form >
            <DropDown />
        </form>
    )
}

export default DifficultyForm;