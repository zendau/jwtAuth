import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import actions from '../redux/actions'


export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}