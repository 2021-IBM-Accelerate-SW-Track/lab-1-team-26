import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
/*export default function Header(){
    return <div>2021 IBM Accelerate Software Track Lab Boiler Plate</div>
}
*/

export const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header>
            <h1>{title}</h1>
            <Button variant="contained" color="primary" onClick = {onClick}> 
                Add Task </Button>
        </header>
    )
}
Header.defaultProps = {
    title: 'IBM Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header