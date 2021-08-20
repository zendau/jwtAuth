import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/rootReduser";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector